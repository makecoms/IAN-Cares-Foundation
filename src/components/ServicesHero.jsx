import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesHero = ({ onExplore, onBook }) => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Background Image with Zoom and Blur */}
            <motion.div
                initial={{ scale: 1.4 }}
                animate={{ scale: 1 }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=100&w=2560&auto=format&fit=crop"
                    alt="Healing Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A6B96]/40 via-slate-900/20 to-transparent"></div>
            </motion.div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                        What We Heal
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        Ian Cares Foundation addresses diverse needs across the healing journey — from mental health support to holistic recovery.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button
                            onClick={onExplore}
                            className="bg-white text-[#1A6B96] px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:bg-blue-50 transition-all flex items-center gap-3 group"
                        >
                            Explore the Service
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button
                            onClick={onBook}
                            className="bg-[#FDB913] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:bg-[#e5a811] transition-all transform hover:scale-105"
                        >
                            Book a Consultancy
                        </button>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default ServicesHero;
