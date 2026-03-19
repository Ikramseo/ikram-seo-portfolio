import { motion } from 'motion/react';
import { Quote, Star, User, MessageSquare, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director at TechFlow",
    content: "Ikram has been instrumental in our SEO growth. His guest posting service is top-notch, and the quality of sites he provides is exceptional. We've seen a 40% increase in organic traffic over the last 6 months.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David Chen",
    role: "Founder of E-com Empire",
    content: "Working with Ikram was a breeze. He understands the nuances of link building and only provides high-authority, niche-relevant links. Highly recommended for anyone serious about their rankings.",
    rating: 5,
    image: "https://picsum.photos/seed/david/100/100"
  },
  {
    name: "Emma Williams",
    role: "SEO Manager at Global Media",
    content: "The best guest posting service I've used so far. The communication is great, and the results speak for themselves. Our site's DR increased significantly after just a few placements.",
    rating: 5,
    image: "https://picsum.photos/seed/emma/100/100"
  },
  {
    name: "Michael Brown",
    role: "Independent Blogger",
    content: "I was struggling to get my blog noticed until I found Ikram. His outreach strategy helped me get featured on major sites in my niche. Truly an expert in his field.",
    rating: 5,
    image: "https://picsum.photos/seed/michael/100/100"
  }
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-black text-purple-600 uppercase tracking-[0.3em] mb-6">Testimonials</h2>
            <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-8 leading-tight">
              What My <span className="text-purple-600 italic">Clients Say</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Don't just take my word for it. Here's what businesses and agencies around the world have to say about working with me.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-12 md:p-16 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all group relative"
            >
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-purple-600/20 rotate-12 group-hover:rotate-0 transition-transform">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#9333ea" className="text-purple-600" />
                ))}
              </div>

              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-10 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xl font-black dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm font-bold text-purple-600 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-[5rem] p-12 md:p-32 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 to-transparent" />
          <div className="relative z-10">
            <div className="w-24 h-24 bg-purple-600/10 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-10 border border-purple-600/20">
              <MessageSquare size={40} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-10 max-w-4xl mx-auto leading-tight">Ready to Become Our Next <span className="text-purple-600 italic">Success Story?</span></h2>
            <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have improved their search rankings and grown their business with our premium SEO services.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-purple-600" size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-purple-600" size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Real Results</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-purple-600" size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
