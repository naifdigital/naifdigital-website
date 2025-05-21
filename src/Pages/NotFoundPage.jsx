const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00b3cc]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#005587]/5 rounded-full blur-3xl animate-float-delay"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Animated number */}
        <div className="relative">
          <span className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00b3cc]/20 to-[#005587]/10 tracking-tighter leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00b3cc] to-[#005587] animate-pulse-slow tracking-tighter leading-none">
              404
            </span>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-6">
          Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3cc] to-[#005587]">Not Found</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          The cosmic object you're searching for has escaped our event horizon. 
          Try rewinding your query or beam back to home base.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 bg-gradient-to-r from-[#00b3cc] to-[#005587] text-white font-medium rounded-full hover:shadow-xl hover:shadow-[#00b3cc]/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            New Search
          </button>
          
          <button className="px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-50/50 hover:border-[#00b3cc]/30 transition-all flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </button>
        </div>
        
        {/* Search bar suggestion */}
        <div className="mt-12 w-full max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-full bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-[#00b3cc] focus:border-transparent placeholder-gray-400 transition-all"
            placeholder="Try 'astronaut' or 'satellite'..."
            autoFocus
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-500 rounded-md">esc</span>
          </div>
        </div>
      </div>
      
      {/* Footer note */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-sm text-gray-400">
          Still lost in space? <button className="text-[#00b3cc] hover:underline">Contact support</button>
        </p>
      </div>
    </div>
  );
};
  export default NotFoundPage;