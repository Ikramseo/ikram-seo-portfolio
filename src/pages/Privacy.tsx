import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-6">
            <p className="text-lg">
              Last updated: March 12, 2026
            </p>
            <p>
              At Ikram Khan SEO, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, such as your name, email address, and any other details you provide in contact forms.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Improve, personalize, and expand our website and services.</li>
              <li>Communicate with you, either directly or through one of our partners.</li>
              <li>Send you emails related to your inquiries or orders.</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">3. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">4. Third-Party Links</h2>
            <p>
              Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at expertseller275@gmail.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
