import { Search, Bell, History, Menu } from 'lucide-react';

export default function AdminTopbar({ title, onMenuToggle }) {
  return (
    <header className="h-16 bg-dark-surface border-b border-dark-border flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 md:gap-6 flex-1">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden text-text-secondary hover:text-white transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-black/30 border border-dark-border rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-text-secondary transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* Search icon for small screens */}
        <button className="sm:hidden text-text-muted hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-text-muted hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-dark-surface"></span>
        </button>
        <button className="text-text-muted hover:text-white transition-colors hidden sm:block">
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
