import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialSection = () => {
    const socials = [
        {
            name: 'Facebook',
            icon: <Facebook size={24} />,
            url: 'https://www.facebook.com/IanCaresFoundation/',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Instagram',
            icon: <Instagram size={24} />,
            url: 'https://www.instagram.com/iancaresfoundation/',
            color: 'hover:text-pink-600'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://www.linkedin.com/company/ian-cares-foundation/',
            color: 'hover:text-blue-700'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#1A6B96] mb-12"
                >
                    Connect With Us
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center gap-8"
                >
                    {socials.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 ${social.color} shadow-lg shadow-slate-200/50 transition-colors duration-300 border border-slate-100 flex-shrink-0`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialSection;
