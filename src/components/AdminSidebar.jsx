import logo from "../assets/logo.png";
import { motion } from 'motion/react';
import { LayoutDashboard, Briefcase, PlusSquare, Settings, LifeBuoy, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Briefcase, label: 'Projects', path: '/admin/projects' },
  { icon: PlusSquare, label: 'Add Project', path: '/admin/add-project' },
];

const secondaryItems = [
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
  { icon: LifeBuoy, label: 'Support', path: '/admin/support' },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-dark-surface border-r border-dark-border flex flex-col h-screen sticky top-0" id="admin-sidebar">
      <div className="p-8 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <h1 className="text-lg font-bold tracking-tight text-white leading-tight">WeDoWork Admin</h1>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mt-1">Management Console</p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
              location.pathname === item.path 
                ? 'bg-white/5 text-white border border-white/5 shadow-xl' 
                : 'text-text-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}

        <div className="h-px bg-dark-border my-6 mx-4"></div>

        {secondaryItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white transition-all group`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-dark-border bg-black/20">
        <div className="flex items-center gap-3 p-2">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" 
            alt="User" 
            className="w-8 h-8 rounded-md object-cover border border-dark-border"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold truncate">Admin User</span>
            <span className="text-[10px] text-text-muted truncate">admin@wedowork.ai</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
