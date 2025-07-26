import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-400">ResumeEdge</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <Link to="/about" className="hover:text-emerald-400">About</Link>
          <Link to="/how-it-works" className="hover:text-emerald-400">How It Works</Link>
          <Link to="/generate" className="hover:text-emerald-400">Generate</Link>
          <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-gray-800">
          <Link to="/" onClick={toggleMenu} className="hover:text-emerald-400">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-emerald-400">About</Link>
          <Link to="/how-it-works" onClick={toggleMenu} className="hover:text-emerald-400">How It Works</Link>
          <Link to="/generate" onClick={toggleMenu} className="hover:text-emerald-400">Generate</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-emerald-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
