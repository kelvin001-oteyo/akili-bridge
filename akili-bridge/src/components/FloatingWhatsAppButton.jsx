import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Icons";
import "./FloatingWhatsAppButton.css";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?text=Hello%20Akili%20Bridge%2C%20I%20would%20like%20to%20learn%20more.";

export default function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Contact Akili Bridge on WhatsApp"
      initial={{ opacity: 0, scale: 0.85, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="whatsapp-float__halo" />
      <span className="whatsapp-float__content">
        <WhatsAppIcon className="whatsapp-float__icon" />
        <span className="whatsapp-float__label">WhatsApp</span>
      </span>
    </motion.a>
  );
}
