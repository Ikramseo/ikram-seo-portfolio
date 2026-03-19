import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, ArrowRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-6">Contact Me</h2>
          <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-8 leading-tight">
            Let’s Work <span className="text-purple-600 italic">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-16 leading-relaxed max-w-3xl mx-auto">
            Looking to improve your search rankings, build high-quality backlinks, or publish guest posts on authority websites? Get in touch and let’s discuss how I can help grow your organic traffic and online visibility.
          </p>

          <div className="flex flex-col items-center gap-12">
            {/* Email Link */}
            <a 
              href="mailto:expertseller275@gmail.com"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-purple-600/20 group-hover:scale-110 transition-transform">
                <Mail size={40} />
              </div>
              <span className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-white group-hover:text-purple-600 transition-colors">
                expertseller275@gmail.com
              </span>
            </a>

            {/* WhatsApp QR Code Section */}
            <div className="flex flex-col items-center gap-6 p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-xl max-w-sm w-full">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-600/20">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-black dark:text-white">Scan to Chat</h3>
              <div className="p-4 bg-white rounded-3xl shadow-inner border border-zinc-100">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/923447289275" 
                  alt="WhatsApp QR Code" 
                  className="w-48 h-48 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <a 
                href="https://wa.me/923447289275" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Open WhatsApp <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <a 
                href="https://www.linkedin.com/in/seo-expert-link-building-guest-posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl font-black text-lg hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-all group"
              >
                <Linkedin size={24} />
                LinkedIn
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.fiverr.com/s/o8lmoaL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-8 py-4 rounded-2xl font-black text-lg hover:border-purple-600 transition-all group"
              >
                <ExternalLink size={24} />
                Fiverr Profile
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
