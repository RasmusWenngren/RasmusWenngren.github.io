import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import EasterEggs from "./components/EasterEggs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, CV, Contact } from "./pages/Pagesindex";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/dynamic-cv-portal">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <EasterEggs />
      </BrowserRouter>
    </>
  );
}
