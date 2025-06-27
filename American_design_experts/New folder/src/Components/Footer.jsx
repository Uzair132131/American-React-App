import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import "../App.css";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const linkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="footer-section" variants={itemVariants}>
          <motion.div className="footer-logo" variants={itemVariants}>
            <span className="logo-text">LOGO</span>
          </motion.div>
          <motion.p className="footer-description" variants={itemVariants}>
            Empowering businesses with innovative digital solutions. We craft
            stunning websites and create powerful brands that drive growth.
          </motion.p>
          <motion.div
            className="social-links"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#"
              className="social-link"
              aria-label="Facebook"
              variants={socialVariants}
              whileHover="hover"
            >
              <FiFacebook />
            </motion.a>
            <motion.a
              href="#"
              className="social-link"
              aria-label="Twitter"
              variants={socialVariants}
              whileHover="hover"
            >
              <FiTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="social-link"
              aria-label="Instagram"
              variants={socialVariants}
              whileHover="hover"
            >
              <FiInstagram />
            </motion.a>
            <motion.a
              href="#"
              className="social-link"
              aria-label="LinkedIn"
              variants={socialVariants}
              whileHover="hover"
            >
              <FiLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 className="footer-heading" variants={itemVariants}>
            Services
          </motion.h3>
          <motion.ul
            className="footer-links"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#website">Website Development</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#logo">Logo Design</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#branding">Branding</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#ecommerce">E-commerce</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#seo">SEO Services</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#animation">Animation</a>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 className="footer-heading" variants={itemVariants}>
            Company
          </motion.h3>
          <motion.ul
            className="footer-links"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#about">About Us</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#portfolio">Our Work</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#packages">Packages</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#contact">Contact</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#privacy">Privacy Policy</a>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <a href="#terms">Terms of Service</a>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <motion.h3 className="footer-heading" variants={itemVariants}>
            Contact Info
          </motion.h3>
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="contact-item" variants={itemVariants}>
              <FiPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </motion.div>
            <motion.div className="contact-item" variants={itemVariants}>
              <FiMail className="contact-icon" />
              <span>info@yourcompany.com</span>
            </motion.div>
            <motion.div className="contact-item" variants={itemVariants}>
              <FiMapPin className="contact-icon" />
              <span>
                123 Business Ave, Suite 100
                <br />
                New York, NY 10001
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="footer-bottom" variants={itemVariants}>
        <motion.div
          className="footer-bottom-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants}>
            &copy; 2024 Your Company. All rights reserved.
          </motion.p>
          <motion.div
            className="footer-bottom-links"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#privacy"
              variants={linkVariants}
              whileHover="hover"
            >
              Privacy Policy
            </motion.a>
            <span className="separator">|</span>
            <motion.a href="#terms" variants={linkVariants} whileHover="hover">
              Terms of Service
            </motion.a>
            <span className="separator">|</span>
            <motion.a
              href="#sitemap"
              variants={linkVariants}
              whileHover="hover"
            >
              Sitemap
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
