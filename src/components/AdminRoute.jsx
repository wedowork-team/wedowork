import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AdminRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check current session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        // Check if the user has the 'admin' role in the profiles table
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (error || !profile || profile.role !== 'admin') {
          // If not an admin, we might want to sign them out or just deny access
          await supabase.auth.signOut();
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) {
        setIsAuthenticated(false);
        setIsLoading(false);
      } else {
        // When auth state changes to signed in, double check role
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
          
        setIsAuthenticated(!!profile && profile.role === 'admin');
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (isLoading) {
    // Show a loading screen that matches the dark/futuristic theme
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
         <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150"></div>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-300"></div>
         </div>
         <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold animate-pulse">Authenticating Workspace...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
