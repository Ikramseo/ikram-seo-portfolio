import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ChevronRight, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../App';
import ikramLogo from '../assets/ikram-logo.png';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Guest Post Sites', path: '/sites' },
  { name: 'FAQ', path: '/#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5",
      scrolled 
        ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={ikramLogo} 
            alt="Ikram Khan SEO" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tight dark:text-white leading-none">Ikram Khan SEO</span>
            <span className="text-[10px] md:text-[12px] font-medium text-zinc-500 dark:text-zinc-400 opacity-70 tracking-tight">SEO & Guest Post Specialist</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  location.pathname === link.path || (link.path === '/#faq' && location.pathname === '/' && location.hash === '#faq')
                    ? "text-purple-600 font-semibold" 
                    : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Available for New Projects</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2 group"
            >
              Get Guest Post
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="text-zinc-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-zinc-950 z-40 md:hidden transition-all duration-500 ease-in-out transform backdrop-blur-lg",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:text-purple-600 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3.5 rounded-full text-base font-bold uppercase tracking-wider shadow-lg shadow-purple-600/20 mt-4 flex items-center gap-2 group mx-auto"
            onClick={() => setIsOpen(false)}
          >
            Get Guest Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
