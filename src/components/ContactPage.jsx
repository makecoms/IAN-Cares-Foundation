import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactSection from './ContactSection';
import SocialSection from './SocialSection';
import ConsultancyModal from './ConsultancyModal';

const ContactPage = () => {
    const [isConsultancyModalOpen, setIsConsultancyModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Contact Hero */}
            <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-white to-[#E8F6FD]">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#FDB913]/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#1A6B96]/20 rounded-full -translate-x-1/2 translate-y-1/2"></div>




                <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-[#1A6B96]/10 text-[#1A6B96] px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 inline-block">
                            Always Here For You
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-[#1A6B96] leading-tight mb-8">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            We are here to guide you toward healing and hope. Reach out today for a second chance at life.
                        </p>
                        <button
                            onClick={() => setIsConsultancyModalOpen(true)}
                            className="bg-[#FDB913] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:bg-[#e5a811] transition-all transform hover:scale-105"
                        >
                            Book a Consult
                        </button>
                    </motion.div>
                </div>
            </section>

            <ContactSection />
            <SocialSection />
            <Footer />

            <ConsultancyModal
                isOpen={isConsultancyModalOpen}
                onClose={() => setIsConsultancyModalOpen(false)}
            />
        </div>
    );
};

export default ContactPage;
