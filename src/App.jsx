import Header from "./components/globals/Header";

import "./App.css";
import Hero from "./components/features/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="feature-list"></section>
        <section className="cta-floating-section"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
