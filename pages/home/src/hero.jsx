import './hero.css';

export function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero__content">{children}</div>
    </div>
  );
}

export function HeroPad() {
  return <div className="hero__pad"></div>;
}
