import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const PostRecovery = () => {
    return (
        <section className="py-12 md:py-20 px-6 bg-slate-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Heart size={400} className="text-white absolute -top-20 -right-20" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">Post-Recovery Care</h2>
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10">
                            Our commitment doesn't end with recovery. We provide continuous mentorship and community engagement to prevent relapse and encourage purposeful living.
                        </p>
                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm">
                            <p className="text-white font-medium text-base md:text-lg italic">
                                "Recovery is a journey, not a destination. We walk with you every step of the way, even after the initial healing is done."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                            <img
                                src="/images/hands.png"
                                alt="Supportive Hands"
                                className="w-full h-full object-cover aspect-video"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PostRecovery;
