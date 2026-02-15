import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const ServiceDetailModal = ({ isOpen, onClose, service }) => {
    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#1A6B96] transition-all z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-6 md:p-12">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1A6B96]/10 text-[#1A6B96] rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                                {service.icon}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-[#1A6B96] mb-4">{service.title}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {service.longDescription || service.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {service.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#FDB913] mt-1 shrink-0" size={20} />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full bg-[#1A6B96] text-white py-4 rounded-2xl font-bold hover:bg-[#155a82] transition-all shadow-lg active:scale-95"
                            >
                                Close Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceDetailModal;
