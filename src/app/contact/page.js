import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';
import Icon from '@/components/Icon';
import { site } from '@/data/site';
import styles from '@/styles/Contact.module.css';

export const metadata = {
  title: 'Contact us',
  description: 'Tell us about your project. Aurensys replies to every enquiry within 24 hours.',
};

const nextSteps = [
  { title: 'We reply within 24 hours', text: 'With a few questions to understand your goals.' },
  { title: 'Discovery call', text: 'A free 30-minute call to explore scope, risks and options.' },
  { title: 'Clear proposal', text: 'Timeline, team and cost — in writing, no surprises.' },
];

const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Web applications, mobile apps, custom business software, cloud migrations and AI-powered automation, for startups and established businesses alike.',
  },
  {
    q: 'How do you price projects?',
    a: 'Either fixed-price for a well-defined scope, or a monthly dedicated team for evolving products. We recommend the model that fits your situation after the discovery call.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. All source code, designs and documentation are transferred to you in full.',
  },
  {
    q: 'Do you support the product after launch?',
    a: 'Yes. We offer maintenance, monitoring and continuous improvement plans so your product keeps getting better after go-live.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let’s build something <span className="gradient-text">remarkable.</span>
          </>
        }
        text="Share a few details about your idea or challenge. The more context you give, the more useful our first reply will be."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.info}>
            <div className={styles.infoList}>
              <a href={`mailto:${site.email}`} className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Icon name="mail" size={20} />
                </span>
                <span>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>{site.email}</span>
                </span>
              </a>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Icon name="pin" size={20} />
                </span>
                <span>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>{site.location}</span>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Icon name="clock" size={20} />
                </span>
                <span>
                  <span className={styles.infoLabel}>Response time</span>
                  <span className={styles.infoValue}>{site.responseTime}</span>
                </span>
              </div>
            </div>

            <div className={styles.next}>
              <h2 className={styles.nextTitle}>What happens next</h2>
              <ol>
                {nextSteps.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.nextNum}>{i + 1}</span>
                    <span>
                      <strong>{s.title}</strong>
                      <span className="muted">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.faq}`}>
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="h-section">Questions, answered.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Can’t find what you’re looking for? Email us at{' '}
              <a href={`mailto:${site.email}`} className="gradient-text">
                {site.email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
