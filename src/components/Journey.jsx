import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, Heart } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { stories } from '../data/stories';

const Journey = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=2000&auto=format&fit=crop)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.15
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8F6FD]/90 via-[#E8F6FD]/95 to-[#E8F6FD] z-0" />

                <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="bg-[#1A6B96]/10 text-[#1A6B96] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block">
                            Real Stories, Real Hope
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#1A6B96] leading-[1.1] mb-6">
                            Personal Growth Stories
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Discover how real people rebuilt their lives through care, courage, and community. Each story reflects our belief that healing is possible — and no journey is too far when walked with compassion.
                        </p>
                        <a
                            href="#stories"
                            className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all inline-flex items-center gap-2"
                        >
                            Read All Stories <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Stories Section */}
            <section id="stories" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 cursor-pointer group"
                                onClick={() => setSelectedStory(story)}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
                                        <div className="flex items-center gap-2 text-white/80 text-sm">
                                            <Calendar size={14} />
                                            <span>{story.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {story.shortDescription}
                                    </p>
                                    <button className="text-[#1A6B96] font-bold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-[#FDB913]">
                                        Read More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedStory(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            {/* Image */}
                            <div className="relative h-80 overflow-hidden rounded-t-3xl">
                                <img
                                    src={selectedStory.image}
                                    alt={selectedStory.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h2 className="text-4xl font-bold text-white mb-2">{selectedStory.name}</h2>
                                    <div className="flex items-center gap-2 text-white/90">
                                        <Calendar size={16} />
                                        <span>{selectedStory.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    {selectedStory.content.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-slate-700 leading-relaxed mb-6">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#1A6B96] rounded-full flex items-center justify-center text-white">
                                            <Heart size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#1A6B96]">Ian Cares Foundation</p>
                                            <p className="text-sm text-slate-500">Healing Minds with Heart</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Journey;
