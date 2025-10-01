import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ModalProvider } from "./context/ModalContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ModalContainer from "./components/features/ModalContainer";
import EasterEggContainer from "./components/features/EasterEggContainer";
import DocumentHead from "./components/common/DocumentHead";
import { Home, About, Portfolio, CV, Contact } from "./pages";

export default function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <DocumentHead
            title="Rasmus Wenngren Portfolio"
            description="Your digital stable management solution"
            ogTitle="Stablemate"
            ogDescription="Your digital stable management solution"
            ogUrl="https://stablemateapp.com/"
            ogImage="https://stablemateapp.com/wp-content/uploads/2024/11/stablemate-1.jpg"
            ogType="website"
          />

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
          <EasterEggContainer />
          <ModalContainer />
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}
