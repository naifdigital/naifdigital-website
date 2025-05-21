const LowServices = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-xl shadow-2xl">
          {/* Service 1 */}
          <div className="p-10 bg-[#00b3cc] group relative overflow-hidden transition-all duration-500 hover:bg-[#0099b3]">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Web & App Development</h3>
              <p className="text-white/90 mb-6">Custom, high-performance websites and applications built with modern technologies.</p>
              <div className="flex items-center text-white font-medium">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
          </div>

          {/* Service 2 */}
          <div className="p-10 bg-[#007a8a] group relative overflow-hidden transition-all duration-500 hover:bg-[#006a7a]">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Brand Design</h3>
              <p className="text-white/90 mb-6">
              Strategic visual identities that elevate brands and leave lasting impressions.              </p>
              <div className="flex items-center text-white font-medium">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
          </div>

          {/* Service 3 */}
          <div className="p-10 bg-[#00b3cc] group relative overflow-hidden transition-all duration-500 hover:bg-[#0099b3]">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Hosting & Optimization</h3>
              <p className="text-white/90 mb-6">
              Fast, secure, and fully-optimized websites with reliable uptime and SEO essentials.              </p>
              <div className="flex items-center text-white font-medium">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
          </div>

          {/* Service 4 */}
          <div className="p-10 bg-[#007a8a] group relative overflow-hidden transition-all duration-500 hover:bg-[#006a7a]">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Growth Marketing & Visual Content</h3>
              <p className="text-white/90 mb-6">
              Data-driven marketing and standout content designed to grow your audience and impact.              </p>
              <div className="flex items-center text-white font-medium">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 group-hover:w-60 group-hover:h-60 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LowServices