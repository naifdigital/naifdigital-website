const Services = () => {
  const services = [
    {
      title: "Enterprise Software Development",
      description: "Custom scalable solutions for global businesses with 99.9% uptime SLA and multi-region deployment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      stats: "200+ deployed systems",
      features: ["Microservices architecture", "CI/CD pipelines", "Global deployment"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end modernization of business processes with AI integration and cloud-native solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      stats: "45% avg. efficiency gain",
      features: ["Process automation", "Legacy system modernization", "Change management"]
    },
    {
      title: "Data & AI Solutions",
      description: "Turn your data into actionable insights with machine learning models and predictive analytics.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      stats: "3.2x ROI average",
      features: ["Predictive modeling", "Natural language processing", "Real-time analytics"]
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Global connection dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')"}}></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-[#00C4FF] opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-[#00FFC4] opacity-15 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-[#005587] opacity-10 animate-float3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-[#005587] text-sm font-medium mb-6 shadow-sm border border-gray-100">
            <span className="w-2 h-2 rounded-full bg-[#00FFC4] mr-2"></span>
            Global Digital Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005587] to-[#00C4FF]">Enterprise-Grade</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver world-class digital solutions to Fortune 500 companies and high-growth startups across 25+ countries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00C4FF]/20"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] rounded-t-xl"></div>
              
              {/* Animated icon background */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#00C4FF]/5 group-hover:bg-[#00C4FF]/10 transition-all duration-500 transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="text-[#005587] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#005587] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-[#005587] mb-2">
                    {service.stats}
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]" 
                      style={{width: `${Math.min(100, 30 + index * 35)}%`}}
                    ></div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#00C4FF] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 inline-flex items-center text-sm font-medium text-[#005587] group-hover:text-[#003366] transition-colors">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Global client logos */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm mb-8">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 hover:opacity-100 transition-opacity">
            {[
              'gena-logo.png',
              'lds-logo.png',
              'maamta-logo.png',
              'vnp-logo.png',
              'orostore-logo.png'
            ].map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt="Client logo"
                className="h-8  hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Services;