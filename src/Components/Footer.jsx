import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const offices = [
    {
      city: "Dubai",
      address: "Dubai Internet City, Building 12, Office 301",
      phone: "+971 4 123 4567"
    },
    {
      city: "Singapore",
      address: "One Raffles Place, Tower 2, #08-01",
      phone: "+65 6321 1234"
    },
    {
      city: "London",
      address: "30 St Mary Axe, Level 20",
      phone: "+44 20 7123 4567"
    },
    {
      city: "New York",
      address: "One World Trade Center, 85th Floor",
      phone: "+1 212 123 4567"
    }
  ];

const solutions = [
  "Web & App Development",
  "Brand & Design",
  "Hosting & Optimization",
  "Growth & Visibility",
  "Content Creation & Media",
  "Consulting & Strategy"
];

const resources = [
  "Client Case Studies",
  "Growth Playbooks",
  "Tutorials & Guides",
  "Agency Blog",
  "Free Tools & Templates"
];


  return (
    <footer className="relative bg-[#001F3F] text-white border-t border-[#005587]/30">
        <div className="absolute inset-0 z-0">
    <div className="relative h-full w-full">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[#001F3F]/90" 
        style={{
          backgroundImage: "url('/rocket-naifdigital-footer-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  </div>
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="naifdigital-logo-with-frame.png" alt="Naif Digital Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold text-white bg-clip-text text-transparent">
                Naif Digital
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Global leaders in digital transformation and enterprise software solutions.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-[#00FFC4] transition-colors"
                  aria-label={social}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={socialIcons[social]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#00C4FF]">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <Link 
                    to={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors flex items-start"
                  >
                    <svg className="w-4 h-4 mt-1 mr-2 text-[#00FFC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#00C4FF]">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item}>
                  <Link 
                    to={`/resources/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors flex items-start"
                  >
                    <svg className="w-4 h-4 mt-1 mr-2 text-[#00FFC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#00C4FF]">Global Offices</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="group">
                  <div className="text-white font-medium mb-1 group-hover:text-[#00FFC4] transition-colors">
                    {office.city}
                  </div>
                  <div className="text-gray-300 text-sm mb-1">{office.address}</div>
                  <div className="text-gray-400 text-sm">{office.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-[#005587]/30">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Ahead with Our Insights</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest in digital transformation and enterprise technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-[#005587]/20 border border-[#005587]/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]"
              />
              <button className="bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-[#001F3F] font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#000F1F] py-6 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Naif Digital. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy and Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social media SVG paths
const socialIcons = {
  LinkedIn: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  Facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  Instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
};

export default Footer;