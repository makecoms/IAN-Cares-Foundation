import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Heart,
    Brain,
    Users,
    Phone,
    MapPin,
    Mail,
    Sun,
    ArrowRight,
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
    const services = [
        {
            icon: <Brain className="w-10 h-10" />,
            title: 'De-addiction Strategy',
            description: 'Focusing on long-term sobriety and relapse prevention through a guided, supportive environment.'
        },
        {
            icon: <Heart className="w-10 h-10" />,
            title: 'Mental Health Support',
            description: 'Counseling for depression and anxiety focused on restoring balance and building emotional resilience.'
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: 'Youth Empowerment',
            description: 'Workshops focused on unlocking full potential and discovering internal purpose for young adults.'
        }
    ];

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#FDB913]/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-[#1A6B96]/10 text-[#1A6B96] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block">
                            Dedicated to Recovery
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-[#1A6B96] leading-[1.1] mb-8">
                            Healing Minds <br /> with Heart
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Since 2017, we have walked beside individuals struggling with alcohol, drugs, and depression to give them a truly deserved 'second chance'.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#mission" className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all flex items-center gap-2">
                                Our Mission <ArrowRight size={20} />
                            </a>
                            <a href="tel:+918750075006" className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                                <Phone size={20} /> Call Now
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2520&auto=format&fit=crop"
                                alt="Healing Journey"
                                className="w-full aspect-[4/5] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Method */}
            <section id="mission" className="py-24 bg-white/50 px-6 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">Why Choose Ian Cares Foundation?</h2>
                        <div className="w-24 h-1.5 bg-[#FDB913] mx-auto rounded-full"></div>
                        <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
                            Recovery is more than a clinical process — it's a family-centered community approach where every step is a guided journey toward light.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Peer Support', desc: 'Connecting with those who understand the struggle deeply.' },
                            { title: 'Holistic Focus', desc: 'Restoring mind, body, and spirit in unison.' },
                            { title: 'Family Values', desc: 'Rebuilding the broken bridges to your loved ones.' }
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-[#FDB913]/20 rounded-xl flex items-center justify-center text-[#FDB913] mb-6">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A6B96] mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spirituality - Sarva Dharma Sangama */}
            <section id="spirituality" className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#1A6B96] to-[#0f4664] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    {/* Symbolism placeholder icons */}
                    <Sun className="absolute top-10 left-10 w-32 h-32" />
                    <Users className="absolute bottom-10 right-10 w-48 h-48" />
                </div>

                <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm mb-4 inline-block">Spiritual Foundation</span>
                        <h2 className="text-3xl md:text-6xl font-bold mb-8">Sarva Dharma Sangama</h2>
                        <p className="text-xl text-blue-100 leading-relaxed mb-10">
                            Our spiritual foundation welcomes all faiths, creating a safe harbour for inner harmony. We believe that spiritual strength is the cornerstone of holistic healing and restoring the broken self.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>
                                Inclusivity beyond religion
                            </li>
                            <li className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>
                                Meditation & Daily Mindfulness
                            </li>
                            <li className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>
                                Universal Love & Service
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-full border-[10px] md:border-[20px] border-white/10 flex items-center justify-center p-6 md:p-8 animate-pulse max-w-[300px] md:max-w-none mx-auto">
                            <div className="w-full h-full rounded-full bg-[#FDB913] flex items-center justify-center text-[#1A6B96] shadow-2xl shadow-[#FDB913]/30 p-8 md:p-0">
                                <Sun size={60} className="md:w-[120px] md:h-[120px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey of Change - Ramesh's Story */}
            <section id="journey" className="py-24 px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-4">Journey of Change</h2>
                        <p className="text-slate-500 font-medium">Real stories of restoration and dignity</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-3xl bg-white border border-slate-100">
                        <div className="p-8 md:p-12 bg-slate-100 flex flex-col justify-center">
                            <div className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">The Darkness (Before)</div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-6">Starting at Rock Bottom</h3>
                            <p className="text-slate-600 italic leading-relaxed text-lg">
                                "Ramesh lived a life lost to chronic addiction. He was completely isolated from his family, facing profound emotional distress and wandering through the shadows without a sense of self."
                            </p>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-slate-300"></div>
                                <div>
                                    <div className="font-bold">Ramesh</div>
                                    <div className="text-xs text-slate-400 lowercase">Year 0</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-[#1A6B96] text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Heart size={120} />
                            </div>
                            <div className="text-[#FDB913] font-bold mb-4 uppercase tracking-widest text-xs font-bold">The Light (After)</div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">Living with Purpose</h3>
                            <p className="text-blue-50 leading-relaxed text-lg">
                                "Today, Ramesh is a beacon of hope. As a mentor for young adults, he lives a life defined by sobriety, dignity, and purpose. He is no longer defined by his past, but by the hearts he heals."
                            </p>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#FDB913] flex items-center justify-center text-[#1A6B96]">
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <div className="font-bold">Mentor Ramesh</div>
                                    <div className="text-xs text-[#FDB913] font-bold">Today</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/journey"
                            className="inline-flex items-center gap-2 text-[#1A6B96] font-bold text-lg hover:underline hover:gap-3 transition-all"
                        >
                            Read more <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Expansion */}
            <section id="services" className="py-24 px-6 bg-[#E8F6FD]">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">Supporting Your Path</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Expert care that focuses on long-term results and internal purpose, rather than just clinical numbers.
                            </p>
                        </div>
                        <a href="/services" className="text-[#1A6B96] font-bold flex items-center gap-2 hover:underline">
                            View All Services <ArrowRight size={20} />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-900/5 group hover:bg-[#1A6B96] transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-[#1A6B96]/5 text-[#1A6B96] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FDB913] group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A6B96] mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-blue-50 transition-colors">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
