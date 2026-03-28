import { motion } from "framer-motion";
import "./Careers.css";

export default function Careers() {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <motion.section
        className="careers-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Careers at Akili Bridge</h1>
        <p>
          Join us in building Africa’s next generation of researchers and innovators.
        </p>
      </motion.section>

      {/* Why Work With Us */}
      <motion.section
        className="careers-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Why Work With Us?</h2>
        <p>
          At Akili Bridge, we believe in nurturing talent, fostering innovation,
          and creating opportunities for growth. Our team is dedicated to
          empowering African scholars through mentorship, training, and impactful
          research programs.
        </p>
      </motion.section>

      {/* Current Opportunities */}
      <motion.section
        className="careers-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h2>Current Opportunities</h2>
        <ul>
          <li>Program Coordinator – STEM Fellowship</li>
          <li>Research Mentor – Labs Division</li>
          <li>Communications & Outreach Officer</li>
        </ul>
        <p>
          More roles will be announced soon. Stay tuned for updates in our News & Announcements section.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="careers-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <h2>How to Apply</h2>
        <p>
          Interested candidates can submit their applications online. Share your
          CV and a short motivation statement explaining why you want to join
          Akili Bridge.
        </p>
        <motion.button
          className="careers-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.button>
      </motion.section>
    </div>
  );
}