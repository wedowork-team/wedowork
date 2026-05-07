import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-8" id="hero-section">
      <div className="max-w-4xl mx-auto" id="hero-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif italic font-light mb-6 leading-tight"
        >
          We Grow Your <br /> Business Online
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary max-w-md mb-12 text-sm leading-relaxed"
        >
          High-performance interfaces and cinematic storytelling. Managing digital presence for maximum scalability and clinical precision.
        </motion.p>

        {/* <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-[32px] font-serif italic">98%</span>
            <span className="secondary-header !tracking-tighter">Sync Accuracy</span>
          </div>
          <div className="flex flex-col border-l border-dark-border pl-8">
            <span className="text-[32px] font-serif italic">12</span>
            <span className="secondary-header !tracking-tighter">Global Partners</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
