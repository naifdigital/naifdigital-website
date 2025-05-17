const Approach = () => {
    const phases = [
      {
        title: "Discovery & Strategy",
        description: "Deep dive analysis to understand your business objectives, challenges, and digital maturity.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        stats: "200+ hours of research",
        features: ["Stakeholder interviews", "Market analysis", "Competitive audit"]
      },
      {
        title: "Solution Architecture",
        description: "Designing scalable systems with future-proof technology stacks and integration points.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        stats: "50+ technology partners",
        features: ["System mapping", "Tech stack selection", "Security architecture"]
      },
      {
        title: "Agile Development",
        description: "Iterative delivery with continuous integration and automated quality assurance.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
        stats: "2-week sprints",
        features: ["Scrum methodology", "CI/CD pipelines", "Automated testing"]
      },
      {
        title: "Global Deployment",
        description: "Worldwide rollout with localized compliance and multi-region infrastructure.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        stats: "25+ countries",
        features: ["Multi-cloud strategy", "Local compliance", "Disaster recovery"]
      }
    ];
  
    return (
      <section className="relative py-28 bg-gray-900 overflow-hidden">
        {/* Animated globe visualization */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
            <circle cx="400" cy="400" r="350" stroke="#00C4FF" strokeWidth="1" strokeDasharray="2 4"/>
            <path d="M400 50V750M50 400H750" stroke="#00FFC4" strokeWidth="1" strokeDasharray="3 3"/>
            {[...Array(12)].map((_, i) => (
              <path 
                key={i}
                d={`M400,400 L${400 + 350 * Math.cos(i * Math.PI/6)},${400 + 350 * Math.sin(i * Math.PI/6)}`} 
                stroke="#FFFFFF" 
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
            ))}
            <circle cx="400" cy="400" r="50" fill="#005587" fillOpacity="0.3"/>
          </svg>
        </div>
        
        {/* Floating connection lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-0 left-0 w-full h-full"
              // style={{
              //   backgroundImage: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(0,196,255,0.1) 0%, transparent 70%)`
              // }}
            ></div>
          ))}
        </div>
  
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-[#00FFC4] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFC4] mr-2 animate-pulse"></span>
              Global Delivery Framework
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">Proven Approach</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A methodology refined through hundreds of international engagements with Fortune 500 companies and high-growth startups.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#00C4FF] via-[#00FFC4] to-[#005587] transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative group ${index % 2 === 0 ? 'md:text-right md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'} md:w-1/2 md:mx-auto ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} w-4 h-4 rounded-full bg-[#00FFC4] border-4 border-gray-900 z-10`}></div>
                  
                  <div className={`bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-[#00C4FF]/50 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-start">
                      {index % 2 !== 0 && (
                        <div className="mr-6 text-[#00C4FF] hidden md:block">
                          {phase.icon}
                        </div>
                      )}
                      
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="flex items-center md:justify-end">
                          {index % 2 === 0 && (
                            <div className="mr-4 text-[#00C4FF] md:hidden">
                              {phase.icon}
                            </div>
                          )}
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {phase.title}
                          </h3>
                          {index % 2 === 0 && (
                            <div className="ml-4 text-[#00C4FF] hidden md:block">
                              {phase.icon}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-300 mb-4">
                          {phase.description}
                        </p>
                        
                        <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700 text-sm text-[#00FFC4]">
                            {phase.stats}
                          </div>
                        </div>
                        
                        <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          {phase.features.map((feature, i) => (
                            <li key={i} className="text-gray-400">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Global metrics */}
          <div className="mt-24 grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Client Retention" },
              { value: "4.9/5", label: "Avg. Client Rating" },
              { value: "25+", label: "Countries Served" },
              { value: "24/7", label: "Global Support" }
            ].map((metric, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00FFC4]/30 transition-all">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Approach;