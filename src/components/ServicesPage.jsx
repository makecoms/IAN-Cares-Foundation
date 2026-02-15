import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ServicesHero from './ServicesHero';
import HowWeServe from './HowWeServe';
import ServicesSection from './ServicesSection';
import PostRecovery from './PostRecovery';
import ConsultancyModal from './ConsultancyModal';
import ServiceDetailModal from './ServiceDetailModal';

const ServicesPage = () => {
    const [isConsultancyModalOpen, setIsConsultancyModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleExplore = () => {
        document.getElementById('detailed-services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDetailedExplore = () => {
        document.getElementById('detailed-services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const openConsultancyModal = () => {
        setIsConsultancyModalOpen(true);
    };

    const openDetailModal = (service) => {
        setSelectedService(service);
        setIsDetailModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#E8F6FD] font-sans">
            <Navbar />

            <ServicesHero
                onExplore={handleExplore}
                onBook={openConsultancyModal}
            />

            <HowWeServe
                onExplore={handleDetailedExplore}
            />

            <PostRecovery />

            <ServicesSection
                onReadMore={openDetailModal}
                onBook={openConsultancyModal}
            />

            <Footer />

            <ConsultancyModal
                isOpen={isConsultancyModalOpen}
                onClose={() => setIsConsultancyModalOpen(false)}
            />

            <ServiceDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                service={selectedService}
            />
        </div>
    );
};

export default ServicesPage;
