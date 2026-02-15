import React from 'react';
import { Heart, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="pt-16 md:pt-20 pb-10 px-6 bg-slate-900 text-white rounded-t-[30px] md:rounded-t-[50px]">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 mb-20">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-8">
                        <img
                            src="/images/logo.png"
                            alt="Ian Cares Foundation Logo"
                            className="h-12 md:h-16 w-auto object-contain"
                        />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-white">IAN CARES</span>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed mb-10">
                        A peer-supported rehabilitation community dedicated to restorative healing and long-term sobriety. We walk with you toward a second chance.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all">
                                <Phone size={22} />
                            </div>
                            <div>
                                <div className="text-slate-400 text-sm">Emergency Support</div>
                                <div className="font-bold text-lg">+91 87500 75006</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all">
                                <Phone size={22} />
                            </div>
                            <div>
                                <div className="text-slate-400 text-sm">Office Enquiries</div>
                                <div className="font-bold text-lg">+91 97402 96297</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7 grid sm:grid-cols-2 gap-8 md:gap-10 bg-slate-800/50 p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-slate-700">
                    <div>
                        <h4 className="text-[#FDB913] font-bold mb-6 text-lg uppercase tracking-widest">Our Home</h4>
                        <a
                            href="https://maps.app.goo.gl/jfwsMhEVGwTU9kcX6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 group cursor-pointer"
                        >
                            <MapPin className="text-[#FDB913] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                            <address className="not-italic text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors">
                                Quila, Kinnigoli Town Panchayat,<br />
                                Dakshina Kannada Dist.,<br />
                                Karnataka, 574150
                                <span className="block text-[#FDB913] text-sm mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click for directions →</span>
                            </address>
                        </a>
                    </div>
                    <div>
                        <h4 className="text-[#FDB913] font-bold mb-6 text-lg uppercase tracking-widest">Write To Us</h4>
                        <div className="flex items-center gap-4">
                            <Mail className="text-[#FDB913] shrink-0" />
                            <span className="text-slate-300 text-base">iancaresfoundation@gmail.com</span>
                        </div>
                        <div className="mt-8">
                            <button className="w-full bg-[#1A6B96] text-white py-4 rounded-2xl font-bold hover:bg-[#155a82] transition-all">
                                Send a Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Ian Cares Foundation. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
