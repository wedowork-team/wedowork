import { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "motion/react";

export default function Contact() {
  const pricing = {
    "Video Editing": ["Starting From ₹499/video"],
    "Website Development": ["Starting From ₹2,499"],
    "Social Media Handling": ["Starting From ₹3,999/month"],
    "CV Designing": ["Starting From ₹299"],
  };

  // Initially no service selected
  const [service, setService] = useState("");

  return (
    <section className="w-full flex justify-center px-4 md:px-6 py-16 bg-black">
      <div className="w-full max-w-4xl border border-[#1a1a1a] rounded-[32px] bg-[#050505] px-8 md:px-12 py-12">
        <div className="space-y-10">

          <div className="text-center space-y-4">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#666] font-medium">
              Get In Touch
            </p>

            <h1 className="font-serif italic text-4xl md:text-5xl text-white">
              Contact Form
            </h1>

            <div className="w-20 h-px bg-[#2a2a2a] mx-auto"></div>

            <p className="text-sm text-[#777] max-w-md mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you shortly.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xdavbkdg"
            method="POST"
            className="space-y-10"
          >

            {/* FULL NAME */}
            <div>
              <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl outline-none focus:border-white transition-all"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl outline-none focus:border-white transition-all"
              />
            </div>

            {/* WHATSAPP */}
            <div>
              <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
                WhatsApp Number
              </label>

              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your WhatsApp number"
                className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl outline-none focus:border-white transition-all"
              />
            </div>

            {/* SERVICE */}
            <div>
              <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
                Select Service
              </label>

              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl outline-none focus:border-white transition-all"
              >
                <option value="">Choose a Service</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Website Development">Website Development</option>
                <option value="Social Media Handling">Social Media Handling</option>
                <option value="CV Designing">CV Designing</option>
              </select>
            </div>

            {/* PACKAGE */}
            {service && (
              <div>
                <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
                  Starting Price
                </label>

                <div className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl">
  {pricing[service][0]}
</div>
              </div>
            )}

            {/* MESSAGE */}
            <div>
              <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell Us About Your Project......."
                className="w-full mt-4 bg-black border border-[#2a2a2a] px-8 py-8 text-[#888] text-xl rounded-3xl outline-none resize-none focus:border-white transition-all"
              />
            </div>

            <div className="text-center text-sm text-[#777] leading-relaxed">
              Final pricing may vary depending on project requirements and custom features.
              <br />
              Our team will contact you personally.
            </div>

            {/* BUTTON */}
            {service && (
              <button
                type="submit"
                className="w-full border border-white rounded-full py-5 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Message →
              </button>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}