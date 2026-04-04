import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Apply.css";

export default function Apply() {
  const navigate = useNavigate();
  return (
    <div className="apply-page">
      {/* Hero Section */}
      <motion.section
        className="apply-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>How to Apply</h1>
        <p>
          Join the first cohort of our one-year researcher-in-training fellowship
          for undergraduate students in Rwanda.
        </p>
      </motion.section>

      {/* Eligibility */}
      <motion.section
        className="apply-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Eligibility</h2>
        <p>
          Open to undergraduate students in Rwanda who are passionate about STEM
          and eager to gain hands-on research experience.
        </p>
      </motion.section>

      {/* Application Process */}
      <motion.section
        className="apply-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h2>Application Process</h2>
        <ol>
          <li>Complete the online application form.</li>
          <li>Submit your academic details and motivation statement.</li>
          <li>Shortlisted candidates will be invited for interviews.</li>
        </ol>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="apply-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <h2>Ready to Apply?</h2>
        <p>
          Applications are open online. Don’t miss the chance to be part of the
          first cohort of AkiliBridge Fellows.
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
