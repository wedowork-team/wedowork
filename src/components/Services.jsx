import { motion } from "motion/react";

export default function Services() {
  const cards = [
    {
      title: "Website Developing",
      subtitle: "WEB DEVELOPMENT",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Video Editing",
      subtitle: "CINEMATIC EDITING",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Social Network Handling",
      subtitle: "SOCIAL MANAGEMENT",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Graphic Designing",
      subtitle: "DIGITAL PRESENCE",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "CV Designing",
      subtitle: "PROFESSIONAL RESUME",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      className="relative py-24 px-8 overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px]">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`relative overflow-hidden rounded-[28px] border border-[#222] group cursor-pointer ${card.className}`}
            >
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition duration-500"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8 z-10">

                <p className="text-[11px] tracking-[4px] text-[#bbbbbb] uppercase mb-3">
                  {card.subtitle}
                </p>

                <h2 className="text-white text-4xl italic font-serif leading-tight">
                  {card.title}
                </h2>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[28px] shadow-[0_0_50px_rgba(255,255,255,0.15)]"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}