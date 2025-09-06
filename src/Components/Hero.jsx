import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const HireTeamPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm text-black overflow-y-auto">
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-2xl mx-auto my-8 overflow-hidden border border-gray-200 animate-popup"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10 cursor-pointer"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Gradient header */}
        <div className="bg-gradient-to-r from-[#00b3cc] to-[#005587] p-4 md:p-6 text-white">
          <div className="flex flex-col xs:flex-row items-center space-y-3 xs:space-y-0 xs:space-x-3 md:space-x-4 mb-3 md:mb-4">
            <img
              src="/logo-white.png"
              alt="Naif Digital"
              className="h-8 md:h-18 w-auto object-contain"
            />
            <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#aad8e6] text-center xs:text-left">
              Hire Our Team
            </h2>
          </div>
          <p className="text-sm md:text-base opacity-90">Complete this form and our solutions architect will contact you within 24 hours</p>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6 md:p-8">
          <form className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (International Format)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                  placeholder="+1 (___) ___-____"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed*</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
              >
                <option value="">Select a service</option>
                <option>Custom Software Development</option>
                <option>Digital Transformation</option>
                <option>AI/ML Solutions</option>
                <option>Cloud Migration</option>
                <option>Dedicated Development Team</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details*</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                placeholder="Tell us about your project goals, timeline, and budget..."
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                id="nda"
                name="nda"
                type="checkbox"
                className="h-4 w-4 text-[#00b3cc] focus:ring-[#00b3cc] border-gray-300 rounded mt-1"
              />
              <label htmlFor="nda" className="ml-2 block text-xs sm:text-sm text-gray-600">
                We require an NDA before discussing project details
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-[#00b3cc] to-[#005587] text-white font-medium md:font-bold rounded-lg hover:shadow-lg hover:shadow-[#00b3cc]/30 transition-all transform hover:-translate-y-0.5 md:hover:-translate-y-1 text-sm md:text-base"
            >
              Request Team Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  // Background media (videos and images)
  const [showHirePopup, setShowHirePopup] = useState(false);
  const backgroundMedia = [
    {
      type: 'video',
      src: 'https://ik.imagekit.io/cloudstorageimage/Public/public/unveiling%20naif%20digital%20intro.mp4?updatedAt=1757180078467',
      title: "Software Development",
      subtitle: "& Digital Growth Partner",
      description: "We build modern, scalable software for businesses ready to grow. From idea to launch, we bring full-stack solutions that deliver real results."
    },
    {
      type: 'video',
      src: "https://ik.imagekit.io/cloudstorageimage/Public/public/k49yf6ar4gbmkcbusw7y.mp4?updatedAt=1757180158699",
      title: "Smart Systems",
      subtitle: "Built for Scale and Security",
      description: "We create reliable platforms and tools for growing teams. Every system is designed to be fast, secure, and ready for the future."
    },
    {
      type: 'video',
      src: 'https://ik.imagekit.io/cloudstorageimage/Public/public/k49yf6ar4gbmkcbusw7y.mp4?updatedAt=1757180158699',
      title: "Performance Marketing",
      subtitle: "Growth That Converts",
      description: "We help brands grow with data-driven campaigns. Our approach focuses on real impact—more traffic, better leads, and lasting reach."
    }
  ];




  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundMedia.length);
        setIsTransitioning(false);
      }, 1000); // Matches CSS transition duration
    }, 10000);

    return () => clearInterval(interval);
  }, [backgroundMedia.length]);

  // Service boxes data
  const services = [
    {
      title: "Lightning-Fast Development",
      description: "We build your project in record time without compromising quality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Effortless Scaling",
      description: "Grow from startup to enterprise seamlessly with our architecture",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
    },
    {
      title: "Simple Websites",
      description: "Beautiful, functional sites that get straight to the point",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Complex Systems",
      description: "Custom solutions for intricate business needs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden text-white min-h-screen">
      {/* Background media carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundMedia.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {media.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${media.src})` }}
              ></div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/80 to-[#001F3F]/60"></div>
          </div>
        ))}
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-[#00b3cc] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float1"></div>
          <div className="absolute top-1/2 right-20 w-96 h-96 bg-[#00b3cc] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float2"></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[#00b3cc] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float3"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center min-h-screen">
        <div className="pt-24 pb-12 lg:pb-16 w-full lg:w-2/3">
          {/* Trust badge - centered */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-4 py-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_4px_rgba(34,211,238,0.6)]" />
            <span className="text-sm tracking-wide text-white/80">
              Trusted by leading startups & global brands
            </span>
          </div>
        </motion.div>


          {/* Animated title - shifted left */}
          <div className="relative h-40 mb-4 overflow-hidden">
            {backgroundMedia.map((media, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3cc] to-[#00ccb3]">
                    {media.title}
                  </span><br />
                  {media.subtitle}
                </h1>
              </div>
            ))}
          </div>

          {/* Animated description - shifted left */}
          <div className="relative h-20 mb-6 overflow-hidden">
            {backgroundMedia.map((media, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <p className="text-lg lg:text-xl max-w-2xl leading-relaxed opacity-90">
                  {media.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
            {/* Primary CTA — Goes to all-solutions page */}
            <a href="/all-solutions">
              <button className="relative overflow-hidden group bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#00b3cc]/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <span className="relative z-10">Discover All Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </button>
            </a>

            {/* Secondary CTA — Replaces consultation */}
            <button
              onClick={() => setShowHirePopup(true)}
              className="flex items-center space-x-2 bg-transparent border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 group cursor-pointer"
            >
              <span>Hire Naif Team</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Services boxes - moved up with less margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 -mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00b3cc]/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,179,204,0.2)]"
            >
              <div className="text-[#00b3cc] mb-3 group-hover:text-[#00ccb3] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-1.5">{service.title}</h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {backgroundMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#00b3cc] w-6' : 'bg-white/30'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, 15px) rotate(-1deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(1deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes popup {
  from { 
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-popup {
  animation: popup 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
    @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
      `}</style>
      <HireTeamPopup isOpen={showHirePopup} onClose={() => setShowHirePopup(false)} />
    </section>
  );
};

export default Hero;