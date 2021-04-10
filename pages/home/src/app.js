import { Hero, HeroPad } from './hero';
import { EmojiRefresh } from './emojiRefresh';

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

              <CTFLogo width="180px" height="180px" />
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

export function CTFLogo({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 640 640">
      <path
        d="M560 300V116H120l172 524L72 300 0 55h640v306H308l-26-61 278 1v-1z"
        fill="#fff"
      />
    </svg>
  );
}
