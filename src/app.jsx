import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddProject from './pages/AddProject';
import AdminSidebar from './components/AdminSidebar';
import Footer from './components/Footer';

function AdminLayout({ children }) {
  const location = useLocation();
  const pageTitle = location.pathname.split('/').pop().replace('-', ' ').toUpperCase();

  return (
    <div className="flex bg-dark-bg min-h-screen text-text-primary" id="admin-layout">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col relative min-w-0">
        {/* Background Radial Dots */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} 
        />
        
        <header className="h-16 bg-dark-surface border-b border-dark-border flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative max-w-sm w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">🔍</span>
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full bg-black/30 border border-dark-border rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-text-secondary transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-text-muted hover:text-white transition-colors">🔔</button>
            <button className="text-text-muted hover:text-white transition-colors">🕒</button>
            <div className="h-6 w-px bg-dark-border"></div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Project Console</span>
            </div>
          </div>
        </header>

        <main className="flex-1 relative z-10 overflow-y-auto">
          {children}
          
          <footer className="h-16 border-t border-dark-border flex items-center justify-between px-8 bg-black/20 mt-12">
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
      
      <Route path="/admin" element={
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      } />
      
      <Route path="/admin/add-project" element={
        <AdminLayout>
          <AddProject />
        </AdminLayout>
      } />

      <Route path="/admin/projects" element={
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
