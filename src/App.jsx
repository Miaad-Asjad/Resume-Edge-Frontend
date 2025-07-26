import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HowItWorks from "./pages/HowItWorks";
import ContactPage from "./pages/ContactPage";
import GenerateResume from "./pages/GenerateResume";
import AboutSection from "./components/AboutSection";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/generate" element={<GenerateResume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
