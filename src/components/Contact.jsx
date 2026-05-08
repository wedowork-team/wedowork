import logo from "../assets/logo.png";
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="w-full flex justify-center px-6 py-20 bg-black">
      
      <div className="w-full max-w-6xl border border-[#1a1a1a] rounded-[40px] bg-[#050505] p-20">

        <div className="space-y-16">

          {/* COMPANY BRANDING */}
          <div className="flex items-center justify-center gap-4">

  <img
    src={logo}
    alt="Logo"
    className="w-16 h-16 object-contain"
  />

  <h1 className="font-serif italic text-5xl text-white">
    WeDoWork
  </h1>

</div>

          {/* SERVICE */}
          <div>
            <label className="text-[12px] uppercase tracking-[0.4em] text-[#666]">
              Select Service
            </label>

            <select className="w-full mt-6 bg-black border border-[#2a2a2a] px-5 py-5 text-white text-3xl rounded-2xl outline-none">
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

            <select className="w-full mt-6 bg-black border border-[#2a2a2a] px-5 py-5 text-white text-3xl rounded-2xl outline-none">
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
              rows="5"
              placeholder="Tell Us About Your Project......."
              className="w-full mt-6 bg-black border border-white px-12 py-12 text-[#888] text-3xl rounded-[35px] outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full border border-white rounded-full py-8 text-3xl hover:bg-white hover:text-black transition-all duration-300">
            Send Inquiry
          </button>

        </div>
      </div>
    </section>
  );
}
