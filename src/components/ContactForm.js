'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import { site } from '@/data/site';
import { services } from '@/data/services';
import styles from './ContactForm.module.css';

const budgets = ['Not sure yet', 'Under $5k', '$5k – $15k', '$15k – $50k', '$50k+'];
const initial = { name: '', email: '', company: '', budget: budgets[0], message: '', interests: [] };

const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
const emailJsReady = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const toggleInterest = (title) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(title) ? f.interests.filter((i) => i !== title) : [...f.interests, title],
    }));

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) er.message = 'A few more details help us reply properly (10+ characters).';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const params = {
      from_name: form.name,
      reply_to: form.email,
      company: form.company || '—',
      budget: form.budget,
      interests: form.interests.join(', ') || '—',
      message: form.message,
    };

    if (!emailJsReady) {
      // Fallback: open the visitor's email client with everything pre-filled.
      const body = `Name: ${params.from_name}\nEmail: ${params.reply_to}\nCompany: ${params.company}\nBudget: ${params.budget}\nInterested in: ${params.interests}\n\n${params.message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project enquiry from ${form.name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    try {
      setStatus('sending');
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, params, { publicKey: EMAILJS.publicKey });
      setStatus('sent');
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className={styles.wrap}>
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            className={styles.success}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className={styles.successIcon}>
              <Icon name="check" size={28} strokeWidth={2.2} />
            </span>
            <h3>Thanks — message on its way.</h3>
            <p className="muted">
              {emailJsReady
                ? 'We’ve received your enquiry and will reply within 24 hours.'
                : `Your email app should have opened with the message ready. If not, write to us at ${site.email}.`}
            </p>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setStatus('idle')}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className={styles.form}
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.row}>
              <Field label="Your name" error={errors.name}>
                <input name="name" value={form.name} onChange={update} autoComplete="name" placeholder="Jane Doe" />
              </Field>
              <Field label="Work email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  autoComplete="email"
                  placeholder="jane@company.com"
                />
              </Field>
            </div>

            <div className={styles.row}>
              <Field label="Company" optional>
                <input name="company" value={form.company} onChange={update} autoComplete="organization" placeholder="Company name" />
              </Field>
              <Field label="Estimated budget">
                <select name="budget" value={form.budget} onChange={update}>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset className={styles.fieldset}>
              <legend className={styles.label}>What can we help with?</legend>
              <div className={styles.chips}>
                {services.map((s) => {
                  const on = form.interests.includes(s.title);
                  return (
                    <button
                      key={s.title}
                      type="button"
                      className={`${styles.chip} ${on ? styles.chipOn : ''}`}
                      aria-pressed={on}
                      onClick={() => toggleInterest(s.title)}
                    >
                      {on && <Icon name="check" size={14} strokeWidth={2.4} />}
                      {s.title}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <Field label="Tell us about your project" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={update}
                placeholder="What are you building, who is it for, and what does success look like?"
              />
            </Field>

            {status === 'error' && (
              <p className={styles.formError} role="alert">
                Something went wrong sending your message. Please try again or email {site.email}.
              </p>
            )}

            <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <Icon name="arrow" size={16} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, error, optional, children }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {optional && <em>Optional</em>}
      </span>
      <span className={`${styles.control} ${error ? styles.invalid : ''}`}>{children}</span>
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
