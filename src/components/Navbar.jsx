import logo from "../assets/logo.png";
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-sm border-b border-dark-border h-16"
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-4" id="nav-logo">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
            <span className="text-sm font-bold tracking-tight">WeDoWork</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.1em] text-text-secondary" id="nav-links">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-text-muted text-[10px] font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
            <span>LIVE: 33</span>
          </div>
          {/* <Link to="/login" className="btn-publish" id="admin-login-btn">
            Login
          </Link> */}
        </div>
      </div>
    </motion.nav>
  );
}
