import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Fellowship.css";

export default function Fellowship() {
  const navigate = useNavigate();
  return (
    <div className="fellowship-page">
      {/* Hero Section */}
      <motion.section
        className="fellowship-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>STEM Fellowship Program</h1>
        <p>
          Nurturing the Next Generation of African Researcher Scholars
        </p>
        <p>
          Join the first cohort of our one-year researcher-in-training fellowship
          for undergraduate students in Rwanda, focusing on research skills,
          mentorship, and career development in STEM.
        </p>
      </motion.section>

      {/* Why Africa Needs More Researchers */}
      <motion.section
        className="fellowship-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Why Africa Needs More Researchers</h2>
        <p>
          Africa contributes less than 1% of global research output despite being
          home to 17% of the world’s population. Without a strong research
          foundation, scientific breakthroughs, innovation, and technological
          advancements will remain out of reach.
        </p>
        <p>
          At AkiliBridge, we believe Africa needs more researchers — not just in
          numbers, but in quality, innovation, and impact. Our programs are
          designed to change this reality by training and mentoring the brightest
          young minds across the continent.
        </p>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="fellowship-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h2>Benefits</h2>
        <ul>
          <li>Hands-on research training</li>
          <li>Mentorship from top-tier academics</li>
          <li>Career development workshops</li>
        </ul>
      </motion.section>

      {/* How to Apply */}
      <motion.section
        className="fellowship-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <h2>How to Apply</h2>
        <p>
          Applications open online. Submit your details and motivation to join
          the first cohort.
        </p>
        <motion.button
          className="apply-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/careers/application")}
        >
          Apply Now
        </motion.button>
      </motion.section>
    </div>
  );
}
