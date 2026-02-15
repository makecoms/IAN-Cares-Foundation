import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Phone, User, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const ConsultancyModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        mode: '',
        concern: '',
        agreed: false
    });

    const services = [
        'Addiction Recovery',
        'Depression & Anxiety Support',
        'Family & Relationship Therapy',
        'Holistic Healing',
        'Youth Empowerment',
        'Individual & Group Counselling',
        'Residential Recovery Program',
        'Faith-Integrated Healing',
        'Nutritional & Lifestyle Guidance',
        'Meditation & Mindfulness Practice',
        'Emotional Wellness Coaching'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
        alert('Thank you! Our team will contact you shortly.');
        onClose();
    };

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
                        className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#1A6B96] transition-all z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-6 md:p-12 overflow-y-auto max-h-[90vh]">
                            <div className="text-center mb-8 md:mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-[#1A6B96] mb-4">Book a Consultancy</h2>
                                <p className="text-slate-500 max-w-md mx-auto">
                                    Fill in a few details and our team will contact you to schedule the consultation.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A6B96] transition-colors" size={20} />
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-[#1A6B96] focus:bg-white outline-none transition-all text-slate-700"
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 group-focus-within:text-[#1A6B96] transition-colors">+91</div>
                                            <input
                                                type="tel"
                                                required
                                                pattern="[0-9]{10}"
                                                placeholder="9876543210"
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-16 pr-4 focus:border-[#1A6B96] focus:bg-white outline-none transition-all text-slate-700"
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A6B96] transition-colors" size={20} />
                                        <input
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-[#1A6B96] focus:bg-white outline-none transition-all text-slate-700"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Select Service</label>
                                        <div className="relative group">
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A6B96] pointer-events-none" size={20} />
                                            <select
                                                required
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-4 pr-12 focus:border-[#1A6B96] focus:bg-white outline-none transition-all text-slate-700 appearance-none"
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            >
                                                <option value="">Choose a service</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                                        <div className="relative group">
                                            <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1A6B96] transition-colors" size={20} />
                                            <input
                                                type="date"
                                                required
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-[#1A6B96] focus:bg-white outline-none transition-all text-slate-700"
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Mode</label>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {['In person at center', 'Online / Video Call'].map((m) => (
                                            <button
                                                key={m}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, mode: m })}
                                                className={`flex-1 py-4 rounded-2xl border-2 transition-all font-medium ${formData.mode === m ? 'border-[#1A6B96] bg-[#1A6B96]/5 text-[#1A6B96]' : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                            >
                                                {m}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Briefly describe your concern</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-4 text-slate-400 group-focus-within:text-[#1A6B96] transition-colors" size={20} />
                                        <textarea
                                            placeholder="Tell us a bit about what you are looking for..."
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:border-[#1A6B96] focus:bg-white outline-none transition-all text-slate-700 h-32 resize-none"
                                            onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center ${formData.agreed ? 'bg-[#1A6B96] border-[#1A6B96]' : 'border-slate-200 bg-slate-50 group-hover:border-[#1A6B96]'}`}>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            required
                                            onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                                        />
                                        {formData.agreed && <X className="text-white rotate-45" size={16} />}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">I agree to be contacted by Ian Cares Foundation.</span>
                                </label>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1A6B96] text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#155a82] transform transition-all active:scale-95 flex items-center justify-center gap-3 hover:shadow-[#1A6B96]/20"
                                >
                                    Book Appointment
                                </button>

                                <p className="text-xs text-center text-slate-400">
                                    We respect your privacy — your details will only be used to arrange this consultation.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConsultancyModal;
