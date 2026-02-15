import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop)',
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
                            Moments of Hope
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#1A6B96] leading-[1.1] mb-6">
                            Glimpses of Hope
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            A collection of moments that define our mission — workshops, awareness events, volunteer programs, and life at Sarva Dharma Sangama.
                        </p>
                        <a
                            href="#gallery"
                            className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all inline-flex items-center gap-2"
                        >
                            View Gallery <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section id="gallery" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryImages.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className={`relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 cursor-pointer group ${index % 7 === 0 || index % 7 === 3 ? 'md:row-span-2' : ''
                                    }`}
                                onClick={() => setSelectedImage(item)}
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${index % 7 === 0 || index % 7 === 3 ? 'h-full min-h-[400px]' : 'h-64'
                                        }`}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-[#FDB913] text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                                        <div className="flex items-center gap-2 text-white">
                                            <ZoomIn size={18} />
                                            <span className="text-sm">Click to view</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-6xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Image */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full max-h-[80vh] object-contain"
                                />

                                {/* Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                                    <span className="text-[#FDB913] text-sm font-bold uppercase tracking-wider mb-2 block">
                                        {selectedImage.category}
                                    </span>
                                    <h2 className="text-white text-3xl font-bold">{selectedImage.title}</h2>
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

export default Gallery;
