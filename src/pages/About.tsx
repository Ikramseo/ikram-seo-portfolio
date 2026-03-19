import { motion } from 'motion/react';
import { Award, Briefcase, Users, CheckCircle2, Star, Youtube, Mail, MapPin } from 'lucide-react';
import ikramPortrait from '../assets/ikram.png';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">About Me</h2>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-8 leading-tight">
              Ikram Khan — <span className="text-purple-600">Guest Post & Link Building Specialist</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              I’m a Guest Post and Off-Page SEO Specialist with 5+ years of experience helping businesses increase their domain authority, search visibility, and organic traffic through strategic link building.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              My services include guest posting, blogger outreach, niche edits, and press release distribution on high-authority websites across multiple niches.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <MapPin size={18} className="text-purple-600" />
                <span>Lahore, Pakistan & Remote</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <Mail size={18} className="text-purple-600" />
                <span>expertseller275@gmail.com</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
                <p className="text-4xl font-black text-purple-600 mb-1">5+</p>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
                <p className="text-4xl font-black text-purple-600 mb-1">500+</p>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Projects Done</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-zinc-50 dark:border-zinc-900">
              <img
                src={ikramPortrait}
                alt="Ikram Khan"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-purple-600 text-white p-10 rounded-[3rem] shadow-2xl rotate-6 hidden md:block">
              <Star size={40} fill="currentColor" className="mb-2" />
              <p className="text-2xl font-black">Level 2</p>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Fiverr Seller</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Award className="text-purple-600" size={32} />,
              title: 'Expertise',
              desc: 'Specialized in high-authority backlink acquisition and blogger outreach across multiple niches.'
            },
            {
              icon: <Briefcase className="text-purple-600" size={32} />,
              title: 'Experience',
              desc: 'Proven track record of helping agencies and businesses worldwide improve their search rankings.'
            },
            {
              icon: <Youtube className="text-purple-600" size={32} />,
              title: 'Content Creator',
              desc: 'Sharing SEO knowledge and tutorials to help the developer and marketing community grow.'
            }
          ].map((item, index) => (
            <div key={index} className="p-12 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/10 blur-[120px]" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-6">Timeline</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-12">My Professional Journey</h3>
            <div className="space-y-16">
              <div className="relative pl-12 border-l-2 border-purple-600/30">
                <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-zinc-900 shadow-[0_0_20px_rgba(147,51,234,0.5)]" />
                <span className="text-purple-600 font-black text-sm uppercase tracking-widest mb-2 block">2021 - Present</span>
                <h4 className="text-2xl font-bold mb-4">SEO Outreach Specialist & Content Creator</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Providing premium guest posting and backlink services to global agencies. Achieved Level 2 Seller status on Fiverr and started sharing knowledge through content creation.
                </p>
              </div>
              <div className="relative pl-12 border-l-2 border-purple-600/30">
                <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 bg-zinc-700 rounded-full border-4 border-zinc-900" />
                <span className="text-zinc-500 font-black text-sm uppercase tracking-widest mb-2 block">2015 - 2021</span>
                <h4 className="text-2xl font-bold mb-4">Software Quality Assurance Engineer</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  6 years of experience in manual and automated testing, ensuring software products meet rigorous quality standards. This role built my analytical foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
