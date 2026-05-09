import { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { getFriendlyAuthError } from '../lib/auth-errors';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupSuccessMsg, setSignupSuccessMsg] = useState("");
  const [signupErrorMsg, setSignupErrorMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.toLowerCase().includes('email not confirmed')) {
          throw new Error("Please verify your email address before logging in.");
        }
        throw error;
      }

      // Check role
      let { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();

      // If profile doesn't exist, create it (assuming this is first login after verification)
      if (!profile) {
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert([{
            id: data.user.id,
            email: data.user.email,
            full_name: data.user.user_metadata?.full_name || email.split('@')[0],
            role: 'user',
          }])
          .select()
          .single();
          
        if (insertError) throw new Error("Failed to create user profile: " + insertError.message);
        profile = newProfile;
      }

      // Route based on role
      if (profile.role === 'admin') {
        const destination = location.state?.from?.pathname || "/admin";
        navigate(destination);
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      setErrorMsg(getFriendlyAuthError(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignupLoading(true);
    setSignupErrorMsg("");
    setSignupSuccessMsg("");
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          data: {
            full_name: signupName
          }
        }
      });
      
      if (error) throw error;
      
      setSignupSuccessMsg("Registration successful! Please check your email to verify your account before logging in.");
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
    } catch (error) {
      setSignupErrorMsg(getFriendlyAuthError(error));
    } finally {
      setSignupLoading(false);
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
            <span className="text-xs">🔒</span>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Terminal</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="Logo" className="w-28 h-28 object-contain" />
            <h2 className="text-4xl font-serif italic mb-2">WeDoWork</h2>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSignIn}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold block">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold block">Password</label>
              <button type="button" onClick={() => navigate('/forgot-password')} className="text-[10px] uppercase tracking-widest text-text-muted hover:text-white transition-colors font-bold">Forgot_Password?</button>
            </div>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors tracking-widest"
            />
          </div>

          {errorMsg && (
            <div className="text-red-500 text-xs text-center bg-red-500/10 border border-red-500/20 py-2 rounded">
              {errorMsg}
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
            {isLoading ? 'SIGNING IN...' : <>SIGN IN <span className="text-lg">→</span></>}
          </button>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={() => setShowSignup(true)}
              className="text-[11px] tracking-[0.2em] text-[#666] hover:text-white transition-colors uppercase"
            >
              SIGN_UP?
            </button>
          </div>
        </form>

        <div className="mt-10 pt-8 border-t border-dark-border text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">All systems operational</span>
          </div>
        </div>
      </motion.div>

      {showSignup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="w-full max-w-[420px] bg-[#050505] border border-[#222] rounded-3xl p-8 relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-5 text-[#666] hover:text-white text-2xl"
            >
              ×
            </button>

            <h2 className="text-4xl font-serif italic text-center mb-8">
              Sign Up
            </h2>

            <form onSubmit={handleSignUp} className="space-y-5">
              {signupSuccessMsg && (
                <div className="text-green-500 text-xs text-center bg-green-500/10 border border-green-500/20 py-2 rounded">
                  {signupSuccessMsg}
                </div>
              )}
              {signupErrorMsg && (
                <div className="text-red-500 text-xs text-center bg-red-500/10 border border-red-500/20 py-2 rounded">
                  {signupErrorMsg}
                </div>
              )}

              <input
                type="text"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />

              <input
                type="email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />

              <input
                type="password"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-black/50 border border-dark-border px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />

              <button
                type="submit"
                disabled={signupLoading}
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
                  transition-all
                  duration-300
                  ${signupLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}
                `}
                >
                {signupLoading ? 'CREATING...' : 'CREATE ACCOUNT →'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-white/10 opacity-20"></div>
      
      <div className="fixed bottom-8 left-8 text-[10px] text-text-muted font-mono">
        © 2024 WeDoWork. All rights reserved.
      </div>
      
      <div className="fixed bottom-8 right-8 flex gap-6 text-[10px] uppercase tracking-widest text-text-muted font-bold">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
      </div>

      {/* Hero background image in bottom right for that terminal vibe */}
      <div className="fixed -bottom-20 -right-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none rotate-12">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
