import { motion } from 'motion/react';
import { Search, Globe, TrendingUp, ShieldCheck, Filter, ExternalLink, ArrowRight, Star, CheckCircle2, ShoppingBag, BarChart3, Users2, Zap, ChevronDown, ListFilter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import sitesData from '../data/sites.json';

export default function GuestPostSites() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [minDA, setMinDA] = useState(0);
  const [minTraffic, setMinTraffic] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortBy, setSortBy] = useState('popular');

  const niches = ['All', ...new Set(sitesData.map(site => site.niche))];

  const filteredSites = useMemo(() => {
    return sitesData.filter(site => {
      const matchesSearch = site.website.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           site.niche.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesNiche = selectedNiche === 'All' || site.niche === selectedNiche;
      
      // Parse traffic string (e.g., "27.8M" -> 27800000, "500K" -> 500000)
      const parseTraffic = (t: string) => {
        const val = parseFloat(t);
        if (t.includes('M')) return val * 1000000;
        if (t.includes('K')) return val * 1000;
        return val;
      };
      
      const trafficVal = parseTraffic(site.traffic);
      const matchesDA = site.da >= minDA;
      const matchesTraffic = trafficVal >= minTraffic;
      const matchesPrice = site.price <= maxPrice;

      return matchesSearch && matchesNiche && matchesDA && matchesTraffic && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'da') return b.da - a.da;
      if (sortBy === 'traffic') {
        const parseTraffic = (t: string) => {
          const val = parseFloat(t);
          if (t.includes('M')) return val * 1000000;
          if (t.includes('K')) return val * 1000;
          return val;
        };
        return parseTraffic(b.traffic) - parseTraffic(a.traffic);
      }
      if (sortBy === 'price') return a.price - b.price;
      return 0; // popular/default
    });
  }, [searchTerm, selectedNiche, minDA, minTraffic, maxPrice, sortBy]);

  const featuredSites = useMemo(() => {
    return [...sitesData].sort((a, b) => b.da - a.da).slice(0, 3);
  }, []);

  const sampleSites = filteredSites.slice(0, 20);

  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-6">GUEST POST SITES</h2>
            <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-8 leading-tight">
              High Authority <span className="text-purple-600 italic">Guest Post</span> Opportunities
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Browse high-authority websites available for <strong>guest posting, contextual backlinks, and SEO outreach campaigns</strong>.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: '1000+ Sites', icon: <Globe size={20} /> },
            { label: '50+ Niches', icon: <ShoppingBag size={20} /> },
            { label: 'DA 30–90+', icon: <BarChart3 size={20} /> },
            { label: 'Real Traffic', icon: <Zap size={20} /> },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 p-6 rounded-3xl flex items-center justify-center gap-3">
              <div className="text-purple-600">{stat.icon}</div>
              <span className="font-black text-zinc-900 dark:text-white uppercase tracking-wider text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Star className="text-yellow-500" fill="currentColor" />
            <h2 className="text-2xl font-black dark:text-white">Featured Guest Post Websites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSites.map((site) => (
              <div key={`featured-${site.id}`} className="bg-purple-600 p-8 rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px]" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {site.niche}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest bg-yellow-400 text-zinc-900 px-3 py-1 rounded-full">Premium</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 truncate">{site.website}</h3>
                  <div className="flex gap-4 mb-8">
                    <div className="text-center">
                      <p className="text-[10px] font-bold opacity-70 uppercase mb-1">DA</p>
                      <p className="text-xl font-black">{site.da}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-bold opacity-70 uppercase mb-1">DR</p>
                      <p className="text-xl font-black">{site.dr}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-bold opacity-70 uppercase mb-1">Traffic</p>
                      <p className="text-xl font-black">{site.traffic}</p>
                    </div>
                  </div>
                  <Link to="/contact" className="w-full bg-white text-purple-600 py-4 rounded-2xl font-black text-center block hover:bg-zinc-100 transition-colors">
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 mb-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input
                  type="text"
                  placeholder="Search websites, niches, or keywords..."
                  className="w-full bg-white dark:bg-zinc-800 border-none rounded-full py-5 pl-16 pr-8 text-zinc-900 dark:text-white focus:ring-2 focus:ring-purple-600 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <ListFilter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <select 
                  className="w-full bg-white dark:bg-zinc-800 border-none rounded-full py-5 pl-16 pr-8 text-zinc-900 dark:text-white focus:ring-2 focus:ring-purple-600 shadow-sm appearance-none font-bold"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Sort by: Most Popular</option>
                  <option value="da">Sort by: Highest DA</option>
                  <option value="traffic">Sort by: Highest Traffic</option>
                  <option value="price">Sort by: Lowest Price</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-200 pointer-events-none" size={20} />
              </div>

              <div className="relative">
                <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <select 
                  className="w-full bg-white dark:bg-zinc-800 border-none rounded-full py-5 pl-16 pr-8 text-zinc-900 dark:text-white focus:ring-2 focus:ring-purple-600 shadow-sm appearance-none font-bold"
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                >
                  {niches.map(n => (
                    <option key={n} value={n}>{n === 'All' ? 'All Niches' : n}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-200 pointer-events-none" size={20} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-4">Min DA: {minDA}</label>
                <input 
                  type="range" min="0" max="100" value={minDA} 
                  onChange={(e) => setMinDA(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-4">Max Price: ${maxPrice}</label>
                <input 
                  type="range" min="0" max="2000" step="50" value={maxPrice} 
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>
              <div className="flex items-center justify-end">
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedNiche('All');
                    setMinDA(0);
                    setMinTraffic(0);
                    setMaxPrice(10000);
                    setSortBy('popular');
                  }}
                  className="text-sm font-black text-purple-600 uppercase tracking-widest hover:text-purple-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {sampleSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-900 p-10 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:shadow-purple-600/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 blur-[40px] group-hover:bg-purple-600/10 transition-colors" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                  <Globe size={32} />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="bg-purple-600/10 text-purple-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {site.niche}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    Link: {site.linkType || 'DoFollow'}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-6 dark:text-white truncate">{site.website}</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">DA</p>
                  <p className="text-xl font-black text-purple-600">{site.da}</p>
                </div>
                <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">DR</p>
                  <p className="text-xl font-black text-purple-600">{site.dr}</p>
                </div>
                <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Traffic</p>
                  <p className="text-xl font-black text-purple-600">{site.traffic}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-8 border-t border-zinc-50 dark:border-zinc-800">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Price</p>
                    <p className="text-3xl font-black text-zinc-900 dark:text-white">${site.price}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="text-sm font-black text-purple-600 uppercase tracking-widest hover:underline"
                  >
                    View Details
                  </Link>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Order Guest Post
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zinc-400 text-sm mb-20 italic">
          * Website metrics and pricing may change depending on niche, anchor text, and content requirements.
        </p>

        {/* Bulk Order Banner */}
        <div className="mb-20">
          <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800 p-8 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-600/20">
                <Users2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-1">Need Bulk Guest Posts?</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-bold">We offer custom outreach campaigns for agencies and SEO professionals.</p>
              </div>
            </div>
            <Link to="/contact" className="bg-sky-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-sky-700 transition-all whitespace-nowrap">
              Contact for Bulk Pricing
            </Link>
          </div>
        </div>

        {/* Curiosity/Lead Generation Section */}
        <div className="mb-32">
          <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden border border-zinc-800">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">Access 1000+ High-Authority Guest Post Websites</h2>
              <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
                Our database includes thousands of websites across <strong>technology, business, finance, health, crypto, and lifestyle niches</strong> with real traffic and strong SEO metrics.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/14NLqtddlmU8eb32xHdpsuOgWzKyyS55hSaRm67Eb-pA/edit?gid=217620081#gid=217620081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-purple-600 text-white px-12 py-6 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-purple-600/20"
              >
                See Our Guest Post List <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-purple-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />
          <div className="relative z-10">
            <Star size={64} fill="currentColor" className="mx-auto mb-10 opacity-20" />
            <h2 className="text-4xl md:text-7xl font-black mb-10 max-w-4xl mx-auto leading-tight">Need a Custom Guest Post List?</h2>
            <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed font-bold">
              We have access to <strong>1000+ high-authority websites across multiple niches.</strong> Tell us your <strong>niche, DA requirement, and budget</strong>, and we’ll find the best websites for your campaign.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/14NLqtddlmU8eb32xHdpsuOgWzKyyS55hSaRm67Eb-pA/edit?gid=217620081#gid=217620081"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-16 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl inline-block"
            >
              See Our Guest Post List
            </a>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mb-32 text-center">
          <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-12">Trusted by Agencies & Businesses Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: '500+ Guest Posts Published', icon: <CheckCircle2 size={32} /> },
              { label: '200+ Happy Clients', icon: <Users2 size={32} /> },
              { label: '1000+ Websites Available', icon: <Globe size={32} /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="text-purple-600">{item.icon}</div>
                <p className="text-xl font-black text-zinc-900 dark:text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Text Block */}
        <div className="max-w-4xl mx-auto text-center border-t border-zinc-100 dark:border-zinc-800 pt-20">
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-8">Guest Posting & Link Building Opportunities</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Our marketplace provides access to high-authority websites for <strong>guest posting, blogger outreach, and contextual backlink placements</strong>. These placements help businesses improve <strong>search engine rankings, domain authority, and organic traffic</strong>.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            By leveraging our network of premium publishers, you can secure high-quality backlinks that drive real results. Whether you need niche-specific outreach or bulk link building for an agency, we have the resources to scale your SEO efforts effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
