import React from 'react';

const Leadership = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      title: "CEO & Founder",
      bio: "Visionary leader with 15+ years in digital transformation, driving Naif Digital's global strategy.",
      image: "https://storage.googleapis.com/a2sv_hub_bucket_2/images%2FAdnan.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      stats: [
        { value: "35+", label: "Countries" },
        { value: "200+", label: "Team Members" },
        { value: "500%", label: "Growth" }
      ]
    },
    {
      name: "Marcus Wright",
      title: "CTO",
      bio: "Tech innovator specializing in AI-driven enterprise solutions and scalable architectures.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3w5MTMyfDB8MHxzZWFyY2h8NXx8Y2VvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "#",
        github: "#"
      },
      stats: [
        { value: "50+", label: "Projects" },
        { value: "99.9%", label: "Uptime" },
        { value: "10M+", label: "Users" }
      ]
    },
    {
      name: "Sophia Rodriguez",
      title: "CDO",
      bio: "Digital strategy expert transforming businesses through data-driven marketing solutions.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3w5MTMyfDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "#",
        instagram: "#"
      },
      stats: [
        { value: "3.2x", label: "ROI" },
        { value: "80%", label: "Engagement" },
        { value: "1B+", label: "Impressions" }
      ]
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#001F3F] to-[#003366] overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#00C4FF]/10"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#00FFC4]/10 text-[#00FFC4] text-sm font-medium rounded-full mb-6 border border-[#00FFC4]/30">
            LEADERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">Minds</span> Behind Our Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our executive team combines decades of experience with cutting-edge expertise to drive digital transformation worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="relative group bg-[#001F3F]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#005587]/30 hover:border-[#00C4FF]/50 transition-all duration-500"
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Profile image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent"></div>
              </div>

              {/* Profile content */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#00C4FF]">{member.title}</p>
                  </div>
                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        className="text-gray-400 hover:text-[#00FFC4] transition-colors"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={socialIcons[platform]} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{member.bio}</p>

                <div className="flex justify-between border-t border-[#005587]/50 pt-6">
                  {member.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00C4FF]/30 rounded-2xl pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Global leadership indicator */}
        <div className="mt-20 pt-12 border-t border-[#005587]/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Global Leadership Network</h3>
            <p className="text-gray-300 mb-8">
              Supported by regional directors and technical experts across 35+ countries, delivering localized digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['North America', 'EMEA', 'APAC', 'Latin America'].map((region) => (
                <div 
                  key={region}
                  className="px-4 py-2 bg-[#005587]/20 text-white rounded-full border border-[#005587]/50 hover:bg-[#00C4FF]/10 hover:border-[#00C4FF]/50 transition-colors"
                >
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Social media SVG paths
const socialIcons = {
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  twitter: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
};

export default Leadership;