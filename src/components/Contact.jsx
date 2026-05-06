import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]" id="contact">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 text-center border-white/10"
          id="contact-form-container"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Start the Journey</h2>
          <p className="text-gray-400 mb-12">Tell us about your project.</p>

          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()} id="lead-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-black border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Message</label>
              <textarea 
                rows={4}
                placeholder="How can we help?"
                className="w-full bg-black border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-4" id="submit-inquiry-btn">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
