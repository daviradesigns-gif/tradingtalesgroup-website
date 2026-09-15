// TTG Design Philosophy: premium editorial composition, left-aligned hierarchy, high contrast, and restrained green accents.
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Instagram,
  Menu,
  Play,
  Quote,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

const heroImage = "/manus-storage/ttg-hero-bg_124d897b.png";
const logoImage = "/manus-storage/ttg-logo-supplied_c878a093.webp";
const communityImage = "/manus-storage/ttg-community-section_f378da59.png";

const offerings = [
  {
    number: "01",
    title: "Learn the language of the markets",
    body: "Build a clear foundation in forex with practical lessons, market context, and a framework you can return to as your experience grows.",
  },
  {
    number: "02",
    title: "Sharpen your strategy",
    body: "Move beyond noise. Explore structured approaches, advanced strategy breakdowns, and data-led conversations that make decisions easier to explain.",
  },
  {
    number: "03",
    title: "Grow with a serious community",
    body: "Trade stories, questions, and lessons with people who understand the work behind the chart — and the discipline behind every result.",
  },
];

const values = [
  { label: "Productivity + positivity", detail: "Discipline, focus, and an optimistic mindset." },
  { label: "Clarity + people-first", detail: "Straightforward education for every experience level." },
  { label: "Simplicity", detail: "Less noise. Better insights. More confident decisions." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ttg-site">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Trading Tales Group home" onClick={closeMenu}>
          <img src={logoImage} alt="Trading Tales Group" width="2048" height="976" fetchPriority="high" decoding="async" />
        </a>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#offerings" onClick={closeMenu}>What we do</a>
          <a href="#values" onClick={closeMenu}>Our values</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Join the community <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <img className="hero-backdrop" src={heroImage} alt="" width="1920" height="1080" fetchPriority="high" decoding="async" />
          <div className="hero-grain" />
          <div className="hero-content page-shell">
            <div className="eyebrow light"><span /> Trading Tales Group</div>
            <h1>Behind every<br /><em>successful trade</em><br />is a story.</h1>
            <div className="hero-bottom">
              <p>A field guide, a thinking room, and a community for traders who are serious about the work behind the chart.</p>
              <a className="circle-link" href="#about" aria-label="Explore Trading Tales Group"><ArrowDownRight size={25} /></a>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>FIELD NOTE</span> 01 <span>/ 04</span></div>
        </section>

        <section className="intro-section page-shell" id="about">
          <div className="section-kicker">01 — The story</div>
          <div className="intro-grid">
            <h2>The market is full of noise. We make the signal easier to hear.</h2>
            <div className="intro-copy">
              <p>Trading Tales was built on a simple belief: behind every successful trade is a story worth telling. Not just the win, but the process, the lesson, and the discipline that made it possible.</p>
              <p>We are a forex education and trading community helping ambitious people grow through knowledge, clear thinking, and shared experience.</p>
              <a className="text-link" href="#offerings">Discover our approach <ChevronRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="page-shell manifesto-grid">
            <div className="manifesto-label">Our point of view</div>
            <div>
              <Quote className="quote-mark" size={42} strokeWidth={1.5} />
              <p className="manifesto-quote">We believe the best traders are not the ones who chase certainty. They are the ones who build the confidence to keep learning.</p>
              <div className="manifesto-signature"><span className="signature-line" /> Trading Tales Group</div>
            </div>
          </div>
        </section>

        <section className="offerings-section page-shell" id="offerings">
          <div className="section-kicker">02 — The method</div>
          <div className="offerings-header">
            <h2>Learn with intent.<br /><span>Trade with perspective.</span></h2>
            <p>From first principles to advanced conversations, every part of Trading Tales is designed to turn information into understanding.</p>
          </div>
          <div className="offering-list">
            {offerings.map((item) => (
              <article className="offering-row" key={item.number}>
                <span className="offering-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ArrowUpRight className="offering-arrow" size={23} />
              </article>
            ))}
          </div>
        </section>

        <section className="community-section">
          <img className="community-image" src={communityImage} alt="Traders learning and discussing market ideas together" width="1600" height="900" loading="lazy" decoding="async" />
          <div className="community-overlay" />
          <div className="page-shell community-content">
            <div className="section-kicker light">03 — The community</div>
            <h2>Better questions.<br /><span>Stronger traders.</span></h2>
            <p>Trading is an individual craft, but it does not have to be a lonely one. Find the conversations, annotated lessons, and perspective that help you understand the decision behind the trade.</p>
            <a className="button button-light" href="#contact">Read the field notes <ArrowUpRight size={17} /></a>
          </div>
          <div className="community-caption">The journey is yours.<br />The perspective is shared.</div>
        </section>

        <section className="values-section page-shell" id="values">
          <div className="section-kicker">04 — The principles</div>
          <div className="values-layout">
            <div>
              <h2>Clear thinking<br />is a <span>competitive edge.</span></h2>
              <p className="values-lead">We keep the experience focused on what moves people forward: useful knowledge, honest conversations, and the confidence to make informed decisions.</p>
            </div>
            <div className="values-list">
              {values.map((value, index) => (
                <div className="value-item" key={value.label}>
                  <span className="value-index">0{index + 1}</span>
                  <div><h3>{value.label}</h3><p>{value.detail}</p></div>
                  <Check size={20} className="value-check" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="page-shell cta-grid">
            <div>
              <div className="section-kicker light"><span /> Start the conversation</div>
              <h2>Your next chapter<br /><em>starts here.</em></h2>
              <p>Leave your email and we’ll keep you close to the ideas, trade notes, and conversations that make the market easier to read.</p>
            </div>
            <div className="contact-card">
              {submitted ? (
                <div className="success-state"><div className="success-icon"><Check size={23} /></div><h3>You’re on the list.</h3><p>Thanks for reaching out. We’ll be in touch with the next Trading Tales update.</p></div>
              ) : (
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <label htmlFor="email">Your email address</label>
                  <div className="form-row"><input id="email" type="email" required placeholder="you@company.com" /><button className="button button-green" type="submit">Join TTG <ArrowUpRight size={16} /></button></div>
                  <small>We respect your inbox. No noise, only useful perspective.</small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-top">
          <div className="footer-brand"><img src={logoImage} alt="Trading Tales Group" width="2048" height="976" fetchPriority="high" decoding="async" /><p>Process over promise.<br />Perspective over noise.</p></div>
          <div className="footer-links"><div><span>Explore</span><a href="#about">About TTG</a><a href="#offerings">What we do</a><a href="#values">Our values</a></div><div><span>Connect</span><a href="#contact">Contact us</a><a href="#contact">Join the community</a></div></div>
          <div className="footer-social"><span>Follow the tales</span><div><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="Twitter"><Twitter size={18} /></a><a href="#contact" aria-label="YouTube"><Youtube size={18} /></a></div></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 Trading Tales Group. All rights reserved.</span><span>Built for the journey.</span></div>
      </footer>
    </div>
  );
}
