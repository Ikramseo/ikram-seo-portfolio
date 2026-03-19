import { Globe, TrendingUp, ShieldCheck, Search, ArrowRight, CheckCircle2, Rocket, Zap, Target, BarChart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Guest Posting',
    description: 'Secure permanent contextual DoFollow backlinks on high-authority, niche-relevant websites. We handle the entire process from manual outreach to professional content creation and placement, ensuring maximum authority pass to your site.',
    icon: <Globe className="text-purple-600" size={40} />,
    features: ['DA 40+ to DA 90+ Websites', 'Real Organic Traffic Sites', 'Permanent DoFollow Backlinks', 'SEO-Optimized Content Included'],
    cta: 'Order Guest Post',
    link: '/sites'
  },
  {
    title: 'Press Release Distribution',
    description: 'Publish your news on major media outlets and trusted news sites. Perfect for building massive brand authority, increasing visibility, and supporting your overall SEO strategy with high-quality media coverage.',
    icon: <TrendingUp className="text-purple-600" size={40} />,
    features: ['Google News Inclusion', '300+ Media Placements', 'Brand Authority Building', 'Fast Indexing & Visibility'],
    cta: 'Get Media Coverage',
    link: '/contact'
  },
  {
    title: 'Niche Edits (Link Inserts)',
    description: 'Get powerful backlinks placed naturally within existing, aged articles that already have established authority and rankings. This is one of the fastest ways to improve your search engine performance naturally.',
    icon: <ShieldCheck className="text-purple-600" size={40} />,
    features: ['Aged Authority Articles', 'Existing Page Traffic', 'Natural Link Integration', 'Rapid Ranking Boost'],
    cta: 'Order Niche Edits',
    link: '/contact'
  },
  {
    title: 'SEO Link Building Strategy',
    description: 'Custom, data-driven link building campaigns designed for long-term organic growth. We combine manual outreach, guest posting, and competitor analysis to build a safe and effective backlink profile.',
    icon: <Search className="text-purple-600" size={40} />,
    features: ['Manual White-Hat Outreach', 'Competitor Link Analysis', 'Custom Growth Strategy', 'Monthly Performance Reports'],
    cta: 'Get Custom Strategy',
    link: '/contact'
  }
];

const comparisonData = [
  { service: 'Guest Posting', bestFor: 'Authority & Rankings', linkType: 'DoFollow', turnaround: '3-7 Days' },
  { service: 'Press Release', bestFor: 'Brand Visibility', linkType: 'Mixed', turnaround: '2-3 Days' },
  { service: 'Niche Edits', bestFor: 'Fast SEO Boost', linkType: 'DoFollow', turnaround: '2-5 Days' },
  { service: 'Link Building', bestFor: 'Long-term Growth', linkType: 'High Authority', turnaround: 'Monthly' },
];

const processSteps = [
  { step: '01', title: 'Website Selection', desc: 'We identify high-authority websites in your niche with real traffic and strong SEO metrics.' },
  { step: '02', title: 'Content Creation', desc: 'Our professional writers create high-quality, relevant content that naturally incorporates your links.' },
  { step: '03', title: 'Placement & Publishing', desc: 'We coordinate with webmasters to ensure your content is published and links are active.' },
  { step: '04', title: 'Report Delivery', desc: 'You receive a detailed report with live links and metrics for your campaign tracking.' },
];

const useCases = [
  { title: 'SEO Agencies', desc: 'Scale your client results with our white-label guest posting and outreach services.' },
  { title: 'Affiliate Websites', desc: 'Boost your niche site authority and rank for high-competition commercial keywords.' },
  { title: 'SaaS Companies', desc: 'Build brand authority and drive targeted traffic to your software platforms.' },
  { title: 'Ecommerce Stores', desc: 'Improve product page rankings and domain authority for your online shop.' },
];

const featuredPreviewSites = [
  { website: 'apnews.com', da: 94, niche: 'News' },
  { website: 'finance.yahoo.com', da: 94, niche: 'Finance' },
  { website: 'techtimes.com', da: 83, niche: 'Technology' },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-6">PREMIUM SEO SOLUTIONS</h2>
            <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-8 leading-tight">
              SEO Link Building & <span className="text-purple-600">Guest Posting</span> Services
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              We provide <strong>high-authority guest posting, press release distribution, niche edits, and strategic link building</strong> to help businesses improve rankings, domain authority, and organic traffic.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-12 md:p-16 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[60px] group-hover:bg-purple-600/10 transition-colors" />
              <div className="mb-10 bg-white dark:bg-zinc-800 w-20 h-20 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 dark:text-white">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 flex-grow">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300 font-bold text-sm uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              {service.title === 'Guest Posting' && (
                <div className="mb-12 p-6 bg-white dark:bg-zinc-800/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-4">Featured Opportunities</p>
                  <div className="space-y-3">
                    {featuredPreviewSites.map((site, si) => (
                      <div key={si} className="flex justify-between items-center text-sm">
                        <span className="font-bold dark:text-white">{site.website}</span>
                        <div className="flex gap-3">
                          <span className="text-zinc-400 font-bold">DA {site.da}</span>
                          <span className="text-purple-600 font-black">{site.niche}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/sites" className="mt-4 text-xs font-black text-purple-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Browse 1000+ More <ArrowRight size={12} />
                  </Link>
                </div>
              )}
              
              <Link
                to={service.link}
                className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white group/btn mt-auto self-start"
              >
                {service.cta}
                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Comparison Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black dark:text-white mb-4">Compare Our Services</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-bold">Choose the right strategy for your SEO goals.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <th className="py-6 px-4 text-sm font-black uppercase tracking-widest text-zinc-400">Service</th>
                  <th className="py-6 px-4 text-sm font-black uppercase tracking-widest text-zinc-400">Best For</th>
                  <th className="py-6 px-4 text-sm font-black uppercase tracking-widest text-zinc-400">Link Type</th>
                  <th className="py-6 px-4 text-sm font-black uppercase tracking-widest text-zinc-400">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className="border-b border-zinc-50 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="py-6 px-4 font-black text-zinc-900 dark:text-white">{item.service}</td>
                    <td className="py-6 px-4 text-zinc-600 dark:text-zinc-400 font-bold">{item.bestFor}</td>
                    <td className="py-6 px-4 text-purple-600 font-black">{item.linkType}</td>
                    <td className="py-6 px-4 text-zinc-600 dark:text-zinc-400 font-bold">{item.turnaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">OUR PROCESS</h2>
            <h3 className="text-4xl font-black dark:text-white">How My Guest Posting Process Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 group">
                <div className="text-6xl font-black text-purple-600/10 absolute top-6 right-8 group-hover:text-purple-600/20 transition-colors">{step.step}</div>
                <h4 className="text-xl font-black mb-4 dark:text-white relative z-10">{step.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: 'Guest Posts Published', val: '500+' },
            { label: 'Happy Clients', val: '200+' },
            { label: 'Websites Available', val: '1000+' },
            { label: 'Years Experience', val: '5+' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-10 bg-purple-600 rounded-[3rem] text-white shadow-2xl shadow-purple-600/20">
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.val}</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Zap size={32} />, title: "Fast Delivery", desc: "Most placements are delivered within 3–7 days with live links." },
            { icon: <Target size={32} />, title: "Niche Focused", desc: "Backlinks placed on websites relevant to your specific industry." },
            { icon: <ShieldCheck size={32} />, title: "Safe & Secure", desc: "100% manual outreach and Google-safe white-hat link building." },
            { icon: <BarChart size={32} />, title: "Proven Results", desc: "Helping clients improve rankings, traffic, and domain authority." }
          ].map((item, index) => (
            <div key={index} className="p-10 text-center bg-zinc-50 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-100 dark:border-zinc-800">
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-black mb-3 dark:text-white">{item.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Use Cases Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">WHO WE SERVE</h2>
            <h3 className="text-4xl font-black dark:text-white">Built for Scalable Growth</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((item, i) => (
              <div key={i} className="p-10 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <h4 className="text-xl font-black mb-4 dark:text-white">{item.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-[5rem] p-12 md:p-32 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.4em] mb-8">GET STARTED</h2>
            <h3 className="text-4xl md:text-7xl font-black mb-10 max-w-4xl mx-auto leading-tight">Ready to Boost Your <span className="text-purple-600 italic">Search Rankings?</span></h3>
            <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
              Get high-authority backlinks and guest post placements that increase domain authority and organic traffic. Learn more <Link to="/about" className="text-purple-600 hover:underline">about my experience</Link> or check our <Link to="/sites" className="text-purple-600 hover:underline">marketplace</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/sites"
                className="bg-purple-600 text-white px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-purple-600/20 inline-block"
              >
                View Guest Post Sites
              </Link>
              <Link
                to="/contact"
                className="bg-white text-zinc-900 px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform inline-block"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
