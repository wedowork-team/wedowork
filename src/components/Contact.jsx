import logo from "../assets/logo.png";
import { motion } from 'motion/react';

export default function Contact() {
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

          <form action="https://formspree.io/f/xdavbkdg" method="POST" className="space-y-10">


          {/* SERVICE */}
          <div>
            <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
              Select Service
            </label>

            <select name="service" className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl outline-none focus:border-white transition-all">
              <option>Video Editing</option>
              <option>Website Development</option>
              <option>Social Media Handling</option>
              <option>CV Designing</option>
            </select>
          </div>

          {/* PACKAGE */}
          <div>
            <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
              Select Package
            </label>

            <select name="package" className="w-full mt-4 bg-black border border-[#2a2a2a] px-6 py-4 text-white text-xl rounded-2xl outline-none focus:border-white transition-all">
              <option>Basic</option>
              <option>Professional</option>
              <option>Premium</option>
            </select>
          </div>

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

          {/* BUTTON */}
          <button type="submit" className="w-full border border-white rounded-full py-5 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
            Send Message →
          </button>
          </form>

        </div>
      </div>
    </section>
  );
}
