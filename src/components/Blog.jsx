import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, User, Tag } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { blogs } from '../data/blogs';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2000&auto=format&fit=crop)',
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
                            Knowledge & Wellness
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#1A6B96] leading-[1.1] mb-6">
                            Insights & Inspirations
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Stay informed with articles on addiction recovery, emotional wellness, lifestyle improvement, and real-life healing experiences.
                        </p>
                        <a
                            href="#blog"
                            className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all inline-flex items-center gap-2"
                        >
                            Visit Blog <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Blog Listing Section */}
            <section id="blog" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 cursor-pointer group"
                                onClick={() => setSelectedBlog(blog)}
                            >
                                {/* Featured Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#FDB913] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{blog.author}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#1A6B96] mb-3 group-hover:text-[#FDB913] transition-colors">
                                        {blog.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {blog.excerpt}
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

            {/* Blog Modal */}
            <AnimatePresence>
                {selectedBlog && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedBlog(null)}
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
                                onClick={() => setSelectedBlog(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            {/* Featured Image */}
                            <div className="relative h-80 overflow-hidden rounded-t-3xl">
                                <img
                                    src={selectedBlog.image}
                                    alt={selectedBlog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute top-8 left-8">
                                    <span className="bg-[#FDB913] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                        {selectedBlog.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h2 className="text-4xl font-bold text-white mb-4">{selectedBlog.title}</h2>
                                    <div className="flex items-center gap-4 text-white/90">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{selectedBlog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={16} />
                                            <span>{selectedBlog.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    {selectedBlog.content.split('\n\n').map((paragraph, index) => {
                                        // Check if it's a heading
                                        if (paragraph.startsWith('## ')) {
                                            return (
                                                <h2 key={index} className="text-2xl font-bold text-[#1A6B96] mt-8 mb-4">
                                                    {paragraph.replace('## ', '')}
                                                </h2>
                                            );
                                        }
                                        return (
                                            <p key={index} className="text-slate-700 leading-relaxed mb-6">
                                                {paragraph}
                                            </p>
                                        );
                                    })}
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <div className="flex items-center justify-between flex-wrap gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#1A6B96] rounded-full flex items-center justify-center text-white font-bold">
                                                {selectedBlog.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1A6B96]">{selectedBlog.author}</p>
                                                <p className="text-sm text-slate-500">Contributor</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Tag size={16} />
                                            <span className="text-sm">{selectedBlog.category}</span>
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

export default Blog;
