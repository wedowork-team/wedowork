import { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { getFriendlyAuthError } from '../lib/auth-errors';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setSuccessMsg("If an account exists for this email, you will receive password reset instructions.");
      setEmail("");
    } catch (error) {
      setErrorMsg(getFriendlyAuthError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        <h1 className="font-serif italic text-2xl">WeDoWork</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[400px] bg-dark-surface border border-dark-border p-10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-xs">🔑</span>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Recovery</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-serif italic mb-2">Reset Password</h2>
            <p className="text-xs text-text-muted text-center tracking-widest leading-relaxed">
              ENTER YOUR EMAIL TO RECEIVE RESET INSTRUCTIONS
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleReset}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold block">Email</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          {errorMsg && (
            <div className="text-red-500 text-xs text-center bg-red-500/10 border border-red-500/20 py-2 rounded">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="text-green-500 text-xs text-center bg-green-500/10 border border-green-500/20 py-2 rounded">
              {successMsg}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className={`
              w-full
              border border-[#8a8a8a]
              bg-transparent
              text-white
              py-2
              rounded-2xl
              font-bold
              uppercase
              tracking-[0.25em]
              text-xs
              flex
              items-center
              justify-center
              gap-3
              mt-4
              transition-all
              duration-300
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]'}
            `}
            >
            {isLoading ? 'SENDING...' : <>SEND EMAIL <span className="text-lg">→</span></>}
          </button>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-[11px] tracking-[0.2em] text-[#666] hover:text-white transition-colors uppercase"
            >
              ← BACK TO LOGIN
            </button>
          </div>
        </form>
      </motion.div>

      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-white/10 opacity-20"></div>
      
      <div className="fixed bottom-8 left-8 text-[10px] text-text-muted font-mono">
        © 2024 WeDoWork. All rights reserved.
      </div>
    </div>
  );
}
