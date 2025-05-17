const Testimonials = () => {
    const testimonials = [
      {
        quote: "Naif Digital transformed our digital infrastructure with precision and innovative thinking. Their global perspective gave us competitive advantage.",
        author: "Sarah Johnson",
        role: "CTO, Fortune 500 Retail",
        avatar: "/avatars/executive-woman.jpg",
        rating: 5,
        animationDelay: "100ms"
      },
      {
        quote: "The Academy program elevated our team's skills beyond expectations. We're now implementing strategies we learned within weeks.",
        author: "Michael Chen",
        role: "Director of Technology, Unicorn Startup",
        avatar: "/avatars/asian-executive.jpg",
        rating: 5,
        animationDelay: "200ms"
      },
      {
        quote: "Working with their consultants was like gaining an elite digital special forces unit. They delivered 3x ROI in the first quarter.",
        author: "David Müller",
        role: "CEO, European Fintech",
        avatar: "/avatars/german-executive.jpg",
        rating: 5,
        animationDelay: "300ms"
      }
    ];
  
    return (
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSI0MCIgc3Ryb2tlPSIjMDA1NTg3IiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iMCIgc3Ryb2tlPSIjMDA1NTg3IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        {/* Floating testimonial cards background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute hidden lg:block"
              style={{
                top: `${20 + i * 20}%`,
                left: `${5 + i * 10}%`,
                width: '200px',
                height: '120px',
                background: 'rgba(0,196,255,0.03)',
                borderRadius: '20px',
                transform: 'rotate(15deg)',
                animation: `float-testimonial 15s ease-in-out infinite`,
                animationDelay: `${i * 3}s`
              }}
            ></div>
          ))}
        </div>
  
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-[#005587] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFC4] mr-2"></span>
              GLOBAL RECOGNITION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005587] to-[#00C4FF]">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from executives who've transformed their businesses with our global digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={testimonial.animationDelay}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
                
                <div className="relative h-full bg-white p-8 rounded-xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#00C4FF]/30" 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Company logo hover effect */}
                  <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#005587"/>
                      <path d="M12 28L28 12M28 28L12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Animated trust indicators */}
          <div className="mt-24 flex flex-col items-center">
            <div className="mb-8 text-sm text-gray-500 uppercase tracking-wider">AS SEEN IN</div>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {['Forbes', 'TechCrunch', 'Bloomberg', 'Wired', 'Harvard Business Review'].map((publication, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="text-2xl font-bold text-gray-300 group-hover:text-gray-900 transition-all duration-500">
                    {publication}
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <style jsx global>{`
          @keyframes float-testimonial {
            0%, 100% { transform: translateY(0) rotate(15deg); }
            50% { transform: translateY(-20px) rotate(20deg); }
          }
        `}</style>
      </section>
    );
  };

export default Testimonials