import { motion } from 'motion/react';

const services = [
  { id: '01', title: "Web Architecture", description: "Precision-engineered interfaces." },
  { id: '02', title: "Content Strategy", description: "Cinematic visual storytelling." },
  { id: '03', title: "Navigation Logic", description: "Strategic ecosystem management." }
];

export default function Services() {
  return (
    <section className="py-24 px-8 border-t border-dark-border" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <span className="secondary-header">Architecture Modules</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-dark-border-light"></div>
                <div className="w-2 h-2 rounded-full bg-dark-border-light"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div 
                  key={service.id} 
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 bg-[#141414] rounded border border-dark-border-light hover:border-text-muted transition-colors cursor-pointer group"
                >
                  <span className="text-xs font-mono text-text-secondary group-hover:text-white transition-colors">&lt;{service.title} /&gt;</span>
                  <span className="text-[10px] text-text-muted font-mono">{service.id}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-8 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-full border border-dashed border-dark-border-light flex items-center justify-center mb-6 group cursor-pointer hover:border-text-secondary transition-colors">
              <span className="text-text-muted text-xl group-hover:text-text-primary transition-transform group-hover:rotate-90">+</span>
            </div>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">Create New Module</span>
            <span className="text-[10px] text-text-muted mt-3 max-w-[200px]">Automatic architectural expansion for custom requirements.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
