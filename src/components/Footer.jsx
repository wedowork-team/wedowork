export default function Footer() {
  return (
    <footer className="h-10 bg-dark-surface border-t border-dark-border flex items-center justify-between px-8" id="main-footer">
      
      <div className="flex items-center gap-6">
         <div className="flex items-center gap-2">
           <img src="https://storage.googleapis.com/kitchen-sink-artifacts/baked-images/1746537302482-12628468757041692.png" alt="Logo" className="w-5 h-5 object-contain" />
           <span className="text-[9px] uppercase tracking-widest text-text-muted">© 2024 WeDoWork Agency</span>
         </div>
      </div>
    </footer>
  );
}
