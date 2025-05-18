import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredService, setHoveredService] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollContainerRef = useRef(null);

    // Intersection Observer for animations
    const [sectionRef, sectionInView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    // Scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Categories and services data
    const categories = [
        { id: 'all', name: 'All Solutions' },
        { id: 'digital', name: 'Digital Transformation' },
        { id: 'cloud', name: 'Cloud Solutions' },
        { id: 'ai', name: 'AI & Analytics' },
        { id: 'security', name: 'Cyber Security' },
        { id: 'iot', name: 'IoT Solutions' },
    ];

    const services = [
        {
            id: 1,
            title: 'Enterprise Digital Strategy',
            category: 'digital',
            description: 'Comprehensive roadmap for digital transformation aligned with business objectives.',
            icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            features: ['Strategy Development', 'Process Automation', 'Change Management'],
            stats: { clients: 120, satisfaction: 98 }
        },
        {
            id: 2,
            title: 'Cloud Migration Services',
            category: 'cloud',
            description: 'Seamless transition to cloud infrastructure with minimal downtime.',
            icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
            features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Hybrid Cloud Solutions'],
            stats: { clients: 85, satisfaction: 97 }
        },
        {
            id: 3,
            title: 'AI-Powered Analytics',
            category: 'ai',
            description: 'Leverage machine learning to uncover insights and drive decision making.',
            icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
            features: ['Predictive Modeling', 'Natural Language Processing', 'Real-time Analytics'],
            stats: { clients: 65, satisfaction: 96 }
        },
        {
            id: 4,
            title: 'Advanced Threat Protection',
            category: 'security',
            description: 'Enterprise-grade security solutions to protect your digital assets.',
            icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            features: ['Threat Detection', 'Incident Response', 'Compliance Management'],
            stats: { clients: 110, satisfaction: 99 }
        },
        {
            id: 5,
            title: 'Smart IoT Infrastructure',
            category: 'iot',
            description: 'End-to-end IoT solutions for connected devices and smart systems.',
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            features: ['Device Management', 'Data Integration', 'Edge Computing'],
            stats: { clients: 45, satisfaction: 95 }
        },
        {
            id: 6,
            title: 'Customer Experience Platform',
            category: 'digital',
            description: 'Omnichannel solutions to enhance customer engagement and satisfaction.',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
            features: ['CRM Integration', 'Personalization Engines', 'Journey Analytics'],
            stats: { clients: 75, satisfaction: 97 }
        },
    ];

    // Filter services based on category and search query
    const filteredServices = services.filter(service => {
        const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Horizontal scroll for categories on mobile
    const handleWheel = (e) => {
        if (scrollContainerRef.current) {
            if (e.deltaY !== 0) {
                scrollContainerRef.current.scrollLeft += e.deltaY;
                e.preventDefault();
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
            {/* Animated floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#00b3cc]/10"
                        initial={{
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            opacity: 0.1
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25, 0],
                            y: [0, Math.random() * 50 - 25, 0],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>
            <main className="relative z-10">
                {/* Hero section */}
                <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
                    <div className="container mx-auto max-w-6xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F3F] mb-6">
                                Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3cc] to-[#00ccb3]">Digital Solutions</span>
                            </h1>
                            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto mb-10">
                                Enterprise-grade technology solutions designed to drive innovation, efficiency, and growth for global businesses.
                            </p>
                            <div className="max-w-md mx-auto relative">
                                <input
                                    type="text"
                                    placeholder="Search solutions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-full py-3 px-6 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b3cc] focus:border-transparent"
                                />
                                <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Categories */}
                <section className="px-6 mb-12">
                    <div
                        ref={scrollContainerRef}
                        onWheel={handleWheel}
                        className="container mx-auto max-w-6xl overflow-x-auto pb-4 scrollbar-hide"
                    >
                        <div className="flex space-x-4 w-max md:w-full">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                            ? 'bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white shadow-md'
                                            : 'bg-white text-[#4a5568] hover:bg-gray-50 shadow-sm'
                                        }`}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services grid */}
                <section ref={sectionRef} className="px-6 pb-24">
                    <div className="container mx-auto max-w-6xl">
                        <AnimatePresence>
                            {filteredServices.length > 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: sectionInView ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {filteredServices.map((service) => (
                                        <motion.div
                                            key={service.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5 }}
                                            whileHover={{ y: -5 }}
                                            onHoverStart={() => setHoveredService(service.id)}
                                            onHoverEnd={() => setHoveredService(null)}
                                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f7fafc] z-0" />
                                            <div className="relative z-10 p-6 h-full flex flex-col">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] flex items-center justify-center mr-4">
                                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-[#001F3F]">{service.title}</h3>
                                                </div>
                                                <p className="text-gray-600 mb-6">{service.description}</p>

                                                <div className="mt-auto">
                                                    <div className="mb-6">
                                                        <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY FEATURES</h4>
                                                        <ul className="space-y-1">
                                                            {service.features.map((feature, i) => (
                                                                <li key={i} className="flex items-center">
                                                                    <svg className="w-4 h-4 text-[#00b3cc] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                    <span className="text-gray-700">{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                        <div className="flex space-x-4">
                                                            <div className="text-center">
                                                                <div className="font-bold text-[#00b3cc]">{service.stats.clients}+</div>
                                                                <div className="text-xs text-gray-500">Clients</div>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className="font-bold text-[#00b3cc]">{service.stats.satisfaction}%</div>
                                                                <div className="text-xs text-gray-500">Satisfaction</div>
                                                            </div>
                                                        </div>
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all"
                                                        >
                                                            Learn More
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover overlay */}
                                            <AnimatePresence>
                                                {hoveredService === service.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="absolute inset-0 bg-gradient-to-br from-[#00b3cc]/90 to-[#00ccb3]/90 flex items-center justify-center"
                                                    >
                                                        <motion.div
                                                            initial={{ scale: 0.8 }}
                                                            animate={{ scale: 1 }}
                                                            className="text-white text-center p-6"
                                                        >
                                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                                            <p className="mb-4">{service.description}</p>
                                                            <motion.button
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="bg-white text-[#00b3cc] px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all"
                                                            >
                                                                Explore Solution
                                                            </motion.button>
                                                        </motion.div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-16"
                                >
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="mt-2 text-lg font-medium text-gray-900">No solutions found</h3>
                                    <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* CTA section */}
                <section className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-16 px-6">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                                Our experts are standing by to help you navigate your digital transformation journey.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#00b3cc] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Schedule Consultation
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
                                >
                                    Contact Sales
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServicesPage;