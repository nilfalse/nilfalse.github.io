import { Hero, HeroPad } from './hero';
import { EmojiRefresh } from './emojiRefresh';

import ctfLogo from './images/ctf_logo_white.svg';

import './app.css';

export function App() {
  return (
    <div className="app">
      <Hero>
        <header className="app__hero">
          <h1 className="app__hello">
            <span className="rainbow rainbow_text">Hello, World</span>{' '}
            <span className="app__hello-emoji">
              <EmojiRefresh />
            </span>
          </h1>
        </header>
      </Hero>

      <main className="app__content">
        <section className="section section_addons">
          <HeroPad />

          <div className="addon addon_ctf">
            <div className="addon__catchy">
              <header className="addon__header">
                <h2 className="addon__header-title">Capture The Flag</h2>
              </header>

              <a href="/addons/ctf/" className="addon__link_hidden">
                Capture&nbsp;The&nbsp;Flag
              </a>

              <img src={ctfLogo} alt="CTF Logo" width="180px" height="180px" />
            </div>

            <div className="addon__details">
              <p className="addon__description">Cloud insights web extension</p>

              <a href="/addons/ctf/" className="addon__cta">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
