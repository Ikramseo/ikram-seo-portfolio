import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8">Terms of Service</h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-6">
            <p className="text-lg">
              Last updated: March 12, 2026
            </p>
            <p>
              Welcome to Ikram Khan SEO. By accessing or using our website and services, you agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">1. Services</h2>
            <p>
              Ikram Khan SEO provides SEO outreach, guest posting, and link-building services. We aim to deliver high-quality backlinks on authority websites as described in our service packages.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">2. User Responsibilities</h2>
            <p>
              You agree to provide accurate and complete information when inquiring about or ordering our services. You are responsible for ensuring that the content you provide for guest posts complies with all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">3. Payments and Refunds</h2>
            <p>
              Payments for services are due as specified in the order agreement. Due to the nature of SEO services, refunds are generally not provided once the outreach or placement process has begun, unless otherwise agreed upon in writing.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">4. Limitation of Liability</h2>
            <p>
              Ikram Khan SEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">5. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at expertseller275@gmail.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
