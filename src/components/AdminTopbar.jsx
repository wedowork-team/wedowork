import { motion } from 'motion/react';
import { Search, Bell, History } from 'lucide-react';

export default function AdminTopbar({ title }) {
  return (
    <header className="h-16 bg-dark-surface border-b border-dark-border flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full bg-black/30 border border-dark-border rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-text-secondary transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-text-muted hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-dark-surface"></span>
        </button>
        <button className="text-text-muted hover:text-white transition-colors">
          <History className="w-5 h-5" />
        </button>
        <div className="h-6 w-px bg-dark-border hidden md:block"></div>
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm font-medium tracking-tight">{title || 'Project Console'}</span>
        </div>
      </div>
    </header>
  );
}
