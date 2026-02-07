import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import profileImage from '@/assets/profile.jpg';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { progress, isScrolled } = useScrollProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.div
        className={`mx-auto max-w-5xl rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 border-border/50 shadow-lg shadow-primary/5' 
            : 'bg-background/40 border-white/10'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="px-4 sm:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'py-3' : 'py-4'
            }`}
          >
            {/* Profile Image & Name */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                className={`rounded-xl overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-background transition-all duration-300 ${
                  isScrolled ? 'w-9 h-9' : 'w-11 h-11'
                }`}
              >
                <img
                  src={profileImage}
                  alt="Peace Maker"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="hidden sm:flex flex-col"
                animate={{ opacity: isScrolled ? 0 : 1, width: isScrolled ? 0 : 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-bold text-foreground text-sm tracking-tight">Peace Maker</span>
                <span className="text-xs text-muted-foreground">Full Stack Dev</span>
              </motion.div>
            </motion.div>

            {/* Desktop Navigation - Pill Style */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary/50">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Language Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">{language}</span>
                </motion.button>
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-36 rounded-xl bg-background/95 backdrop-blur-xl border border-border shadow-xl overflow-hidden z-50"
                    >
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                          language === 'en' ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'
                        }`}
                      >
                        🇬🇧 English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('fr');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                          language === 'fr' ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'
                        }`}
                      >
                        🇫🇷 Français
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('rw');
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                          language === 'rw' ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'
                        }`}
                      >
                        🇷🇼 Ikinyarwanda
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors md:hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress */}
        <div className="h-0.5 bg-transparent overflow-hidden rounded-b-2xl">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-4 mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-xl md:hidden overflow-hidden"
          >
            <nav className="p-3 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left py-3 px-4 rounded-xl hover:bg-secondary transition-colors text-foreground font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
