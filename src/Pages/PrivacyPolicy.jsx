import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('privacy');
    const [scrolled, setScrolled] = useState(false);
    const [showCookieBanner, setShowCookieBanner] = useState(true);
    const [cookiePreferences, setCookiePreferences] = useState({
        essential: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCookieToggle = (type) => {
        setCookiePreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const saveCookiePreferences = () => {
        localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
        setShowCookieBanner(false);
    };

    return (
        <div className="bg-[#f9fbfd] min-h-screen">
            <Helmet>
                <title>Privacy Policy & Terms of Service | Naif Digital</title>
                <meta name="description" content="Comprehensive legal documentation for Naif Digital's services including Privacy Policy, Terms of Service, and Cookie Policy in compliance with GDPR, CCPA, and global regulations." />
                <meta name="keywords" content="privacy policy, terms of service, cookie policy, data protection, GDPR, CCPA" />
                <link rel="canonical" href="https://www.naifdigital.com/legal" />
            </Helmet>

            {/* Sticky Navigation */}

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#005588] text-white py-28 px-6">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#00C4FF] rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00FFC4] rounded-full filter blur-3xl opacity-20"></div>
                </div>
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">Compliance</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
                        Naif Digital maintains the highest standards of legal compliance across all jurisdictions where we operate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setActiveSection('privacy')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center ${activeSection === 'privacy' ? 'bg-white text-[#001F3F] shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => setActiveSection('terms')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center ${activeSection === 'terms' ? 'bg-white text-[#001F3F] shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            Terms of Service
                        </button>
                        <button
                            onClick={() => setActiveSection('cookies')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center ${activeSection === 'cookies' ? 'bg-white text-[#001F3F] shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Cookie Policy
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 pb-24 max-w-6xl">
                {/* Privacy Policy */}
                {activeSection === 'privacy' && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-8 animate-fade-in">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F]">Privacy Policy</h2>
                            <div className="mt-4 md:mt-0 bg-[#0066CC]/10 text-[#0066CC] px-4 py-2 rounded-full text-sm font-medium">
                                Last Updated: January 1, 2024
                            </div>
                        </div>

                        <p className="mb-8 text-gray-700 leading-relaxed">
                            Naif Digital ("we," "us," or "our") operates in full compliance with the <strong>General Data Protection Regulation (GDPR)</strong>, <strong>California Consumer Privacy Act (CCPA)</strong>, and other global data protection frameworks. This policy outlines our practices regarding the collection, use, and disclosure of your information when you use our services.
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">1. Information Collection Practices</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    We collect various types of information to provide and improve our services to you:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Personal Identification Data</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>Full name and contact details (email, phone)</li>
                                            <li>Professional information (company, job title)</li>
                                            <li>Billing and payment information</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Technical & Usage Data</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>IP addresses and device identifiers</li>
                                            <li>Browser type and version</li>
                                            <li>Pages visited and time spent</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    We employ <strong>data minimization principles</strong>, collecting only what is necessary for specified purposes. All data collection is performed with appropriate legal bases including consent, contractual necessity, and legitimate interests.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">2. Data Utilization Framework</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white rounded-lg overflow-hidden mb-6">
                                        <thead className="bg-[#0066CC] text-white">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Purpose</th>
                                                <th className="py-3 px-4 text-left">Data Type</th>
                                                <th className="py-3 px-4 text-left">Legal Basis</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="py-3 px-4">Service Provision</td>
                                                <td className="py-3 px-4">Personal, Technical</td>
                                                <td className="py-3 px-4">Contractual Necessity</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">Security Monitoring</td>
                                                <td className="py-3 px-4">Technical, Usage</td>
                                                <td className="py-3 px-4">Legitimate Interest</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">Product Improvement</td>
                                                <td className="py-3 px-4">Usage, Analytics</td>
                                                <td className="py-3 px-4">Consent</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We implement <strong>purpose limitation</strong>, ensuring data is not processed in ways incompatible with the original collection purposes without additional consent.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">3. Data Protection & Third-Party Sharing</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Naif Digital maintains enterprise-grade security measures:
                                </p>
                                <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
                                    <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                                    <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                                    <li><strong>Audits:</strong> Regular penetration testing and SOC 2 Type II compliance</li>
                                </ul>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Data may be shared with:
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0] flex items-center">
                                        <div className="bg-[#0066CC]/10 p-3 rounded-full mr-4">
                                            <svg className="w-6 h-6 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#001F3F]">Cloud Providers</h4>
                                            <p className="text-sm text-gray-600">AWS, Google Cloud with DPA agreements</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0] flex items-center">
                                        <div className="bg-[#0066CC]/10 p-3 rounded-full mr-4">
                                            <svg className="w-6 h-6 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#001F3F]">Analytics</h4>
                                            <p className="text-sm text-gray-600">Google Analytics with IP anonymization</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0] flex items-center">
                                        <div className="bg-[#0066CC]/10 p-3 rounded-full mr-4">
                                            <svg className="w-6 h-6 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#001F3F]">Legal Authorities</h4>
                                            <p className="text-sm text-gray-600">When required by law with proper due process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">4. Your Data Subject Rights</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Under various data protection laws, you may exercise the following rights:
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    {[
                                        { title: "Access", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", desc: "Request copies of your data" },
                                        { title: "Rectification", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", desc: "Correct inaccurate information" },
                                        { title: "Erasure", icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16", desc: "Request deletion under certain conditions" },
                                        { title: "Portability", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", desc: "Receive your data in machine-readable format" }
                                    ].map((right, index) => (
                                        <div key={index} className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0] hover:border-[#0066CC]/50 transition-colors">
                                            <div className="bg-[#0066CC]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                                                <svg className="w-6 h-6 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={right.icon}></path>
                                                </svg>
                                            </div>
                                            <h4 className="font-bold text-lg text-[#001F3F] mb-1">{right.title}</h4>
                                            <p className="text-sm text-gray-600">{right.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    To exercise these rights or for any privacy-related inquiries, please contact our Data Protection Officer at <a href="mailto:dpo@naifdigital.com" className="text-[#0066CC] hover:underline font-medium">dpo@naifdigital.com</a>. We respond to all legitimate requests within <strong>30 calendar days</strong> as required by GDPR.
                                </p>
                            </div>

                            <div className="bg-[#0066CC]/5 p-6 rounded-xl border border-[#0066CC]/20">
                                <h4 className="font-bold text-xl text-[#001F3F] mb-3">Policy Updates</h4>
                                <p className="text-gray-700 mb-3 leading-relaxed">
                                    We may update this policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated through our website or directly to users when required by law.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Version Control:</strong> This document follows semantic versioning (v1.2.4). Previous versions are archived and available upon request.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Terms of Service */}
                {activeSection === 'terms' && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-8 animate-fade-in">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F]">Terms of Service</h2>
                            <div className="mt-4 md:mt-0 bg-[#0066CC]/10 text-[#0066CC] px-4 py-2 rounded-full text-sm font-medium">
                                Effective: January 1, 2024
                            </div>
                        </div>

                        <div className="bg-[#f8fafc] border-l-4 border-[#0066CC] p-4 mb-8">
                            <p className="text-gray-700 italic">
                                <strong>Notice:</strong> These Terms of Service constitute a legally binding agreement between you ("User") and Naif Digital. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">1. Service Agreement</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    These Terms govern your access to and use of Naif Digital's software-as-a-service platform, including all related websites, APIs, and mobile applications (collectively, the "Service").
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Eligibility</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>You must be at least 18 years old</li>
                                            <li>Corporate users must have proper authority</li>
                                            <li>Compliance with all applicable laws</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Account Responsibility</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                            <li>Maintain confidentiality of credentials</li>
                                            <li>Promptly notify us of unauthorized access</li>
                                            <li>Provide accurate registration information</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">2. Acceptable Use Policy</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    The Service may not be used for any illegal or unauthorized purpose. You agree to comply with all applicable laws, rules and regulations in your use of the Service.
                                </p>
                                <div className="bg-[#fff5f5] border-l-4 border-[#dc2626] p-4 mb-6">
                                    <h4 className="font-bold text-lg mb-2 text-[#dc2626]">Prohibited Activities</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                        <li>Reverse engineering or decompiling our software</li>
                                        <li>Bypassing any security or access controls</li>
                                        <li>Transmitting malware or engaging in phishing</li>
                                        <li>Spamming or unauthorized advertising</li>
                                        <li>Violating third-party intellectual property rights</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">3. Intellectual Property Rights</h3>
                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div className="flex-1 bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Our Ownership</h4>
                                        <p className="text-gray-700 mb-3">
                                            Naif Digital retains all rights, title, and interest in and to the Service, including all software, patents, copyrights, trademarks, and other intellectual property.
                                        </p>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                            All rights reserved unless expressly granted
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Your Content</h4>
                                        <p className="text-gray-700 mb-3">
                                            You retain ownership of any content you submit through the Service, granting us a worldwide license to use it for service provision.
                                        </p>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                            </svg>
                                            Subject to our Privacy Policy
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">4. Payment & Billing</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                        <thead className="bg-[#0066CC] text-white">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Plan Type</th>
                                                <th className="py-3 px-4 text-left">Billing Cycle</th>
                                                <th className="py-3 px-4 text-left">Payment Terms</th>
                                                <th className="py-3 px-4 text-left">Cancellation</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="py-3 px-4">Monthly</td>
                                                <td className="py-3 px-4">Recurring monthly</td>
                                                <td className="py-3 px-4">Credit card required</td>
                                                <td className="py-3 px-4">Anytime, prorated</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">Annual</td>
                                                <td className="py-3 px-4">Recurring yearly</td>
                                                <td className="py-3 px-4">Invoice available</td>
                                                <td className="py-3 px-4">30-day notice</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">Enterprise</td>
                                                <td className="py-3 px-4">Custom</td>
                                                <td className="py-3 px-4">Net 30 terms</td>
                                                <td className="py-3 px-4">Contract terms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    All fees are exclusive of taxes. You're responsible for any sales, VAT, GST, or other taxes associated with your use of the Service. Late payments may incur 1.5% monthly interest or maximum allowable by law.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">5. Liability & Dispute Resolution</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Limitation of Liability</h4>
                                        <p className="text-gray-700 mb-3">
                                            To the maximum extent permitted by law, Naif Digital shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
                                        </p>
                                        <div className="text-sm text-gray-600">
                                            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                            </svg>
                                            Cap: 12 months of service fees or $10,000, whichever is less
                                        </div>
                                    </div>
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Dispute Resolution</h4>
                                        <p className="text-gray-700 mb-3">
                                            Any disputes shall be resolved through binding arbitration in Dubai International Financial Centre (DIFC) under DIFC-LCIA Arbitration Rules.
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                            <li>Arbitration shall be conducted in English</li>
                                            <li>Each party bears own attorney fees</li>
                                            <li>No class action claims permitted</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f0f9ff] p-6 rounded-xl border border-[#0066CC]/20">
                                <h4 className="font-bold text-xl text-[#001F3F] mb-3">Modification of Terms</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through the Service interface at least 30 days prior to taking effect. Your continued use after changes constitutes acceptance.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cookie Policy */}
                {activeSection === 'cookies' && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-8 animate-fade-in">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F]">Cookie Policy</h2>
                            <div className="mt-4 md:mt-0 bg-[#0066CC]/10 text-[#0066CC] px-4 py-2 rounded-full text-sm font-medium">
                                Last Reviewed: January 1, 2024
                            </div>
                        </div>

                        <p className="mb-8 text-gray-700 leading-relaxed">
                            This Cookie Policy explains how Naif Digital uses cookies and similar tracking technologies when you visit our websites or use our services. This policy supplements our Privacy Policy and should be read in conjunction with it.
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">1. Understanding Cookies</h3>
                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div className="flex-1 bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-[#0066CC]/10 p-2 rounded-full mr-3">
                                                <svg className="w-5 h-5 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h4 className="font-bold text-lg text-[#001F3F]">What Are Cookies?</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            Cookies are small text files placed on your device when you visit websites. They help the site remember information about your visit, enabling enhanced functionality and personalization.
                                        </p>
                                    </div>
                                    <div className="flex-1 bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-[#0066CC]/10 p-2 rounded-full mr-3">
                                                <svg className="w-5 h-5 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                                </svg>
                                            </div>
                                            <h4 className="font-bold text-lg text-[#001F3F]">Other Tracking Technologies</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            We also use web beacons, pixels, and local storage for similar purposes. These technologies collectively help us provide a better user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">2. Cookie Categories</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                        <thead className="bg-[#0066CC] text-white">
                                            <tr>
                                                <th className="py-3 px-4 text-left">Category</th>
                                                <th className="py-3 px-4 text-left">Purpose</th>
                                                <th className="py-3 px-4 text-left">Examples</th>
                                                <th className="py-3 px-4 text-left">Consent Required</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="py-3 px-4 font-medium">Essential</td>
                                                <td className="py-3 px-4">Core functionality</td>
                                                <td className="py-3 px-4">Session cookies, authentication</td>
                                                <td className="py-3 px-4">No</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-medium">Performance</td>
                                                <td className="py-3 px-4">Analytics & improvement</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Yes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-medium">Functional</td>
                                                <td className="py-3 px-4">Enhanced features</td>
                                                <td className="py-3 px-4">Language preferences</td>
                                                <td className="py-3 px-4">Yes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-medium">Targeting</td>
                                                <td className="py-3 px-4">Advertising</td>
                                                <td className="py-3 px-4">Facebook Pixel</td>
                                                <td className="py-3 px-4">Yes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-[#0066CC] border-b border-[#0066CC]/20 pb-2">3. Managing Preferences</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Browser Controls</h4>
                                        <p className="text-gray-700 mb-3">
                                            Most browsers allow you to control cookies through their settings. Typically, you can find these controls under "Options" or "Preferences" menus.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-sm bg-[#0066CC]/10 text-[#0066CC] px-3 py-1 rounded hover:bg-[#0066CC]/20 transition-colors">
                                                Chrome
                                            </a>
                                            <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-sm bg-[#0066CC]/10 text-[#0066CC] px-3 py-1 rounded hover:bg-[#0066CC]/20 transition-colors">
                                                Firefox
                                            </a>
                                            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-sm bg-[#0066CC]/10 text-[#0066CC] px-3 py-1 rounded hover:bg-[#0066CC]/20 transition-colors">
                                                Safari
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#e2e8f0]">
                                        <h4 className="font-bold text-lg mb-3 text-[#001F3F]">Our Consent Manager</h4>
                                        <p className="text-gray-700 mb-3">
                                            We provide granular control through our cookie consent tool. Click below to update your preferences at any time:
                                        </p>
                                        <button
                                            onClick={() => setShowCookieBanner(true)}
                                            className="bg-[#0066CC] text-white px-4 py-2 rounded hover:bg-[#0055AA] transition-colors text-sm"
                                        >
                                            Update Cookie Preferences
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Note that disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic operations.
                                </p>
                            </div>

                            <div className="bg-[#f0f9ff] p-6 rounded-xl border border-[#0066CC]/20">
                                <h4 className="font-bold text-xl text-[#001F3F] mb-3">Policy Updates</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    We regularly review our cookie usage and may update this policy accordingly. Significant changes will be communicated through our website or via email when required by law.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Legal & Compliance Team</h3>
                        <p className="text-lg mb-8 opacity-90 leading-relaxed">
                            For privacy requests, legal inquiries, or to exercise your data subject rights, our dedicated team is available to assist you.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h4 className="font-bold mb-1">General Inquiries</h4>
                                <a href="mailto:legal@naifdigital.com" className="text-[#00C4FF] hover:underline">legal@naifdigital.com</a>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <h4 className="font-bold mb-1">Data Protection</h4>
                                <a href="mailto:dpo@naifdigital.com" className="text-[#00C4FF] hover:underline">dpo@naifdigital.com</a>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <h4 className="font-bold mb-1">Compliance Hotline</h4>
                                <a href="tel:+97144234567" className="text-[#00C4FF] hover:underline">+971 4 423 4567</a>
                            </div>
                        </div>
                        <p className="text-sm opacity-80">
                            Typical response time: 1-2 business days. For urgent matters, please call our hotline.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cookie Consent Banner */}
            {showCookieBanner && (
                <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 p-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="mb-4 md:mb-0 md:mr-8">
                                <h3 className="text-lg font-bold text-[#001F3F] mb-2">Cookie Preferences</h3>
                                <p className="text-gray-700">
                                    We use cookies to enhance your experience. Choose which categories you agree to.
                                </p>
                            </div>
                            <div className="w-full md:w-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="essential"
                                            checked={cookiePreferences.essential}
                                            disabled
                                            className="mr-2 rounded text-[#0066CC] focus:ring-[#0066CC]"
                                        />
                                        <label htmlFor="essential" className="font-medium">Essential</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="analytics"
                                            checked={cookiePreferences.analytics}
                                            onChange={() => handleCookieToggle('analytics')}
                                            className="mr-2 rounded text-[#0066CC] focus:ring-[#0066CC]"
                                        />
                                        <label htmlFor="analytics" className="font-medium">Analytics</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="functional"
                                            checked={cookiePreferences.functional}
                                            onChange={() => handleCookieToggle('functional')}
                                            className="mr-2 rounded text-[#0066CC] focus:ring-[#0066CC]"
                                        />
                                        <label htmlFor="functional" className="font-medium">Functional</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="marketing"
                                            checked={cookiePreferences.marketing}
                                            onChange={() => handleCookieToggle('marketing')}
                                            className="mr-2 rounded text-[#0066CC] focus:ring-[#0066CC]"
                                        />
                                        <label htmlFor="marketing" className="font-medium">Marketing</label>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={saveCookiePreferences}
                                        className="bg-[#0066CC] text-white px-6 py-2 rounded hover:bg-[#0055AA] transition-colors"
                                    >
                                        Save Preferences
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCookiePreferences({
                                                essential: true,
                                                analytics: true,
                                                functional: true,
                                                marketing: true
                                            });
                                            saveCookiePreferences();
                                        }}
                                        className="bg-white border border-[#0066CC] text-[#0066CC] px-6 py-2 rounded hover:bg-[#0066CC]/10 transition-colors"
                                    >
                                        Accept All
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCookiePreferences({
                                                essential: true,
                                                analytics: false,
                                                functional: false,
                                                marketing: false
                                            });
                                            saveCookiePreferences();
                                        }}
                                        className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
                                    >
                                        Reject Non-Essential
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}

            {/* Global Styles */}
            <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
        </div>
    );
};

export default PrivacyPolicy;