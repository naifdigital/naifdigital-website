import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
        { id: 'software', name: 'Software Development' },
        { id: 'brand', name: 'Brand & Design' },
        { id: 'hosting', name: 'Hosting & Optimization' },
        { id: 'growth', name: 'Growth & Visibility' },
        { id: 'content', name: 'Content Creation & Media' },
        { id: 'consulting', name: 'Consulting & Strategy' }
    ];

    const services = [
        {
            id: 1,
            title: 'Enterprise Digital Strategy',
            category: 'digital',
            description: 'Blueprint for transforming businesses using modern digital approaches.',
            icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            features: ['Roadmap Planning', 'Process Automation', 'Change Management'],
            stats: { clients: 120, satisfaction: 98 }
        },
        {
            id: 2,
            title: 'Custom Web & App Development',
            category: 'software',
            description: 'Full-stack development of modern web and mobile applications.',
            icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
            features: ['Frontend & Backend Development', 'Database Architecture', 'API Integration'],
            stats: { clients: 200, satisfaction: 97 }
        },
        {
            id: 3,
            title: 'eCommerce Solutions',
            category: 'software',
            description: 'Robust online store setup and optimization tailored to your brand.',
            icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
            features: ['Custom Store Design', 'Payment Integration', 'Inventory Management'],
            stats: { clients: 85, satisfaction: 96 }
        },
        {
            id: 4,
            title: 'UI/UX & Visual Identity Design',
            category: 'brand',
            description: 'Crafting appealing and functional designs that reflect your brand.',
            icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
            features: ['Logo Design', 'UI/UX Wireframing', 'Style Guides'],
            stats: { clients: 70, satisfaction: 99 }
        },
        {
            id: 5,
            title: 'Performance Hosting & Maintenance',
            category: 'hosting',
            description: 'Blazing-fast hosting paired with expert maintenance and security.',
            icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
            features: ['VPS & Shared Hosting', 'SSL Setup', 'Backup & Recovery'],
            stats: { clients: 95, satisfaction: 97 }
        },
        {
            id: 6,
            title: 'SEO & Web Optimization',
            category: 'hosting',
            description: 'Boost your sites speed, performance, and Google rankings.',
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            features: ['Core Web Vitals Optimization', 'Technical SEO', 'Speed Enhancement'],
            stats: { clients: 100, satisfaction: 96 }
        },
        {
            id: 7,
            title: 'Growth Marketing & Campaigns',
            category: 'growth',
            description: 'Driving measurable results through tailored growth strategies.',
            icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
            features: ['PPC Ads', 'Email Marketing', 'Landing Pages'],
            stats: { clients: 60, satisfaction: 94 }
        },
        {
            id: 8,
            title: 'Content Creation & Short-Form Media',
            category: 'content',
            description: 'High-performing content for social, ads, and branding.',
            icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
            features: ['Video Ads', 'Reels/Shorts/TikToks', 'Copywriting'],
            stats: { clients: 75, satisfaction: 98 }
        },
        {
            id: 9,
            title: 'Digital Consulting & Innovation Strategy',
            category: 'consulting',
            description: 'Helping businesses adopt tech and scale smartly.',
            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            features: ['Tech Stack Advisory', 'Innovation Planning', 'Workshops & Audits'],
            stats: { clients: 50, satisfaction: 95 }
        },
        {
            id: 10,
            title: 'Business Systems & Automation',
            category: 'software',
            description: 'Streamlining operations using custom internal tools and platforms.',
            icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
            features: ['ERP/CRM Development', 'Workflow Automation', 'Dashboards'],
            stats: { clients: 80, satisfaction: 97 }
        },
        {
            id: 11,
            title: 'Cloud Infrastructure & DevOps',
            category: 'hosting',
            description: 'Reliable cloud hosting and CI/CD pipelines for agile delivery.',
            icon: 'M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z',
            features: ['AWS/GCP Setup', 'Docker/Kubernetes', 'CI/CD Deployment'],
            stats: { clients: 65, satisfaction: 96 }
        },
        {
            id: 12,
            title: 'Rebranding & Brand Refresh',
            category: 'brand',
            description: 'Modernizing your brand with strategic and visual alignment.',
            icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
            features: ['Identity Audit', 'Messaging Frameworks', 'New Visuals'],
            stats: { clients: 40, satisfaction: 99 }
        },
        {
            id: 13,
            title: 'Local & International SEO',
            category: 'growth',
            description: 'Getting your business found in the right place by the right audience.',
            icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            features: ['Google Business Optimization', 'Backlink Building', 'Schema Markup'],
            stats: { clients: 105, satisfaction: 95 }
        },
        {
            id: 14,
            title: 'Multilingual Digital Experiences',
            category: 'software',
            description: 'Building apps and websites that speak to a global audience.',
            icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
            features: ['i18n Implementation', 'RTL Support', 'Language Switching Logic'],
            stats: { clients: 30, satisfaction: 98 }
        }
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
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
                                    
                                                        <Link to={service.title}>

                                                            <motion.button
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                                                            >
                                                                Learn More
                                                            </motion.button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover overlay */}

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