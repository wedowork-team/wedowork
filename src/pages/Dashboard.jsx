import { motion } from 'motion/react';
import AdminTopbar from '../components/AdminTopbar';

const stats = [
  { label: 'Total Projects', value: '124', change: '+12%', icon: '📁' },
  { label: 'Ongoing', value: '42', change: 'Active now', icon: '🔄' },
  { label: 'Completed', value: '82', change: '+4 today', icon: '✅' },
];

const initiatives = [
  { id: 1, name: 'Nebula Core OS', client: 'Starlight Ventures', status: 'Ongoing', deadline: 'OCT 24, 2024' },
  { id: 2, name: 'Quantum Encryption', client: 'Defense Dynamics', status: 'Completed', deadline: 'SEP 12, 2024' },
  { id: 3, name: 'Helix Bio-Port', client: 'GeneSys Labs', status: 'Pending', deadline: 'NOV 05, 2024' },
  { id: 4, name: 'Titan Grid v2', client: 'Global Infra', status: 'Ongoing', deadline: 'DEC 18, 2024' },
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-serif italic mb-2">Dashboard</h2>
          <p className="text-text-secondary text-sm">Overview of workspace health and active development cycles.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded transition-all hover:bg-white/90">
          <span>+</span> New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-dark-card border border-dark-border p-6 rounded-xl hover:border-text-muted transition-colors group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</span>
              <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-serif italic text-white">{stat.value}</span>
              <span className={`text-[10px] font-mono ${stat.change.includes('+') ? 'text-green-500' : 'text-text-muted'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden mb-12">
        <div className="p-6 border-b border-dark-border flex justify-between items-center">
          <h3 className="text-sm font-bold tracking-tight">Active Initiatives</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-dark-border rounded text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors">Filter</button>
            <button className="px-3 py-1 bg-dark-border rounded text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors">Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-border bg-black/20">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-text-muted font-bold">Project Name</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-text-muted font-bold">Client</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-text-muted font-bold">Status</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-text-muted font-bold">Deadline</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              {initiatives.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.status === 'Ongoing' ? 'bg-blue-400' : item.status === 'Completed' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{item.client}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-dark-border rounded-full text-[9px] font-bold uppercase tracking-widest text-text-secondary">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-text-muted">{item.deadline}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-text-muted hover:text-white transition-colors">•••</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-black/40 text-center">
           <button className="text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-white transition-colors font-bold">View all system logs</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-dark-card border border-dark-border rounded-xl p-8">
          <h3 className="text-sm font-bold tracking-tight mb-8">System Load</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-text-secondary uppercase">
                <span>Processing Units</span>
                <span>78%</span>
              </div>
              <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} className="h-full bg-yellow-400" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-text-secondary uppercase">
                <span>Memory Allocation</span>
                <span>42%</span>
              </div>
              <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '42%' }} className="h-full bg-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-xl p-8 flex items-center gap-8">
          <div className="w-16 h-16 rounded-xl border border-dark-border-light bg-[#141414] flex items-center justify-center">
            <LayoutDashboard className="w-8 h-8 text-white/40" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight mb-1">WeDoWork Precision Node-01</h4>
            <p className="text-[10px] text-text-muted font-mono uppercase tracking-widest font-bold">Uptime: 242d 12h 4m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { LayoutDashboard } from "lucide-react";
