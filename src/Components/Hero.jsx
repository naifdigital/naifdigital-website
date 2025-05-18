import { useEffect, useState } from 'react';

const Hero = () => {
  // Background media (videos and images)
  const backgroundMedia =[
    {
      type: 'video',
      src: 'Unveiling Mereb Technology PLC.mp4',
      title: "Global Digital Excellence",
      subtitle: "Your Transformation Ally",
      description: "We partner with visionary enterprises to drive comprehensive digital transformation across 25+ countries. From strategy to execution, we empower businesses with innovative technologies, agile methodologies, and future-proof solutions tailored to global ambitions. Experience excellence that transcends borders."
    },
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Enterprise-Grade Innovation",
      subtitle: "Scalable Software for a Boundless Future",
      description: "Our platforms are built to scale—seamlessly powering startups to Fortune 500 companies. We craft enterprise-grade software solutions that are robust, secure, and intelligently designed to support complex workflows, cross-border operations, and exponential growth in today’s hyper-connected world."
    },
    {
      type: 'video',
      src: 'Neil Patel - NP Digital.mp4',
      title: "Intelligent Growth Engines",
      subtitle: "Precision Marketing Powered by Data",
      description: "Our marketing strategies are deeply rooted in data science, behavioral analytics, and proven performance models. We don’t just boost traffic—we engineer sustainable growth with campaigns tailored for maximum conversion, long-term brand authority, and measurable return on investment in any industry."
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
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundMedia.length]);

  // Service boxes data
  const services = [
    {
      title: "Efficient",
      description: "Optimized processes for maximum productivity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Fast",
      description: "Rapid deployment with agile methodologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Reliable",
      description: "99.9% uptime with robust infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Affordable",
      description: "Competitive pricing with transparent costs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white bg-cover bg-center"
                    style={{ backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg)` }}
                  ></div>
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by 500+ clients worldwide
              </span>
            </div>
          </div>

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

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
            <button className="relative overflow-hidden group bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#00b3cc]/30 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10">Explore Our Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00b3cc] to-[#00ccb3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>

            <button className="flex items-center space-x-2 bg-transparent border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 group">
              <span>Schedule Consultation</span>
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
      `}</style>
    </section>
  );
};

export default Hero;