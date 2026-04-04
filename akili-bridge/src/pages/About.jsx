import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About AkiliBridge</h1>
        <p>Building Africa’s Next Generation of Researchers</p>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          At AkiliBridge, we provide aspiring African researchers with the
          skills, training, and support needed to tackle Africa’s most pressing
          challenges. Through our fellowship and training programs, we equip
          undergraduate students with hands-on research experience, mentorship
          from top-tier academics, and the tools to drive innovation in their
          fields.
        </p>
      </motion.section>
    </div>
  );
}