import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: "Cyber Core Systems",
    category: "Web Architecture",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    id: 2,
    title: "Nexus Media Lab",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 3,
    title: "Aura Creative",
    category: "Visual Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 4,
    title: "Vector Dynamics",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800",
    size: "small"
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6 border-t border-brand-border" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Portfolio</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden glass-card cursor-pointer ${
                project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              id={`portfolio-project-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-white/60 mb-2 uppercase italic">{project.category}</span>
                <h3 className="text-2xl font-display font-bold tracking-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
