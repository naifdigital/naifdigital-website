import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
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

    // Filters data
    const filters = [
        { id: 'all', name: 'All Projects' },
        { id: 'tech', name: 'Technology' },
        { id: 'finance', name: 'Finance' },
        { id: 'healthcare', name: 'Healthcare' },
        { id: 'retail', name: 'Retail' },
        { id: 'education', name: 'Education' },
        { id: 'sustainability', name: 'Sustainability' }
    ];

    // Case studies data
    const caseStudies = [
        {
            id: 1,
            title: 'Global Banking Platform Transformation',
            client: 'Fortune 500 Financial Institution',
            category: 'finance',
            description: 'Complete digital overhaul of core banking systems serving 15M+ customers across 28 countries.',
            results: [
                { metric: '300%', label: 'Faster transaction processing' },
                { metric: '99.99%', label: 'Uptime reliability' },
                { metric: '$120M', label: 'Annual cost savings' }
            ],
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['Digital Transformation', 'Cloud Migration', 'AI Integration'],
            year: 2023,
            duration: '18 months'
        },
        {
            id: 2,
            title: 'AI-Powered Healthcare Diagnostics',
            client: 'Leading Medical Research Center',
            category: 'healthcare',
            description: 'Developed machine learning models that improved diagnostic accuracy for rare diseases by 40%.',
            results: [
                { metric: '92%', label: 'Accuracy rate' },
                { metric: '60%', label: 'Faster diagnosis' },
                { metric: '1.2M', label: 'Patients impacted' }
            ],
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['Artificial Intelligence', 'Medical Tech', 'Data Science'],
            year: 2022,
            duration: '12 months'
        },
        {
            id: 3,
            title: 'Omnichannel Retail Experience',
            client: 'Luxury Fashion Brand',
            category: 'retail',
            description: 'Seamless integration of physical and digital shopping experiences across 3 continents.',
            results: [
                { metric: '45%', label: 'Increase in online sales' },
                { metric: '28%', label: 'Higher customer retention' },
                { metric: '4.9/5.0', label: 'Customer satisfaction' }
            ],
            image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['E-commerce', 'Mobile App', 'AR Experiences'],
            year: 2023,
            duration: '9 months'
        },
        {
            id: 4,
            title: 'Smart City Infrastructure',
            client: 'European Capital City',
            category: 'tech',
            description: 'IoT network deployment optimizing traffic, energy use, and public services for 2M residents.',
            results: [
                { metric: '30%', label: 'Reduced energy consumption' },
                { metric: '25%', label: 'Less traffic congestion' },
                { metric: '400+', label: 'Connected devices' }
            ],
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['IoT', 'Urban Planning', 'Data Analytics'],
            year: 2021,
            duration: '24 months'
        },
        {
            id: 5,
            title: 'Blockchain Supply Chain Solution',
            client: 'Global Logistics Provider',
            category: 'tech',
            description: 'Transparent, secure tracking system for $15B annual shipments across 150 countries.',
            results: [
                { metric: '80%', label: 'Faster customs clearance' },
                { metric: '$75M', label: 'Fraud prevention' },
                { metric: '100%', label: 'Audit compliance' }
            ],
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['Blockchain', 'Supply Chain', 'Smart Contracts'],
            year: 2022,
            duration: '15 months'
        },
        {
            id: 6,
            title: 'Renewable Energy Management Platform',
            client: 'International Energy Consortium',
            category: 'sustainability',
            description: 'Real-time monitoring and optimization for 5GW of renewable energy production.',
            results: [
                { metric: '22%', label: 'Increased efficiency' },
                { metric: '1.2M', label: 'Tons CO2 saved annually' },
                { metric: '99.7%', label: 'Uptime reliability' }
            ],
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['Clean Tech', 'Data Visualization', 'Predictive Analytics'],
            year: 2023,
            duration: '10 months'
        },
        {
            id: 7,
            title: 'EdTech Learning Platform',
            client: 'Top-Tier University Network',
            category: 'education',
            description: 'Personalized learning platform serving 250,000 students with adaptive AI curriculum.',
            results: [
                { metric: '35%', label: 'Improved test scores' },
                { metric: '90%', label: 'Student engagement' },
                { metric: '50+', label: 'Institutions adopted' }
            ],
            image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['EdTech', 'Machine Learning', 'Accessibility'],
            year: 2021,
            duration: '14 months'
        },
        {
            id: 8,
            title: 'Pharmaceutical R&D Acceleration',
            client: 'Biotech Innovator',
            category: 'healthcare',
            description: 'Quantum computing-powered drug discovery platform reducing research timelines by 60%.',
            results: [
                { metric: '3x', label: 'Faster simulations' },
                { metric: '$200M', label: 'R&D cost savings' },
                { metric: '12', label: 'New patents filed' }
            ],
            image: 'https://images.unsplash.com/photo-1579165466749-5650df9d1e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
            tags: ['Quantum Computing', 'Bioinformatics', 'HPC'],
            year: 2023,
            duration: '16 months'
        }
    ];

    // Filter case studies based on category and search query
    const filteredCaseStudies = caseStudies.filter(project => {
        const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.client.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Horizontal scroll for filters on mobile
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
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3cc] to-[#00ccb3]">Impact</span> in Action
                            </h1>
                            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto mb-10">
                                Explore how we've transformed businesses and industries through innovative technology solutions and strategic thinking.
                            </p>
                            <div className="max-w-md mx-auto relative">
                                <input
                                    type="text"
                                    placeholder="Search case studies..."
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

                {/* Filters and view controls */}
                <section className="px-6 mb-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div 
                                ref={scrollContainerRef}
                                onWheel={handleWheel}
                                className="flex-1 overflow-x-auto pb-2 scrollbar-hide"
                            >
                                <div className="flex flex-wrap gap-3">
                                    {filters.map((filter) => (
                                        <motion.button
                                            key={filter.id}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveFilter(filter.id)}
                                            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                                                ? 'bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white shadow-md'
                                                : 'bg-white text-[#4a5568] hover:bg-gray-50 shadow-sm'
                                                }`}
                                        >
                                            {filter.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 bg-white rounded-full p-1 shadow-sm">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${viewMode === 'grid' ? 'bg-[#00b3cc] text-white' : 'text-[#4a5568]'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setViewMode('list')}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${viewMode === 'list' ? 'bg-[#00b3cc] text-white' : 'text-[#4a5568]'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case studies grid/list */}
                <section ref={sectionRef} className="px-6 pb-24">
                    <div className="container mx-auto max-w-6xl">
                        <AnimatePresence>
                            {filteredCaseStudies.length > 0 ? (
                                viewMode === 'grid' ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: sectionInView ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                    >
                                        {filteredCaseStudies.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ y: -5 }}
                                                onHoverStart={() => setHoveredProject(project.id)}
                                                onHoverEnd={() => setHoveredProject(null)}
                                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 relative group"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f7fafc] z-0" />
                                                <div className="relative z-10 h-full flex flex-col">
                                                    <div className="h-48 overflow-hidden">
                                                        <motion.img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover"
                                                            initial={{ scale: 1 }}
                                                            animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                                                            transition={{ duration: 0.5 }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                                    </div>
                                                    <div className="p-6 flex-1 flex flex-col">
                                                        <div className="mb-4">
                                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00b3cc]/10 text-[#00b3cc] mb-2">
                                                                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                                                            </span>
                                                            <h3 className="text-xl font-bold text-[#001F3F] mb-1">{project.title}</h3>
                                                            <p className="text-sm text-gray-500 font-medium">{project.client}</p>
                                                        </div>
                                                        <p className="text-gray-600 mb-6">{project.description}</p>

                                                        <div className="mt-auto">
                                                            <div className="mb-6">
                                                                <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Key Results</h4>
                                                                <div className="grid grid-cols-3 gap-2">
                                                                    {project.results.map((result, i) => (
                                                                        <div key={i} className="text-center">
                                                                            <div className="text-lg font-bold text-[#00b3cc]">{result.metric}</div>
                                                                            <div className="text-xs text-gray-500">{result.label}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.tags.slice(0, 2).map((tag, i) => (
                                                                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                    {project.tags.length > 2 && (
                                                                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                                                            +{project.tags.length - 2}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <Link to={`/case-studies/${project.id}`}>
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.05 }}
                                                                        whileTap={{ scale: 0.95 }}
                                                                        className="bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                                                                    >
                                                                        View Case
                                                                    </motion.button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: sectionInView ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        {filteredCaseStudies.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ y: -2 }}
                                                onHoverStart={() => setHoveredProject(project.id)}
                                                onHoverEnd={() => setHoveredProject(null)}
                                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 relative group"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f7fafc] z-0" />
                                                <div className="relative z-10">
                                                    <div className="flex flex-col md:flex-row">
                                                        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                                                            <motion.img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-full h-full object-cover"
                                                                initial={{ scale: 1 }}
                                                                animate={{ scale: hoveredProject === project.id ? 1.03 : 1 }}
                                                                transition={{ duration: 0.5 }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
                                                        </div>
                                                        <div className="md:w-2/3 p-6 flex flex-col">
                                                            <div className="mb-4">
                                                                <div className="flex justify-between items-start mb-2">
                                                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00b3cc]/10 text-[#00b3cc]">
                                                                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                                                                    </span>
                                                                    <div className="text-xs text-gray-400">
                                                                        {project.year} • {project.duration}
                                                                    </div>
                                                                </div>
                                                                <h3 className="text-2xl font-bold text-[#001F3F] mb-1">{project.title}</h3>
                                                                <p className="text-sm text-gray-500 font-medium">{project.client}</p>
                                                            </div>
                                                            <p className="text-gray-600 mb-6">{project.description}</p>

                                                            <div className="mt-auto">
                                                                <div className="mb-6">
                                                                    <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Key Results</h4>
                                                                    <div className="grid grid-cols-3 gap-4">
                                                                        {project.results.map((result, i) => (
                                                                            <div key={i} className="text-center">
                                                                                <div className="text-xl font-bold text-[#00b3cc]">{result.metric}</div>
                                                                                <div className="text-xs text-gray-500">{result.label}</div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {project.tags.map((tag, i) => (
                                                                            <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                                                                {tag}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                    <Link to={`/case-studies/${project.id}`}>
                                                                        <motion.button
                                                                            whileHover={{ scale: 1.05 }}
                                                                            whileTap={{ scale: 0.95 }}
                                                                            className="bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                                                                        >
                                                                            View Full Case Study
                                                                        </motion.button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-16"
                                >
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="mt-2 text-lg font-medium text-gray-900">No case studies found</h3>
                                    <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>


                {/* CTA section */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">Ready to Create Your Success Story?</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Let's discuss how we can transform your business with our proven approach.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Schedule Consultation
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-2 border-[#00b3cc] text-[#00b3cc] px-8 py-3 rounded-full font-bold hover:bg-[#00b3cc]/10 transition-all"
                                >
                                    View Our Process
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CaseStudiesPage;