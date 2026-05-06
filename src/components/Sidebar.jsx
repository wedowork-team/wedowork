export default function Sidebar() {
  const files = [
    { name: 'Services.jsx', color: '#ff6b6b' },
    { name: 'Portfolio.jsx', color: '#4ecdc4' },
    { name: 'Contact.jsx', color: '#ffe66d' },
    { name: 'About.jsx', color: '#6b93ff' },
  ];

  return (
    <aside className="w-64 bg-dark-surface border-r border-dark-border hidden lg:flex flex-col h-screen sticky top-0" id="app-sidebar">
      <div className="p-6 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-text-muted"></div>
        <h1 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary">Project Files</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <div className="flex items-center gap-3 px-3 py-2 bg-dark-border rounded-lg text-white border border-white/5 cursor-pointer">
          <span className="text-[#6b93ff] text-sm">{"{}"}</span>
          <span className="text-sm font-medium">Hero.jsx</span>
        </div>
        
        {files.map((file) => (
          <div key={file.name} className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-white transition-colors cursor-pointer group">
            <span style={{ color: file.color }} className="text-sm opacity-80 group-hover:opacity-100 italic font-serif">{"{}"}</span>
            <span className="text-sm font-medium">{file.name}</span>
          </div>
        ))}

        <div className="mt-10 pt-10 border-t border-dark-border">
          <p className="px-3 text-[10px] uppercase tracking-[0.2em] text-text-muted mb-4 font-bold">Resources</p>
          <div className="px-3 flex items-center gap-3 text-text-secondary text-[11px] font-mono hover:text-white cursor-pointer">
            <span className="opacity-40">📁</span>
            <span>styles/main.css</span>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-dark-border bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-dark-border border border-dark-border-light flex items-center justify-center text-[10px] font-bold">WD</div>
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none">Agency Panel</span>
            <span className="text-[10px] text-text-muted mt-1 font-mono">v2.4.1</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
