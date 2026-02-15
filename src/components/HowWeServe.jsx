import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Sun, Apple, Heart, Brain, ArrowRight } from 'lucide-react';

const HowWeServe = ({ onExplore }) => {
    const services = [
        { icon: <Users size={26} />, title: 'Individual & Group Counselling' },
        { icon: <Home size={26} />, title: 'Residential Recovery Program' },
        { icon: <Sun size={26} />, title: 'Faith-Integrated Healing' },
        { icon: <Apple size={26} />, title: 'Nutritional & Lifestyle Guidance' },
        { icon: <Brain size={26} />, title: 'Meditation & Mindfulness Practice' },
        { icon: <Heart size={26} />, title: 'Emotional Wellness Coaching' },
    ];

    return (
        <section id="how-we-serve" className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A6B96]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1A6B96] mb-6">How We Serve</h2>
                    <div className="w-24 h-1.5 bg-[#FDB913] mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex items-center gap-6 group hover:border-[#1A6B96]/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-[#1A6B96]/5 text-[#1A6B96] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1A6B96] group-hover:text-white transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 leading-tight">{service.title}</h3>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={onExplore}
                        className="inline-flex items-center gap-2 text-[#1A6B96] font-bold text-lg hover:gap-4 transition-all"
                    >
                        Explore Services <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowWeServe;
