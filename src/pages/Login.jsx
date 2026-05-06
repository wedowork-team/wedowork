import logo from "../assets/logo.png";
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        <h1 className="font-serif italic text-2xl">WeDoWork</h1>
      </div>
      <div className="absolute top-8 right-8 text-[10px] font-mono text-text-muted">
        v2.4.0-STABLE
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[400px] bg-dark-surface border border-dark-border p-10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-xs">🔒</span>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Admin Terminal</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="Logo" className="w-28 h-28 object-contain" />
            <h2 className="text-4xl font-serif italic mb-2">WeDoWork Admin</h2>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSignIn}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold block">Identifier</label>
            <input 
              type="email" 
              placeholder="name@zenith.com"
              className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold block">Secret_Key</label>
              <button type="button" className="text-[10px] uppercase tracking-widest text-text-muted hover:text-white transition-colors font-bold">Lost?</button>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors tracking-widest"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all flex items-center justify-center gap-2 mt-4"
          >
            Sign In <span>→</span>
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-dark-border text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">All systems operational</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[9px] uppercase tracking-[0.15em] text-white/20 leading-relaxed max-w-[240px] mx-auto italic font-serif">
            Unauthorized access to this terminal is strictly prohibited and monitored.
          </p>
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-white/10 opacity-20"></div>
      
      <div className="fixed bottom-8 left-8 text-[10px] text-text-muted font-mono">
        © 2024 WeDoWork. All rights reserved.
      </div>
      
      <div className="fixed bottom-8 right-8 flex gap-6 text-[10px] uppercase tracking-widest text-text-muted font-bold">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
      </div>

      {/* Hero background image in bottom right for that terminal vibe */}
      <div className="fixed -bottom-20 -right-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none rotate-12">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
