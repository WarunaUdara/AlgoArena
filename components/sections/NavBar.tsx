"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "timeline", "prizes", "partners", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "timeline", href: "#timeline" },
    { name: "prizes", href: "#prizes" },
    { name: "partners", href: "#partners" },
    { name: "contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Check if we're on the home page
    const isHomePage = pathname === '/';
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with the section hash
      router.push(`/${href}`);
    }
  };

  return (
    <>
      {/* Desktop Floating Nav */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-fit items-center justify-center gap-8 px-10 py-4 rounded-full border backdrop-blur-xl shadow-2xl"
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            borderColor: "rgba(0, 46, 186, 0.4)",
            boxShadow: "0 8px 32px rgba(0, 46, 186, 0.2), 0 0 80px rgba(0, 46, 186, 0.1)",
          }}
        >
          {/* Nav Links */}
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-white hover:text-white transition-colors duration-300 font-medium text-sm capitalize group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {/* Active indicator */}
              <motion.div
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: "#002EBA" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === link.name ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl -z-10"
                style={{ backgroundColor: "#002EBA" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Nav - Hamburger Button Only */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:hidden fixed top-6 right-6 z-50"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative p-4 rounded-full backdrop-blur-xl border"
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            borderColor: "rgba(0, 46, 186, 0.4)",
            boxShadow: "0 8px 32px rgba(0, 46, 186, 0.15)",
          }}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 8, backgroundColor: "#002EBA" }
                  : { rotate: 0, y: 0, backgroundColor: "#FFFFFF" }
              }
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: -8, backgroundColor: "#002EBA" }
                  : { rotate: 0, y: 0, backgroundColor: "#FFFFFF" }
              }
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 rounded-full"
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 flex items-center justify-center backdrop-blur-2xl"
            style={{
              background: "rgba(0, 0, 0, 0.95)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Animated background particles */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(0, 46, 186, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 46, 186, 0.2) 0%, transparent 50%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Menu Content */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center space-y-8 w-full px-8"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  className="relative text-white font-bold text-3xl md:text-4xl capitalize group text-center"
                  style={{ minHeight: "48px", display: "flex", alignItems: "center" }}
                >
                  {link.name}

                  {/* Active indicator */}
                  {activeSection === link.name && (
                    <motion.div
                      layoutId="mobile-active"
                      className="absolute -left-12 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#002EBA" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover underline */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full"
                    style={{ backgroundColor: "#002EBA" }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-2xl -z-10"
                    style={{ backgroundColor: "#002EBA" }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Close hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-500 text-sm mt-12"
              >
                Tap anywhere to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;