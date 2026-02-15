import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Sparkles, GraduationCap } from 'lucide-react';

const ServicesSection = ({ onReadMore, onBook }) => {
    const detailedServices = [
        {
            id: 1,
            icon: <Brain size={26} />,
            title: 'Addiction Recovery',
            description: 'Personalized de-addiction programs combining medical supervision, counselling, and faith-based motivation.',
            longDescription: 'Our addiction recovery program is built on the foundation of medical safety and spiritual strength. We provide a structured environment that helps individuals break free from substance abuse and rebuild their lives with dignity.',
            features: ['24/7 Medical Supervision', 'Daily Counselling Sessions', 'Faith-Based Motivation', 'Peer Support Community']
        },
        {
            id: 2,
            icon: <Heart size={26} />,
            title: 'Depression & Anxiety Support',
            description: 'Professional therapy sessions and emotional wellness programs to overcome mental distress and regain balance.',
            longDescription: 'We offer a compassionate approach to mental health, focusing on the root causes of depression and anxiety. Our therapists work one-on-one with individuals to develop coping mechanisms and emotional resilience.',
            features: ['One-on-One Therapy', 'Group Support Circles', 'Anxiety Management Workshops', 'Family Integration']
        },
        {
            id: 3,
            icon: <Users size={26} />,
            title: 'Family & Relationship Therapy',
            description: 'Guided conversations to rebuild trust and communication within families affected by addiction or stress.',
            longDescription: 'Addiction and mental health challenges affect the whole family. Our family therapy sessions provide a safe space for open communication, healing past wounds, and rebuilding essential trust.',
            features: ['Mediation Services', 'Communication Workshops', 'Family Support Groups', 'Relationship Counselling']
        },
        {
            id: 4,
            icon: <Sparkles size={26} />,
            title: 'Holistic Healing',
            description: 'Yoga, meditation, and lifestyle sessions designed to relax the mind, strengthen the body, and uplift the spirit.',
            longDescription: 'True healing happens when the mind, body, and spirit are in harmony. Our holistic programs integrate ancient wisdom with modern wellness practices for a complete recovery experience.',
            features: ['Yoga & Pranayama', 'Daily Meditation', 'Nutritional Guidance', 'Lifestyle Coaching']
        },
        {
            id: 5,
            icon: <GraduationCap size={26} />,
            title: 'Youth Empowerment',
            description: 'Workshops in schools and colleges to raise awareness about substance abuse, mental health, and self-care.',
            longDescription: 'Prevention is just as important as recovery. We engage with young adults in educational institutions to provide them with the knowledge and tools they need to make healthy life choices.',
            features: ['Substance Abuse Awareness', 'Self-Care Workshops', 'Mental Health Advocacy', 'Purpose Discovery']
        }
    ];

    return (
        <section id="detailed-services" className="py-16 md:py-24 px-6 bg-[#E8F6FD]">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-[#1A6B96] mb-6">We Serve The Problem</h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Our healing programs combine professional expertise with personalized care, supporting individuals through mental health challenges, emotional recovery, and personal growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedServices.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 group border-2 border-transparent hover:border-[#1A6B96]/20 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-[#1A6B96]/5 text-[#1A6B96] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FDB913] group-hover:text-white transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1A6B96] mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="space-y-4 pt-6 border-t border-slate-50">
                                <button
                                    onClick={() => onReadMore(service)}
                                    className="w-full py-4 rounded-xl border-2 border-[#1A6B96]/10 text-[#1A6B96] font-bold hover:bg-[#1A6B96] hover:text-white transition-all"
                                >
                                    Read More
                                </button>
                                <button
                                    onClick={() => onBook(service.title)}
                                    className="w-full py-4 rounded-xl bg-[#FDB913] text-white font-bold shadow-lg shadow-[#FDB913]/20 hover:bg-[#e5a811] transition-all"
                                >
                                    Book a Consultation
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
