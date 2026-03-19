import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Globe, TrendingUp, ShieldCheck, Youtube, MessageSquare, ExternalLink, ChevronDown, Users, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import sitesData from '../data/sites.json';
import ikramPortrait from '../assets/ikram.png';

const services = [
  {
    title: 'Guest Posting',
    description: 'Publish high-authority guest posts on niche-relevant websites with permanent dofollow backlinks that improve rankings and domain authority.',
    icon: <Globe className="text-purple-600" size={32} />,
  },
  {
    title: 'Press Release Distribution',
    description: 'Distribute professional press releases on trusted news and media platforms to increase brand visibility and search engine presence.',
    icon: <TrendingUp className="text-purple-600" size={32} />,
  },
  {
    title: 'Niche Edits',
    description: 'Contextual backlinks placed inside aged authority articles to boost SEO performance and link relevance.',
    icon: <ShieldCheck className="text-purple-600" size={32} />,
  },
  {
    title: 'Blogger Outreach',
    description: 'Manual outreach to relevant websites and bloggers to secure high-quality backlinks and guest post placements.',
    icon: <Users className="text-purple-600" size={32} />,
  }
];

const faqs = [
  {
    question: "What is Guest Posting?",
    answer: "Guest posting is a strategic SEO technique where you publish an article on another website to earn a high-quality backlink. This helps improve your site's search engine rankings, domain authority, and organic traffic by leveraging the authority of the host site."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term game. While some improvements can be seen within weeks, significant ranking boosts typically take 3 to 6 months. The speed of results depends on your current site authority, keyword competition, and the quality of the backlinks acquired."
  },
  {
    question: "Are the backlinks permanent?",
    answer: "Yes, all guest posts and niche edits I provide are permanent. I focus on building long-term relationships with webmasters to ensure your links remain live and continue to pass authority to your site for years to come."
  },
  {
    question: "Are links DoFollow?",
    answer: "Absolutely. I specialize in providing high-quality DoFollow backlinks that pass 'link juice' and authority to your website, which is essential for improving your Google search rankings."
  },
  {
    question: "Do websites have real traffic?",
    answer: "Yes, I only work with websites that have real, organic traffic and active users. I verify every site using tools like Ahrefs and SEMrush to ensure they are not PBNs or low-quality link farms."
  },
  {
    question: "Can I choose the websites?",
    answer: "Yes! You can browse my marketplace of high-authority sites and choose the ones that best fit your niche and budget. I provide detailed metrics for every site so you can make an informed decision."
  }
];

const reviews = [
  {
    platform: 'Fiverr',
    rating: 5,
    content: "Outstanding SEO specialist! Built our backlink profile from scratch with high-authority guest posts and perfect niche relevance.",
    author: "Michael Chen",
    initials: "MC",
    color: "bg-purple-600"
  },
  {
    platform: 'Upwork',
    rating: 5,
    content: "Ikram's link building skills are top-notch. He transformed our search visibility and helped us reach the first page for our target keywords.",
    author: "Emily Rodriguez",
    initials: "ER",
    color: "bg-blue-600"
  },
  {
    platform: 'Linkedin',
    rating: 5,
    content: "Professional, reliable, and delivers quality work on time. Highly recommend for any off-page SEO and guest posting project.",
    author: "David Kim",
    initials: "DK",
    color: "bg-sky-600"
  },
  {
    platform: 'Google',
    rating: 5,
    content: "Incredible attention to detail and great communication throughout the project. Will definitely work with him again for our next campaign!",
    author: "Maria Garcia",
    initials: "MG",
    color: "bg-red-500"
  },
  {
    platform: 'Facebook',
    rating: 5,
    content: "Best SEO expert I've worked with! Clean strategy, modern approach, and excellent project management skills. Results were beyond expectations.",
    author: "James Wilson",
    initials: "JW",
    color: "bg-indigo-600"
  },
  {
    platform: 'Fiverr',
    rating: 5,
    content: "Amazing results! The guest posts were on real sites with organic traffic. My site's authority increased significantly in just two months.",
    author: "Alex Parker",
    initials: "AP",
    color: "bg-emerald-600"
  }
];

export default function Home() {
  const featuredSites = sitesData.slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Inspired by Shajeel Afzal */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1] mb-8">
                SEO Specialist & <br />
                <span className="text-purple-600">Guest Post</span> Expert
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                I help brands build authority and dominate search rankings through high-quality guest posts, press releases, and strategic link building.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <Link
                  to="/services"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-purple-600/20 flex items-center gap-2 group"
                >
                  View Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-600 text-zinc-900 dark:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-sm"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="pt-10 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-zinc-900 dark:text-white">
                <div className="flex items-center gap-2 font-bold text-xl">Fiverr <span className="text-purple-600">Level 2</span></div>
                <div className="flex items-center gap-2 font-bold text-xl">SEO <span className="text-purple-600">Expert</span></div>
                <div className="flex items-center gap-2 font-bold text-xl">Link <span className="text-purple-600">Builder</span></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative z-10 rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[8px] lg:border-[12px] border-white dark:border-zinc-900 shadow-2xl max-w-md mx-auto lg:max-w-none">
                <img 
                  src={ikramPortrait} 
                  alt="Ikram Khan" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 lg:w-40 h-32 lg:h-40 bg-purple-600/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 lg:w-40 h-32 lg:h-40 bg-purple-600/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white">Off-Page SEO & Link Building Expertise</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-zinc-50 dark:bg-zinc-900 p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-purple-600 font-bold flex items-center gap-2 group/link mt-auto">
                  Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects/Sites */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">GUEST POST SITES</h2>
              <h3 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white">Premium Guest Post Opportunities</h3>
            </div>
            <Link to="/sites" className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">
              View All Sites
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSites.map((site) => (
              <div key={site.id} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 blur-[40px] group-hover:bg-purple-600/10 transition-colors" />
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-2xl font-bold dark:text-white truncate max-w-[150px]">{site.website}</h4>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-4 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {site.niche}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl text-center">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase mb-1">DA</p>
                    <p className="text-2xl font-black text-purple-600">{site.da}</p>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl text-center">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase mb-1">Traffic</p>
                    <p className="text-2xl font-black text-purple-600">{site.traffic}</p>
                  </div>
                </div>
                <Link to="/contact" className="w-full block text-center py-4 rounded-2xl bg-zinc-900 text-white font-bold hover:bg-purple-600 transition-all">
                  Order Guest Post
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say Section */}
      <section className="py-24 overflow-hidden bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">TESTIMONIALS</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white">Trusted by Businesses & Agencies Worldwide</h3>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-6 max-w-3xl mx-auto leading-relaxed">
              Real reviews from clients who have used my guest posting and link building services to improve their search rankings and domain authority.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
                <span className="text-2xl">⭐</span> 200+ Happy Clients
              </div>
              <div className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
                <span className="text-2xl">⭐</span> 242 Fiverr Reviews
              </div>
              <div className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
                <span className="text-2xl">⭐</span> Level 2 Fiverr Seller
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] flex flex-col h-full hover:border-purple-600/50 transition-colors group"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'}`} />
                    <span className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em]">{review.platform}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#eab308" className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-grow font-medium">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                    {review.initials}
                  </div>
                  <span className="text-white font-bold tracking-tight">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Inspired by Shajeel Afzal */}
      <section id="faq" className="py-24 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-6">Guest Posting & Link Building FAQs</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Here are answers to common questions about my guest posting, backlink building, and SEO outreach services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-zinc-100 dark:border-zinc-800 rounded-3xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
                >
                  <span className="text-xl font-bold dark:text-white">{faq.question}</span>
                  <ChevronDown className={`transition-transform duration-300 text-zinc-400 dark:text-white ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-8 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-purple-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-600/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-400/50 to-transparent pointer-events-none" />
          <h2 className="text-sm font-black text-sky-300 uppercase tracking-[0.4em] mb-8 relative z-10">Still Have Questions?</h2>
          <h3 className="text-4xl md:text-7xl font-black mb-12 relative z-10 leading-tight">Contact me to discuss your SEO project.</h3>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link to="/contact" className="bg-white text-purple-600 px-12 py-6 rounded-2xl font-black text-xl md:text-2xl hover:scale-105 transition-transform shadow-2xl">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
