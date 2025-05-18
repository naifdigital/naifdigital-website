const NotFoundPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#001F3F] to-[#003366] overflow-hidden relative">
  
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#00C4FF]/20 to-[#00FFC4]/20"
              style={{
                width: `${10 + Math.random() * 100}px`,
                height: `${10 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(20px)',
                animation: `float ${15 + Math.random() * 20}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
  
        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center">
          {/* Animated Logo/Brand Mark */}
          <div className="relative mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] opacity-20 blur-xl animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center ">
            <img src="naifdigital-logo-without-frame.png" alt="" />
            </div>
          </div>
  
          {/* 404 Text */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] mb-4">
              404
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] rounded-full"></div>
          </div>
  
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quantum Link Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            The digital coordinates you've entered don't match our multi-dimensional servers.
            The page may have been moved or doesn't exist in this universe.
          </p>
  
          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-[#001F3F] font-bold rounded-full hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all transform hover:-translate-y-1 flex items-center"
            >
              Return to Home Dimension
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#00FFC4] text-white font-bold rounded-full hover:bg-[#00FFC4]/10 transition-all transform hover:-translate-y-1 flex items-center"
            >
              Contact Quantum Support
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
  
          {/* Tech Specs Easter Egg */}
          <div className="mt-16 p-4 bg-[#001F3F]/50 rounded-lg border border-[#00C4FF]/20">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-[#00FFC4] font-mono text-sm">ERROR_CODE</div>
                <div className="text-white font-mono">404.QUANTUM_NOT_FOUND</div>
              </div>
              <div className="h-8 w-px bg-[#00C4FF]/50"></div>
              <div className="text-center">
                <div className="text-[#00FFC4] font-mono text-sm">COORDINATES</div>
                <div className="text-white font-mono">{window.location.pathname}</div>
              </div>
              <div className="h-8 w-px bg-[#00C4FF]/50"></div>
              <div className="text-center">
                <div className="text-[#00FFC4] font-mono text-sm">TIMESTAMP</div>
                <div className="text-white font-mono">{new Date().toISOString()}</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Animations */}
        <style jsx global>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(50px, 50px) rotate(180deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          @keyframes draw {
            to { stroke-dashoffset: 0; }
          }
          .animate-draw {
            animation: draw 1.5s ease-out forwards;
          }
        `}</style>
      </div>
    );
  };
  
  export default NotFoundPage;