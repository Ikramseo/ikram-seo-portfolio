import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Linkedin, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';
import ikramLogo from '../assets/ikram-logo.png';

const FiverrIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-10.438-4.463c-.45-.45-.9-.675-1.35-.675-.9 0-1.35.45-1.35 1.35v1.35h-1.35v2.7h1.35v5.4h2.7v-5.4h1.35v-2.7h-1.35v-.9c0-.45.225-.675.675-.675h.675v-1.35h-.675zm5.4 4.05c-.45-.45-.9-.675-1.35-.675-.9 0-1.35.45-1.35 1.35v5.4h2.7v-5.4c0-.45.225-.675.675-.675h.675v-1.35h-.675c-.45 0-.9.225-1.35.675z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-4 group mb-8">
            <img 
              src={ikramLogo} 
              alt="Ikram Khan SEO" 
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-black tracking-tight dark:text-white">Ikram Khan SEO</span>
          </Link>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-sm mb-10 leading-relaxed">
            Helping brands build authority and rankings through high-quality guest posts and strategic link building.
          </p>
          <div className="flex gap-4">
            {[
              { 
                icon: <Linkedin size={20} />, 
                href: "https://www.linkedin.com/in/seo-expert-link-building-guest-posts/",
                hoverClass: "hover:bg-[#0077b5] hover:border-[#0077b5]"
              },
              { 
                icon: <FiverrIcon size={20} />, 
                href: "https://www.fiverr.com/s/o8lmoaL",
                hoverClass: "hover:bg-[#1dbf73] hover:border-[#1dbf73]"
              }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-white transition-all shadow-sm",
                  social.hoverClass
                )}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-purple-600 uppercase tracking-[0.2em] mb-8">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-lg font-bold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors">About Me</Link></li>
            <li><Link to="/services" className="text-lg font-bold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors">Services</Link></li>
            <li><Link to="/sites" className="text-lg font-bold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors">Guest Post Sites</Link></li>
            <li><Link to="/testimonials" className="text-lg font-bold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors">What Clients Say</Link></li>
            <li><Link to="/contact" className="text-lg font-bold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black text-purple-600 uppercase tracking-[0.2em] mb-8">Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Email</p>
                <p className="font-bold">expertseller275@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">WhatsApp</p>
                <p className="font-bold">03447289275</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 flex-shrink-0">
                <ExternalLink size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Fiverr</p>
                <a href="https://www.fiverr.com/s/o8lmoaL" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-purple-600">Level 2 Seller</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          © 2026 Ikram Khan. Helping brands grow with SEO, guest posting, and link building.
        </p>
        <div className="flex gap-8 text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-purple-600">Privacy</Link>
          <Link to="/terms" className="hover:text-purple-600">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
