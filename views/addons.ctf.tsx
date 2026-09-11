import clsx from 'clsx';

import { Button } from '../components/Button.tsx';
import { Container } from '../components/Container.tsx';
import { Link } from '../components/Link.tsx';
import typography from '../components/Typography.module.css';
import { H1, H2, P } from '../components/Typography.tsx';
import { Hero } from '../components/Hero.tsx';
import flexbox from '../components/flexbox.module.css';
import LogoSVG from '../images/ctf/logo/logo.svg?react';
import TextSVG from '../images/ctf/logo/text.svg?react';
import Omnibox from '../images/ctf/omnibox.svg';
import Popup from '../images/ctf/popup/popup.png';
import DevActivity from '../images/ctf/undraw_developer_activity_bv83.svg';
import { useScrollTop } from '../use/useScrollTop.ts';
import { useUseragent } from '../use/useUseragent.ts';
import classes from './addons.ctf.module.css';

export default function () {
  return (
    <>
      <Header />
      <HeroArticle />
      <Features />
      <Promo />
      <Download />
    </>
  );
}

function Header() {
  const scrollTop = useScrollTop();

  const classNames = clsx(classes['header'], {
    [classes['sticky'] as string]: scrollTop > 0,
  });

  return (
    <header className={classNames}>
      <Container center wide className={classes['container']}>
        <Logo />
        <Button
          to={Download.href}
          primary
          accent="var(--color-webext)"
          className={classes['cta']}
        >
          Download
        </Button>
      </Container>
    </header>
  );
}

function Logo() {
  return (
    <H1 className={`${classes['logo']} ${flexbox['center']}`}>
      <LogoSVG className={classes['image']} />
      <span className={classes['wrapper']}>
        <TextSVG className={classes['text']} aria-label="Capture The Flag" />
        <span className={classes['aux']}>
          by <Link to="/">nilfalse</Link>
        </span>
      </span>
    </H1>
  );
}

function HeroArticle() {
  return (
    <Hero className={classes['hero']} padding="var(--header)">
      <Container wide nopad>
        <Container as="section" split spaced nopad>
          <Container center vertical>
            <H1>Accessible Web Insights</H1>

            <P>
              There is no such thing as “the cloud,” it’s just somebody else’s
              computer.
            </P>

            <P>Make informed decisions who to share your data with.</P>

            <div className={classes['cta']}>
              <InstallAction />
            </div>
            <P footnote>
              Available for Firefox &amp; Chromium-based web browsers.
            </P>
          </Container>

          <Container className={classes['popup']} center nopad>
            <img
              src={Popup}
              alt="Extension Popup Demo"
              width="360px"
              height="463px"
              className={classes['demo']}
            />
          </Container>
        </Container>
      </Container>
    </Hero>
  );
}

function InstallAction() {
  const ua = useUseragent();

  switch (ua) {
    case 'firefox':
      return (
        <Button
          to="https://addons.mozilla.org/firefox/downloads/latest/ctf/latest.xpi"
          primary
          accent="var(--color-webext)"
        >
          Add to Firefox
        </Button>
      );

    case 'chromium':
      return (
        <Button
          to="https://chrome.google.com/webstore/detail/plmbleiamgcdnenigiocddjjgacgfgjb"
          target="_blank"
          primary
          accent="var(--color-webext)"
        >
          Add to Chromium
        </Button>
      );

    case 'edge':
      return (
        <Button
          to="https://chrome.google.com/webstore/detail/plmbleiamgcdnenigiocddjjgacgfgjb"
          target="_blank"
          primary
          accent="var(--color-webext)"
        >
          Add to Microsoft Edge
        </Button>
      );

    case null:
      return (
        <Button to={Download.href} primary accent="var(--color-webext)">
          Download
        </Button>
      );

    default: {
      const exhaustiveCheck: never = ua;
      return exhaustiveCheck;
    }
  }
}

function Features() {
  return (
    <article className={classes['features']}>
      <Container vertical as="article">
        <H2 center>Works with major cloud providers</H2>
        <Container as="ul" split spaced nopad className={classes['clouds']}>
          <li className={typography['p']}>
            Detects websites protected by Cloudflare® services.
          </li>
          <li className={typography['p']}>
            Works with Amazon Web Services (AWS): recognizes websites hosted on
            AWS infrastructure.
          </li>
          <li className={typography['p']}>
            Identifies websites delivered via the Fastly edge cloud platform.
          </li>
        </Container>
        <P footnote>
          Cloudflare® is a registered trademark of Cloudflare, Inc. Amazon, AWS,
          and related marks are trademarks of Amazon.com, Inc. or its
          affiliates. Fastly is a trademark of Fastly, Inc. All references are
          made for informational purposes only and do not imply affiliation,
          sponsorship, or endorsement by Cloudflare, Amazon, or Fastly.
        </P>
      </Container>

      <Container vertical as="article">
        <H2 center>Open Source to the bone</H2>
        <Container as="section" split spaced nopad>
          <div className={flexbox['center']}>
            <P>
              Powered by{' '}
              <Link
                to="https://github.com/nilfalse/ctf"
                target="_blank"
                rel="noopener"
              >
                100% Free&nbsp;and&nbsp;Open&nbsp;Source Software
              </Link>
              . You are free to use, inspect and share this software with
              anyone.
            </P>
          </div>

          <div className={flexbox['center']}>
            <img
              src={DevActivity}
              width="320px"
              height="172px"
              alt="Developer activity illustration"
            />
          </div>
        </Container>
      </Container>
    </article>
  );
}

function Promo() {
  return (
    <article className={classes['promo']}>
      <Container vertical center>
        <Container center className={classes['demo']}>
          <img src={Omnibox} alt="Browser omnibox demo" />
        </Container>
        <Container center>
          <H2>Capture The Flag&nbsp;— privacy-focused cloud insights</H2>
        </Container>
      </Container>
    </article>
  );
}

Download.id = 'download';
Download.href = '#' + Download.id;
function Download() {
  return (
    <article className={classes['download']} id={Download.id}>
      <Container vertical center nopad>
        <Container center className={classes['title']}>
          <H2>Supported by your platform</H2>
        </Container>

        <Container split spaced nopad>
          <Container vertical as="section">
            <div className={typography['center']}>
              <Button
                to="https://addons.mozilla.org/firefox/addon/ctf/"
                rel="noopener noreferrer"
                target="_blank"
                accent="var(--color-webext)"
              >
                Firefox Add-ons
              </Button>
            </div>
            <ul>
              <li>Install Add-on from Mozilla Add-ons</li>
            </ul>
          </Container>

          <Container vertical as="section">
            <div className={typography['center']}>
              <Button
                to="https://chrome.google.com/webstore/detail/plmbleiamgcdnenigiocddjjgacgfgjb"
                rel="noopener noreferrer"
                target="_blank"
                accent="var(--color-webext)"
              >
                Chrome Web Store
              </Button>
            </div>
            <ul>
              <li>Google Chrome</li>
              <li>Microsoft Edge</li>
              <li>Brave</li>
              <li>Opera</li>
              <li>...you name it</li>
            </ul>
          </Container>
        </Container>
      </Container>
    </article>
  );
}
