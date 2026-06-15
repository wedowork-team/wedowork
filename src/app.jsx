import { useState } from 'react';
import UserDashboard from "./pages/UserDashboard";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddProject from './pages/AddProject';
import AdminSidebar from './components/AdminSidebar';
import AdminTopbar from './components/AdminTopbar';
import Footer from './components/Footer';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function AdminLayout({ children }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pageTitle = location.pathname.split('/').pop().replace('-', ' ').toUpperCase();

  return (
    <div className="flex bg-dark-bg min-h-screen text-text-primary overflow-x-hidden" id="admin-layout">
      <AdminSidebar
        isMobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 flex flex-col relative min-w-0">
        {/* Background Radial Dots */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} 
        />
        
        <AdminTopbar
          title="Project Console"
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 relative z-10 overflow-y-auto">
          {children}
          
          <footer className="border-t border-dark-border flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 py-4 sm:h-16 bg-black/20 mt-12 gap-2">
            <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold uppercase tracking-widest">
              <img src="https://storage.googleapis.com/kitchen-sink-artifacts/baked-images/1746537302482-12628468757041692.png" alt="Logo" className="w-5 h-5 object-contain opacity-50" />
              <span>© 2024 WeDoWork. All Rights Reserved.</span>
            </div>
            <div className="flex gap-6 text-[10px] text-text-muted font-bold uppercase tracking-widest underline">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      <Route path="/user-dashboard" element={
        <UserRoute>
          <UserDashboard />
        </UserRoute>
      } />
      
      <Route path="/admin" element={
        <AdminRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </AdminRoute>
      } />
      
      <Route path="/admin/add-project" element={
        <AdminRoute>
          <AdminLayout>
            <AddProject />
          </AdminLayout>
        </AdminRoute>
      } />

      <Route path="/admin/projects" element={
        <AdminRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </AdminRoute>
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

