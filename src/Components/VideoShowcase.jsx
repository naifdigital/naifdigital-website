import React, { useRef, useEffect, useState } from 'react';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    {
      title: "Global Digital Transformation",
      description: "See how we're reshaping enterprises across 35+ countries",
      videoUrl: "Unveiling Mereb Technology PLC.mp4",
      stats: [
        { value: "200+", label: "Enterprises" },
        { value: "3.5x", label: "Average ROI" }
      ]
    },
    {
      title: "AI-Powered Solutions",
      description: "Discover our cutting-edge technology implementations",
      videoUrl: "Neil Patel - NP Digital.mp4",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "10M+", label: "Predictions" }
      ]
    }
  ];

  useEffect(() => {
    // Autoplay the active video when it changes
    if (videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].play();
    }
    
    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideo) {
        video.pause();
      }
    });
  }, [activeVideo]);

  const handleVideoClick = (index) => {
    setActiveVideo(index);
  };

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-[#00FFC4]/10 text-[#005587] text-sm font-medium rounded-full mb-6 border border-[#005587]/20">
            OUR WORK IN MOTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#005587]">Experience</span> Our Global Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interactive showcase of our transformative digital solutions
          </p>
        </div>

        {/* Video showcase container */}
        <div className="relative h-[600px] max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index}
              className={`absolute transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${index === activeVideo 
                ? 'w-full h-full z-10 shadow-2xl inset-0' 
                : 'w-[90%] h-[85%] -top-10 -left-10 z-0 shadow-xl'}`}
              onClick={() => handleVideoClick(index)}
            >
              {/* Video card */}
              <div className={`relative h-full w-full rounded-2xl overflow-hidden ${index === activeVideo ? 'border-2 border-[#00C4FF]' : ''}`}>
                {/* Video element */}
                <video
                  ref={el => videoRefs.current[index] = el}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay content */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-end transition-opacity ${index === activeVideo ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{video.title}</h3>
                      <p className="text-gray-300 mt-2">{video.description}</p>
                    </div>
                    <div className="flex space-x-6">
                      {video.stats.map((stat, i) => (
                        <div key={i} className="text-right">
                          <div className="text-2xl font-bold text-[#00FFC4]">{stat.value}</div>
                          <div className="text-xs text-gray-300 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Play/pause controls (always visible) */}
                <div className="absolute bottom-4 left-4 flex space-x-3">
                  <button 
                    className="p-2 bg-black/50 rounded-full text-white hover:text-[#00C4FF] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      videoRefs.current[index].paused 
                        ? videoRefs.current[index].play() 
                        : videoRefs.current[index].pause();
                    }}
                  >
                    {videoRefs.current[index]?.paused ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>
                  <button 
                    className="p-2 bg-black/50 rounded-full text-white hover:text-[#00C4FF] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      videoRefs.current[index].muted = !videoRefs.current[index].muted;
                    }}
                  >
                    {videoRefs.current[index]?.muted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video selector indicators */}
        <div className="flex justify-center mt-8 space-x-4">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === activeVideo ? 'bg-[#005587] scale-125' : 'bg-gray-300'}`}
              onClick={() => handleVideoClick(index)}
              aria-label={`Show video ${index + 1}`}
            />
          ))}
        </div>

        {/* Global indicators */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Global Enterprises</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {['Fortune 500', 'UN Agencies', 'Tech Unicorns', 'Global Banks'].map((client) => (
                <div key={client} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-[#00FFC4] mr-2"></div>
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;