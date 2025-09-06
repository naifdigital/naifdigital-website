import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AcademyPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnrolling, setIsEnrolling] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);

    // Intersection observer for animations
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    // Course categories
    const categories = [
        { id: 'all', name: 'All Programs' },
        { id: 'certification', name: 'Certifications' },
        { id: 'bootcamp', name: 'Bootcamps' },
        { id: 'executive', name: 'Executive' },
        { id: 'foundations', name: 'Foundations' }
    ];

    // Comprehensive course data
    const courses = [
        {
            id: 1,
            title: "Full-Stack web Development",
            slug: "full-stack-web-development",
            description: "A hands-on course to build complete web applications using modern full-stack technologies like React, Node.js, and PostgreSQL.",
            longDescription: "This intensive program provides hands-on experience with the latest digital transformation frameworks used by Fortune 500 companies. You'll work on real-world case studies and complete a capstone project that demonstrates your mastery of the subject.",
            category: "certification",
            features: [
                "Live mentorship from naif leaders",
                "project-based learning",
                "different project for each student",
                "Career coaching sessions",
                "feature courses"
            ],
            duration: "16 Weeks",
            level: "Advanced",
            price: "1,500",
            schedule: "Cohort starts in 3 three months",
            thumbnail: "https://ik.imagekit.io/cloudstorageimage/Public/public/fsd-course-banner.jpg?updatedAt=1757180028524",
            videoPreview: "https://youtube.com/embed/example1",
            instructor: {
                name: "Abdulfetah Suudi Hasen",
                title: "Full Stack web and Mobile app developer",
                avatar: "/instructors/dr-chen.jpg",
                bio: "Developed over 10+ real world projects"
            },
            curriculum: [
                {
                    week: 1,
                    title: "Digital Strategy Foundations",
                    topics: ["Digital maturity assessment", "Business model innovation", "Case study: Amazon's digital evolution"]
                },
                {
                    week: 2,
                    title: "Customer-Centric Transformation",
                    topics: ["Journey mapping", "Omnichannel strategy", "Personalization at scale"]
                },
                // More curriculum items...
            ],
            stats: {
                completionRate: "92%",
                salaryIncrease: "45% average",
                satisfaction: "98%"
            }
        },
        {
            id: 2,
            title: "UI/UX Design With Figma",
            slug: "ui-ux-design-with-figma",
            description: "Master user-centered design principles and create beautiful, responsive interfaces using Figma and proven UX strategies.",
            longDescription: "Designed for senior leaders, this program provides the strategic frameworks needed to implement AI solutions while addressing ethical concerns and change management challenges.",
            category: "certification",
            features: [
                "Design Systems & Components",
                "Prototyping & Testing",
                "Real-world UI challenges",
                "1:1 executive coaching",
                "Advanced Exercises and challenges"
            ],
            duration: "8 Weeks",
            level: "Leadership",
            price: "$5,499",
            schedule: "Quarterly cohorts",
            thumbnail: "https://ik.imagekit.io/cloudstorageimage/Public/public/fsd-course-banner.jpg?updatedAt=1757180028524",
            videoPreview: "https://youtube.com/embed/example2",
            instructor: {
                name: "James Wilson",
                title: "Chief AI Officer",
                avatar: "/instructors/james-wilson.jpg",
                bio: "Pioneer in enterprise AI applications with patents in machine learning infrastructure."
            },
            curriculum: [
                {
                    week: 1,
                    title: "AI Strategy Development",
                    topics: ["Assessing AI readiness", "Building business cases", "Investment prioritization"]
                },
                // More curriculum items...
            ],
            stats: {
                completionRate: "89%",
                promotionRate: "63%",
                satisfaction: "96%"
            }
        },
        // Additional courses...
        {
            id: 3,
            title: "Data structures and Algorithms",
            slug: "data-structures-and-algorithms",
            description: "build strong problem-solving skills through structured DSA practice in Python.",
            longDescription: "This intensive program provides hands-on experience with the latest digital transformation frameworks used by Fortune 500 companies. You'll work on real-world case studies and complete a capstone project that demonstrates your mastery of the subject.",
            category: "bootcamp",
            features: [
                "100+ curated problems",
                "core concepts: Array to Graphs",
                "Weekly Live session",
                "Mock Interview"
            ],
            duration: "16 Weeks",
            level: "Advanced",
            price: "1,500",
            schedule: "Cohort starts in 3 three months",
            thumbnail: "https://ik.imagekit.io/cloudstorageimage/Public/public/fsd-course-banner.jpg?updatedAt=1757180028524",
            videoPreview: "https://youtube.com/embed/example1",
            instructor: {
                name: "Abdulfetah Suudi Hasen",
                title: "Full Stack web and Mobile app developer",
                avatar: "/instructors/dr-chen.jpg",
                bio: "Developed over 10+ real world projects"
            },
            curriculum: [
                {
                    week: 1,
                    title: "Digital Strategy Foundations",
                    topics: ["Digital maturity assessment", "Business model innovation", "Case study: Amazon's digital evolution"]
                },
                {
                    week: 2,
                    title: "Customer-Centric Transformation",
                    topics: ["Journey mapping", "Omnichannel strategy", "Personalization at scale"]
                },
                // More curriculum items...
            ],
            stats: {
                completionRate: "92%",
                salaryIncrease: "45% average",
                satisfaction: "98%"
            }
        },
        {
            id: 4,
            title: "Mobile App Development",
            slug: "mobile-app-development",
            description: "Build powerful Android and iOS apps using Flutter and React Native with hands-on real-world projects.",
            longDescription: "This course equips aspiring developers with the skills to build fully functional cross-platform mobile apps. Learn UI design, backend integration, deployment, and app store publishing.",
            category: "certification",
            features: [
                "Flutter & React Native",
                "Firebase & REST APIs",
                "State Management (Provider, Redux)",
                "UI/UX for Mobile",
                "End-to-End App Deployment"
            ],
            duration: "10 Weeks",
            level: "Intermediate",
            price: "$4,299",
            schedule: "Bi-monthly cohorts",
            thumbnail: "https://ik.imagekit.io/cloudstorageimage/Public/public/fsd-course-banner.jpg?updatedAt=1757180028524",
            videoPreview: "https://youtube.com/embed/example-mobile",
            instructor: {
                name: "Amina Yusuf",
                title: "Senior Mobile Developer",
                avatar: "/instructors/amina-yusuf.jpg",
                bio: "Specialist in cross-platform mobile development with 50+ published apps."
            },
            curriculum: [
                {
                    week: 1,
                    title: "Getting Started with Flutter & React Native",
                    topics: ["Environment setup", "Hello World apps", "Widget structure"]
                },
                // Add more weeks...
            ],
            stats: {
                completionRate: "91%",
                promotionRate: "67%",
                satisfaction: "94%"
            }
        },
        {
            id: 5,
            title: "WordPress & SEO Optimization",
            slug: "wordpress-seo-optimization",
            description: "Master the art of building high-performing WordPress sites and boost your online visibility through SEO best practices.",
            longDescription: "This course blends design, development, and optimization for a full-stack WordPress experience. Learn how to create dynamic websites and rank them high on Google using proven SEO strategies.",
            category: "certification",
            features: [
                "Theme & Plugin Customization",
                "On-page & Technical SEO",
                "Speed Optimization",
                "Yoast & RankMath SEO",
                "Real Client Projects"
            ],
            duration: "6 Weeks",
            level: "Beginner to Intermediate",
            price: "$2,999",
            schedule: "Monthly cohorts",
            thumbnail: "https://ik.imagekit.io/cloudstorageimage/Public/public/fsd-course-banner.jpg?updatedAt=1757180028524",
            videoPreview: "https://youtube.com/embed/example-seo",
            instructor: {
                name: "Daniel Kim",
                title: "Web & SEO Strategist",
                avatar: "/instructors/daniel-kim.jpg",
                bio: "Built and ranked 200+ websites across industries with a decade of SEO experience."
            },
            curriculum: [
                {
                    week: 1,
                    title: "Getting Started with WordPress",
                    topics: ["Installation", "Themes & Builders", "Pages & Posts"]
                },
                // Add more weeks...
            ],
            stats: {
                completionRate: "87%",
                promotionRate: "59%",
                satisfaction: "93%"
            }
        },
        {
            id: 6,
            title: "Fundamentals of Programming",
            slug: "fundamentals-of-programming",
            description: "Learn the building blocks of programming through Python and practical logic-based exercises.",
            longDescription: "Perfect for beginners, this course introduces core programming concepts like variables, loops, functions, and problem-solving. Ideal as a foundation for future software development or data science paths.",
            category: "foundations",
            features: [
                "Python Basics",
                "Logic & Control Flow",
                "Functions & OOP Concepts",
                "Debugging Techniques",
                "Practice Problems"
            ],
            duration: "6 Weeks",
            level: "Beginner",
            price: "$1,999",
            schedule: "Open enrollment",
            thumbnail: "https://ik.imagekit.io/cloudstorageimage/Public/public/fsd-course-banner.jpg?updatedAt=1757180028524",
            videoPreview: "https://youtube.com/embed/example-dsa",
            instructor: {
                name: "Sara Teshome",
                title: "Software Engineer & Instructor",
                avatar: "/instructors/sara-teshome.jpg",
                bio: "Passionate educator with 7+ years of teaching programming to absolute beginners."
            },
            curriculum: [
                {
                    week: 1,
                    title: "Intro to Python & Programming Concepts",
                    topics: ["Syntax basics", "Variables & data types", "Input/output"]
                },
                // Add more weeks...
            ],
            stats: {
                completionRate: "92%",
                promotionRate: "61%",
                satisfaction: "95%"
            }
        }



    ];

    // Filter courses based on category
    const filteredCourses = courses.filter(course =>
        activeFilter === 'all' || course.category === activeFilter
    );

    // Handle enrollment submission
    const handleEnroll = (e) => {
        e.preventDefault();
        setIsEnrolling(true);

        // Simulate API call
        setTimeout(() => {
            setIsEnrolling(false);
            setSuccess(true);
            // Reset form after success
            setTimeout(() => {
                setEmail('');
                setName('');
                setSuccess(false);
                setIsModalOpen(false);
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#00C4FF]/5"
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
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-[#00FFC4] text-sm font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#00FFC4] mr-2 animate-pulse"></span>
                                GLOBAL DIGITAL ACADEMY
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">Master</span> the Future of Tech
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                                Industry-leading programs designed by practitioners for the next generation of digital leaders.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Categories filter */}
                <section className="px-6 mb-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category.id
                                        ? 'bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white shadow-md'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-sm'
                                        }`}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses grid */}
                <section ref={ref} className="px-6 pb-24">
                    <div className="container mx-auto max-w-6xl">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredCourses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ y: -5 }}
                                        className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl hover:border-[#00b3cc]/50 transition-all duration-300 relative group"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={course.thumbnail}
                                                alt={course.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#005587]/80 text-[#00C4FF]">
                                                    {course.category.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FFC4] transition-colors">
                                                {course.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4">{course.description}</p>

                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY FEATURES</h4>
                                                <ul className="space-y-2">
                                                    {course.features.slice(0, 3).map((feature, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <svg className="h-4 w-4 text-[#00b3cc] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-300 text-sm">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                                                <div className="text-sm text-gray-400">
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {course.duration}
                                                    </div>
                                                    <div className="flex items-center mt-1">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {course.level}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        setSelectedCourse(course);
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-gray-900 font-medium text-sm hover:shadow-md transition-all"
                                                >
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
                            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                                Join thousands of professionals who've accelerated their careers with our programs.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
                                >
                                    Download Brochure
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Course Detail Modal */}
            <AnimatePresence>
                {isModalOpen && selectedCourse && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 max-w-4xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                                <img
                                    src={selectedCourse.thumbnail}
                                    alt={selectedCourse.title}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="overflow-y-auto flex-1">
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-2/3">
                                            <h2 className="text-3xl font-bold text-white mb-4">{selectedCourse.title}</h2>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#005587]/50 text-[#00C4FF]">
                                                    {selectedCourse.category.toUpperCase()}
                                                </span>
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-700 text-gray-300">
                                                    {selectedCourse.duration}
                                                </span>
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-700 text-gray-300">
                                                    {selectedCourse.level}
                                                </span>
                                            </div>

                                            <div className="prose prose-invert max-w-none mb-8">
                                                <p className="text-gray-300">{selectedCourse.longDescription}</p>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold text-white mb-4">Program Highlights</h3>
                                                <ul className="space-y-3">
                                                    {selectedCourse.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <svg className="h-5 w-5 text-[#00C4FF] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-300">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-xl font-bold text-white mb-4">Curriculum Overview</h3>
                                                <div className="space-y-4">
                                                    {selectedCourse.curriculum.slice(0, 3).map((item, i) => (
                                                        <div key={i} className="bg-gray-700/50 rounded-lg p-4">
                                                            <h4 className="font-medium text-white mb-2">Week {item.week}: {item.title}</h4>
                                                            <ul className="text-sm text-gray-300 space-y-1">
                                                                {item.topics.slice(0, 3).map((topic, j) => (
                                                                    <li key={j} className="flex items-start">
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C4FF] mt-2 mr-2"></span>
                                                                        {topic}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-1/3">
                                            <div className="bg-gray-700/30 rounded-xl p-6 sticky top-8">
                                                <h3 className="text-xl font-bold text-white mb-6">Enrollment Details</h3>

                                                <div className="space-y-4 mb-6">
                                                    <div>
                                                        <p className="text-sm text-gray-400">Program Fee</p>
                                                        <p className="text-2xl font-bold text-white">{selectedCourse.price}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-400">Next Start Date</p>
                                                        <p className="text-lg font-medium text-white">{selectedCourse.schedule}</p>
                                                    </div>
                                                </div>

                                                {success ? (
                                                    <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-6">
                                                        <p>Application submitted successfully!</p>
                                                    </div>
                                                ) : (
                                                    <form onSubmit={handleEnroll} className="space-y-4">
                                                        <div>
                                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4FF] focus:border-transparent"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4FF] focus:border-transparent"
                                                                required
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            disabled={isEnrolling}
                                                            className="w-full bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-gray-900 font-bold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-70"
                                                        >
                                                            {isEnrolling ? 'Processing...' : 'Apply Now'}
                                                        </button>
                                                    </form>
                                                )}

                                                <div className="mt-6 pt-6 border-t border-gray-600">
                                                    <h4 className="text-sm font-medium text-gray-300 mb-3">Program Stats</h4>
                                                    <div className="grid grid-cols-3 gap-2 text-center">
                                                        <div className="bg-gray-700/50 rounded-lg p-2">
                                                            <p className="text-xs text-gray-400">Completion</p>
                                                            <p className="text-lg font-bold text-white">{selectedCourse.stats.completionRate}</p>
                                                        </div>
                                                        <div className="bg-gray-700/50 rounded-lg p-2">
                                                            <p className="text-xs text-gray-400">Satisfaction</p>
                                                            <p className="text-lg font-bold text-white">{selectedCourse.stats.satisfaction}</p>
                                                        </div>
                                                        <div className="bg-gray-700/50 rounded-lg p-2">
                                                            <p className="text-xs text-gray-400">Outcome</p>
                                                            <p className="text-lg font-bold text-white">{selectedCourse.stats.salaryIncrease || selectedCourse.stats.promotionRate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AcademyPage;