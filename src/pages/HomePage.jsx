import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center px-4 py-16 bg-gray-100 text-gray-800">
      <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
       Create a Professional Resume in Minute
      </motion.h1>
      <p className="mb-6 text-lg">No design skills needed — just enter your info and get a beautiful resume.</p>
      <Link
        to="/generate"
        className="bg-emerald-500 hover:bg-emerald-600 text-card font-semibold py-2 px-6 rounded-lg transition"
      >
        Get Started
      </Link>
    </section>
  );
};

export default Home;
