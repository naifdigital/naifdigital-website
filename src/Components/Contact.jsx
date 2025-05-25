const ContactSection = () => {
    return (
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#00C4FF]/5 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-lg bg-[#00FFC4]/5 rotate-45 animate-float-delay"></div>
          <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full bg-[#005587]/5 animate-float-delay-2"></div>
        </div>
  
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iNDAiIHN0cm9rZT0iIzAwNTU4NyIgc3Ryb2tlLXdpZHRoPSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')"}}></div>
        </div>
  
        <div className="container mx-auto px-6 relative z-10">
          {/* Logo and header */}
          <div className="flex flex-col items-center mb-16">
            <div className="mb-8">
              {/* Replace with your actual logo */}
              <div className="w-24 h-24 rounded-xl flex items-center justify-center">
                <img src="naifdigital-logo-without-frame.png" alt="" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3cc] to-[#005587]">Transform</span> Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl text-center">
              Our global team is ready to architect your digital future. Reach out for a consultation.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact form */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                        placeholder="John Smith"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                        placeholder="john@company.com"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all appearance-none"
                    >
                      <option>Select a service</option>
                      <option>Enterprise Software</option>
                      <option>Digital Transformation</option>
                      <option>AI Solutions</option>
                      <option>Cloud Architecture</option>
                      <option>Executive Training</option>
                    </select>
                  </div>
  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00b3cc] focus:border-[#00b3cc] transition-all"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-[#00b3cc] focus:ring-[#00b3cc] border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the privacy policy and terms of service
                    </label>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#00b3cc] to-[#005587] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#00b3cc]/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </form>
              </div>
  
              {/* Contact info */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Headquarters</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#00b3cc]/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#00b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Location</h4>
                        <p>Ethiopia</p>
                        <ul>
                          {[
                           "Adama", "Harar", "Dire Dawa"
                          ].map((place)=>(
                          <li className="">{place}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
  
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#00b3cc]/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#00b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Contact</h4>
                        <p className="text-gray-600">
                          <a href="tel:+11234567890" className="hover:text-[#00b3cc] transition-colors">+251938810259</a><br />
                          <a href="mailto:info@naifdigital.com" className="hover:text-[#00b3cc] transition-colors">info@naifdigital.com</a>
                        </p>
                      </div>
                    </div>
  
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#00b3cc]/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#00b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Hours</h4>
                        <p className="text-gray-600">
                          Monday - Saturday: 24 Hours<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
  
                  {/* <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Global Offices</h4>
                    <div className="flex flex-wrap gap-3">
                      {['London', 'Dubai', 'Singapore', 'Tokyo', 'New York'].map((city) => (
                        <span key={city} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-800">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-delay {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes float-delay-2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
          .animate-float-delay-2 { animation: float-delay-2 12s ease-in-out infinite; }
        `}</style>
      </section>
    );
  };

export default ContactSection