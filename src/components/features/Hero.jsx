import "../../css/components/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__info">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn-primary hero__cta">get scarced For free</button>
        </div>
        <div className="hero__image">
          <img src="/src/assets/images/illustration-mockups.svg" alt="Hero image artwork of product charts"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
