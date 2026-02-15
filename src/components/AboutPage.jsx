import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Star, Users, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero / Introduction Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#FDB913]/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-[#1A6B96]/10 text-[#1A6B96] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block">
                            Our Inspiration
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#1A6B96] mb-8 leading-tight">
                            Celebrating the Life of <br /> Ian Austin Mascarenhas
                        </h1>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                            <p>
                                On December 21, 2017, 26-year-old Ian Austin Mascarenhas, working in the Kingdom of Saudi Arabia, came down on a month's vacation to visit his ailing mother Anna (battling ovarian cancer since two years) and to spend Christmas with the family.
                            </p>
                            <p>
                                On the next day, in the evening, he met with a tragic car accident near A J Hospital in the city and succumbed to his head injuries in the wee hours of the morning. This tragic incident stands out to be a major blow which shattered the life of his parents, his only sister, and his dear relatives.
                            </p>
                            <p>
                                Ian Austin was an energetic youngster with many inborn talents who, at his different stages of life, had amassed a great number of friends. He was a fun-loving, kind-hearted friend who was always available when his presence was needed at any dire state.
                            </p>
                            <p>
                                For this very reason, his parents offered to donate his organs on the night of his departure to the youth in need, so that he could live beyond his life. Unfortunately, this was not to be, as all his organs had failed by the time he had breathed his last. They could only donate his eyes to the eye bank at A J Hospital in Mangalore. Today, two persons are seeing the light of day through Ian's eyes.
                            </p>
                            <p>
                                Following Ian's passing away, his numerous friends, from different regions, religions, and languages, prevailed upon his parents to start a charity so that his memory and good deeds are preserved for posterity. This is how the idea of forming a foundation called 'Ian Cares' took its shape.
                            </p>
                            <p>
                                We are fortunate to be associated with a few distinguished personalities from different walks of life who have agreed to become the trustees of this foundation, besides the family members.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            {/* Placeholder for Ian's photo - using a generic image if specific not available, or keeping a placeholder block */}
                            <div className="bg-slate-200 w-full aspect-[4/5] flex items-center justify-center text-slate-400">
                                <img
                                    src="/images/Ian sir.jpeg"
                                    alt="Ian Austin Mascarenhas"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                                <p className="font-bold text-xl">Ian Austin Mascarenhas</p>
                                <p className="text-sm opacity-90">Forever in our hearts</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white/60 backdrop-blur-sm px-6">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-8">Our Story</h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                        Born out of love and loss, Ian Cares Foundation was established in memory of Ian Austin Mascarenhas — a young soul who inspired compassion and care. After his tragic passing in 2017, his family turned grief into a mission to fight the “3 Ds” — Drinks, Drugs, and Depression — helping others find strength and purpose again.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-6 bg-[#1A6B96] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <Sun className="absolute top-10 left-10 w-48 h-48" />
                </div>
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20"
                    >
                        <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center text-[#1A6B96] mb-6">
                            <Star size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                        <p className="text-lg text-blue-100 leading-relaxed">
                            To create a world where every individual lives free from addiction, emotional pain, and discrimination — embracing faith, healing, and unity.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20"
                    >
                        <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center text-[#1A6B96] mb-6">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-lg text-blue-100 leading-relaxed">
                            To provide holistic recovery programs that nurture the mind, body, and soul — integrating therapy, faith, and family support.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-[#E8F6FD]">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">Our Core Values</h2>
                        <div className="w-24 h-1.5 bg-[#FDB913] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Compassion', desc: 'Healing with love and respect' },
                            { title: 'Integrity', desc: 'Serving with honesty and transparency' },
                            { title: 'Inclusivity', desc: 'Caring beyond religion and background' },
                            { title: 'Transformation', desc: 'Changing lives through awareness and action' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-center"
                            >
                                <div className="w-12 h-12 bg-[#1A6B96]/10 text-[#1A6B96] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A6B96] mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sarva Dharma Sangama Centre */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1599447421405-0cbe8fa7d4da?q=80&w=2520&auto=format&fit=crop"
                            alt="Sarva Dharma Sangama Centre"
                            className="rounded-[40px] shadow-2xl w-full object-cover aspect-video"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm mb-4 inline-block">A Place of Harmony</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">The Sarva Dharma Sangama Centre</h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Located at Quila, Kinnigoli, Sarva Dharma Sangama is a one-of-a-kind rehabilitation and wellness centre — bringing together spirituality, counselling, and community care under one roof.
                        </p>
                        <blockquote className="text-2xl font-serif italic text-[#1A6B96] border-l-4 border-[#FDB913] pl-6 py-2">
                            "When faiths unite, healing begins."
                        </blockquote>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
