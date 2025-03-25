import Header from "./components/globals/Header";

import "./App.css";
import Hero from "./components/features/Hero";
import FeatureList from "./components/features/FeatureList";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="feature-list">
          <FeatureList />
        </section>
        <section className="cta-floating-section"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
