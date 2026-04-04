import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ForMentors() {
  const navigate = useNavigate();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const benefits = [
    { icon: "🎯", title: "Shape Future Leaders", description: "Guide Africa's brightest minds through real-world challenges" },
    { icon: "🤝", title: "Expand Network", description: "Collaborate and co-author with emerging researchers" },
    { icon: "🎓", title: "Recruit Talent", description: "Identify exceptional candidates for graduate programs" },
    { icon: "🌍", title: "Drive Change", description: "Foster ethical, context-relevant research in Africa" },
  ];

  const responsibilities = [
    "Provide guidance on research design, execution, and publication",
    "Offer constructive feedback on proposals and reports",
    "Conduct virtual check-ins (minimum twice per month)",
    "Encourage professional and academic growth",
  ];

  const mentoringBenefits = [
    "Shape the next generation of African STEM leaders",
    "Expand your research network in East Africa",
    "Gain recognition on our website and publications",
  ];

  const eligibility = [
    "Master's or PhD in a STEM field",
    "At least one peer-reviewed publication as lead author",
    "Commitment to a six-month remote mentorship",
  ];

  return (
    <div className="for-mentors">
      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format')",
          }}
        />
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      <div className="container">
        {/* Title */}
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          FOR MENTORS
          <span className="title-sub">Shape the Future of African Research</span>
        </motion.h1>

        {/* Intro Section */}
        <motion.section
          className="intro-section"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="intro-card">
            <div className="intro-icon">🌟</div>
            <h2 className="intro-title">Fellowship Program Mentor Application</h2>
            <p className="intro-text">
              Are you passionate about shaping the future of African research and innovation?
              The AkiliBridge STEM Fellowship Program invites experienced researchers,
              academics, and industry experts to mentor Africa's brightest emerging STEM talents.
            </p>
            <p className="intro-text">
              This is your opportunity to empower the next generation of African researchers
              and contribute to solving pressing challenges through high-quality, ethical,
              and impactful research.
            </p>
          </div>
        </motion.section>

        {/* Main Content Grid */}
        <motion.div
          className="content-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Role & Responsibilities */}
          <motion.section className="info-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-icon">📋</span>
              <h2 className="card-title">Role & Responsibilities</h2>
            </div>
            <ul className="styled-list">
              {responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="list-marker">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Benefits of Mentoring */}
          <motion.section className="info-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-icon">✨</span>
              <h2 className="card-title">Benefits of Mentoring</h2>
            </div>
            <ul className="styled-list">
              {mentoringBenefits.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="list-marker">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Eligibility */}
          <motion.section className="info-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-icon">✅</span>
              <h2 className="card-title">Eligibility to Mentor</h2>
            </div>
            <ul className="styled-list">
              {eligibility.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="list-marker">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* Why Become a Mentor Section */}
        <motion.section
          className="benefits-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">Why Become an AkiliBridge Mentor?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Process */}
        <motion.section
          className="process-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">How to Apply</h2>
          <div className="process-steps">
            {[
              { step: 1, title: "Complete the Mentor Application Form", icon: "📝", description: "Fill out your personal and professional details" },
              { step: 2, title: "Provide Credentials", icon: "📚", description: "Academic credentials, publication details, and research expertise" },
              { step: 3, title: "Profile Review & Matching", icon: "🤝", description: "Our team reviews your profile and matches you with a fellow" }
            ].map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                className="process-step"
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="process-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <span className="note-icon">📌</span>
            <p>Selected mentors will receive an onboarding guide and be introduced to their mentees at the start of the program.</p>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 106, 0, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/careers/application")}
          >
            <span className="button-text">Apply Now</span>
            <motion.span
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
          <p className="cta-note">Become a mentor and help shape Africa's research future</p>
        </motion.div>
      </div>

      <style>{`
        /* Main Container */
        .for-mentors {
          position: relative;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Background Wrapper */
        .background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10, 15, 26, 0.94) 0%, rgba(20, 30, 50, 0.9) 100%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        /* Page Title */
        .page-title {
          font-size: clamp(2rem, 7vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #ffffff, #a8e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .title-sub {
          display: block;
          font-size: clamp(1rem, 3vw, 1.3rem);
          font-weight: 500;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-top: 0.5rem;
        }

        /* Intro Section */
        .intro-section {
          margin-bottom: 3rem;
        }

        .intro-card {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 180, 71, 0.05));
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid rgba(255, 106, 0, 0.3);
        }

        .intro-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .intro-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid rgba(255, 106, 0, 0.3);
          padding-bottom: 0.8rem;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Styled List */
        .styled-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .styled-list li {
          padding: 0.6rem 0;
          font-size: 0.95rem;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .list-marker {
          color: #ff6a00;
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(1.6rem, 5vw, 2.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          margin: 0.5rem auto 0;
          border-radius: 3px;
        }

        /* Benefits Section */
        .benefits-section {
          margin-bottom: 4rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .benefit-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ff6a00;
        }

        .benefit-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.85;
        }

        /* Process Section */
        .process-section {
          margin-bottom: 4rem;
        }

        .process-steps {
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(255, 106, 0, 0.1);
          transform: translateX(8px);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff6a00, #c68a3d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .step-content {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .step-icon {
          font-size: 1.5rem;
        }

        .step-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .step-description {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .process-note {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 106, 0, 0.1);
          border-radius: 16px;
          padding: 1.2rem;
          margin-top: 2rem;
          border-left: 3px solid #ff6a00;
        }

        .note-icon {
          font-size: 1.5rem;
        }

        .process-note p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* CTA Section */
        .cta-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #ff6a00, #c68a3d);
          border: none;
          border-radius: 50px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
          }

          .intro-card {
            padding: 1.5rem;
          }

          .intro-title {
            font-size: 1.4rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .info-card {
            padding: 1.3rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .step-content {
            flex-direction: column;
            align-items: center;
          }

          .process-note {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .intro-text {
            font-size: 0.9rem;
          }

          .benefit-card {
            padding: 1.2rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}
