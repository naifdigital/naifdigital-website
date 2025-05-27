import { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactPage = () => {
    const [countryCode, setCountryCode] = useState('');
    const [countryName, setCountryName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        interest: '',
        message: ''
    });

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((res) => res.json())
            .then((data) => {
                setCountryCode(`+${data.country_calling_code.replace('+', '')}`);
                setCountryName(data.country_name);
                setFormData(prev => ({ 
                    ...prev, 
                    country: data.country_name,
                    phone: `+${data.country_calling_code.replace('+', '')}`
                }));
                setSelectedCountry(data.country_name);
            })
            .catch((err) => console.error('Geo error:', err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
        setFormData(prev => ({
            ...prev,
            phone: value
        }));
    };

    const globalOffices = [
        {
            city: "Harar City",
            phone: "+251 938 810 259",
            email: "mail@naifdigital.com",
            image: "harar.jpeg"
        },
        {
            city: "Adama City",
            phone: "+251 968 144 761",
            email: "mail@naifdigital.com",
            image: "adama.jpg"
        },
        {
            city: "Dire Dawa City",
            phone: "+251 713 269 849",
            email: "mail@naifdigital.com",
            image: "dire.jpg"
        },
    ];

    const contactFormFields = [
        { id: "name", label: "Full Name", type: "text", required: true },
        { id: "email", label: "Business Email", type: "email", required: true },
        { id: "company", label: "Company", type: "text", required: true },
        { id: "country", label: "Country", type: "text", required: true },
        { id: "interest", label: "Area of Interest", type: "select", options: ["AI Solutions", "Cloud Architecture", "Digital Transformation", "Quantum Computing", "Other"], required: true },
        { id: "message", label: "Project Details", type: "textarea", required: true }
    ];

    const responseTimes = [
        { region: "Americas", time: "< 2 business hours" },
        { region: "EMEA", time: "< 3 business hours" },
        { region: "APAC", time: "< 4 business hours" }
    ];

    return (
        <div className="bg-gray-50 overflow-hidden">
            {/* Hero Section with Interactive Globe */}
            <section className="relative bg-gradient-to-br from-[#001F3F] to-[#003366] py-32 overflow-hidden">
                {/* Animated globe visualization */}
                <div className="absolute inset-0 opacity-20 overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-[#00C4FF]/30 animate-spin-slow">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00FFC4] shadow-lg shadow-[#00FFC4]/50"></div>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#00C4FF] shadow-lg shadow-[#00C4FF]/50"></div>
                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FF00AA] shadow-lg shadow-[#FF00AA]/50"></div>
                                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00FFC4] shadow-lg shadow-[#00FFC4]/50"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">
                                Global
                            </span>{" "}
                            Connections, <br />Local Expertise
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Wherever you are in the world, our engineering teams are ready to collaborate across time zones.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Form - Now takes more space since we removed the cards */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] p-8">
                                <h2 className="text-3xl font-bold text-white">Contact Our Solutions Team</h2>
                                <p className="text-gray-300 mt-2">Complete the form and our specialists will respond promptly</p>
                            </div>

                            <div className="p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {contactFormFields.slice(0, 4).map((field) => (
                                            <div key={field.id} className="space-y-2">
                                                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                                                    {field.label} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                {field.type === 'select' ? (
                                                    <select
                                                        id={field.id}
                                                        name={field.id}
                                                        required={field.required}
                                                        value={formData[field.id] || ''}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                                                    >
                                                        <option value="">Select an option</option>
                                                        {field.options.map((option) => (
                                                            <option key={option} value={option}>{option}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        id={field.id}
                                                        name={field.id}
                                                        required={field.required}
                                                        value={field.id === 'country' ? selectedCountry : formData[field.id]}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Phone Input with International Dialing */}
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <PhoneInput
                                            international
                                            defaultCountry={countryName ? countryName : 'US'}
                                            value={phoneNumber}
                                            onChange={handlePhoneChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                                        />
                                    </div>

                                    {/* Area of Interest */}
                                    <div className="space-y-2">
                                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                                            Area of Interest <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            required
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                                        >
                                            <option value="">Select an area of interest</option>
                                            {contactFormFields.find(f => f.id === 'interest').options.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Project Details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="nda"
                                            name="nda"
                                            type="checkbox"
                                            className="h-4 w-4 text-[#00b3cc] focus:ring-[#00b3cc] border-gray-300 rounded"
                                        />
                                        <label htmlFor="nda" className="ml-2 block text-sm text-gray-700">
                                            I require an NDA before discussing project details
                                        </label>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-4 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-[#001F3F] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all transform hover:-translate-y-0.5"
                                        >
                                            Submit Inquiry
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Response Times */}
                        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Global Response Times</h3>
                            <div className="space-y-4">
                                {responseTimes.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full mr-3 ${index === 0 ? 'bg-[#00C4FF]' :
                                                index === 1 ? 'bg-[#00FFC4]' : 'bg-[#FF00AA]'
                                            }`}></div>
                                        <span className="text-gray-700 font-medium">{item.region}:</span>
                                        <span className="text-gray-600 ml-2">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start">
                                    <svg className="h-5 w-5 text-[#00b3cc] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-600 text-sm">For urgent enterprise support, please call your dedicated account manager or our 24/7 support line.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Global Offices - Now takes less space */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Our <span className="text-[#00b3cc]">Locations</span>
                            </h2>

                            <div className="space-y-8">
                                {globalOffices.map((office, index) => (
                                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={office.image}
                                                alt={office.city}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start mb-4">
                                                <svg className="h-5 w-5 text-[#00b3cc] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-700 hover:text-[#00b3cc] hover:underline">{office.phone}</a>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="h-5 w-5 text-[#00b3cc] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-[#00b3cc] hover:underline">{office.email}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Timezone Info */}
                            <div className="mt-8 bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-4">24/7 Global Coverage</h3>
                                <p className="mb-4">With offices spanning 4 continents, we provide continuous support coverage across all time zones.</p>
                                <div className="flex items-center">
                                    <svg className="h-6 w-6 text-[#00FFC4] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Current time at HQ: <span className="font-mono">{new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' })} PST</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">
                        Need Immediate Assistance?
                    </h2>
                    <p className="text-xl text-[#001F3F]/90 max-w-2xl mx-auto mb-8">
                        Our solution architects are available for real-time consultations via video conference.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-[#001F3F] font-bold rounded-full hover:shadow-lg hover:shadow-white/30 transition-all transform hover:-translate-y-1">
                            Schedule Video Call
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="px-8 py-4 bg-[#001F3F] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#001F3F]/30 transition-all transform hover:-translate-y-1">
                            Join Our Webinar
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Interactive Map (Placeholder) */}

            {/* Animations */}
            <style jsx global>{`
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ContactPage;