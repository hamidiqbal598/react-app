import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
import AllThings from "./components/AllThings";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllThings />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
