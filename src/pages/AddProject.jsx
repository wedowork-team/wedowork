import { motion } from 'motion/react';
import { Lock, Zap, Database } from 'lucide-react';

export default function AddProject() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-serif italic mb-2">Add Project</h2>
        <p className="text-text-secondary text-sm">Define a new workspace and set milestones for your next high-performance deliverable.</p>
      </div>

      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <label className="secondary-header">Project Identity</label>
          <input 
            type="text" 
            placeholder="Enter project name..."
            className="w-full bg-black border border-dark-border rounded-md px-6 py-4 text-lg focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="secondary-header">Client / Stakeholder</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">👤</span>
              <input 
                type="text" 
                placeholder="Client name"
                className="w-full bg-black border border-dark-border rounded-md pl-12 pr-6 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="secondary-header">Project Deadline</label>
            <input 
              type="date" 
              className="w-full bg-black border border-dark-border rounded-md px-6 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="secondary-header">Scope Description</label>
          <textarea 
            rows={8}
            placeholder="Describe the project objectives, core constraints, and success criteria..."
            className="w-full bg-black border border-dark-border rounded-md px-6 py-6 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
          />
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-dark-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Ready for initialization</span>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 border border-dark-border rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
              Cancel
            </button>
            <button className="px-8 py-3 bg-white text-black rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
              Create Project
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {[
          { icon: Lock, title: 'Privacy', desc: 'Projects are private to your workspace by default.', label: 'Security' },
          { icon: Zap, title: 'Automation', desc: 'Default templates will be applied with CI/CD integration.', label: 'Workflow' },
          { icon: Database, title: 'Data', desc: 'Storage is allocated dynamically based on tier limits.', label: 'Storage' },
        ].map((feature) => (
          <div key={feature.title} className="bg-dark-card border border-dark-border p-6 rounded-xl hover:border-text-muted transition-colors">
            <feature.icon className="w-5 h-5 text-white/60 mb-6" />
            <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-3">{feature.title}</h4>
            <p className="text-[11px] text-text-secondary leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
