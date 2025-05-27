import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HireTeamPopup } from './Hero';
import { section } from 'framer-motion/client';

const Header = () => {
  const [showHirePopup, setShowHirePopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const solutionsDropdown = [
    { title: "Web & App Development", description: "Custom web and app solutions ", path: "/solutions/web-&-app-development" },
    { title: "Brand & Design", description: "Designing Businness Brand", path: "/solutions/saas" },
    { title: "Hosting & Optimization", description: "Modernize your business operations", path: "/solutions/digital-transformation" },
    { title: "Growth & Visibility", description: "SEO Friendly Sites and Good Strategy", path: "/solutions/ai-ml" },
    { title: "Content Creation & Media", description: "", path: "/solutions/ai-ml" },

  ];

  const resourcesDropdown = [
    { title: "Projects", description: "See our work in action", path: "/projects" },
    { title: "Growth Playbooks", description: "Latest industry trends", path: "/growth-playbooks" },
    { title: "Tutorials & Courses", description: "In-depth technical guides", path: "/courses" },
    { title: "Free Tools & Templates", description: "In-depth technical guides", path: "/resources/whitepapers" },
    { title: "Blog", description: "Live expert sessions", path: "/blog" },
  ];

  return (
    <section>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo with subtle animation */}
            <div className="flex items-center">
              <Link to="/" className="group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img src="naifdigital-logo-with-frame.png" alt="Naif Digital Logo" className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#001F3F] to-[#005587] bg-clip-text text-transparent">
                    Naif Digital
                  </span>
                </div>

              </Link>

              {/* Language selector for global presence */}
              <div className="ml-6 hidden lg:block relative group">
                <button className="flex items-center text-sm font-medium text-gray-600 hover:text-[#005587]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  EN
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                  {['English', 'العربية', 'Afaan Oromo', 'Amharic'].map((lang) => (
                    <a key={lang} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#005587]">
                      {lang}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/about"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50/50 rounded-lg transition"
              >
                About Us
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50/50 rounded-lg transition cursor-pointer">
                  Solutions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-100">
                    <div className="p-4 grid gap-2">
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition"
                        >
                          <div className="bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] p-2 rounded-md mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 group-hover:text-[#005587]">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 rounded-b-lg">
                      <Link
                        to="/all-solutions"
                        className="text-sm font-medium text-[#005587] hover:text-[#003366] flex items-center cursor-pointer"
                      >
                        View all solutions
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50/50 rounded-lg transition cursor-pointer">
                  Resources
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-100">
                    <div className="p-4 grid gap-2">
                      {resourcesDropdown.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition"
                        >
                          <div className="bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] p-2 rounded-md mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 group-hover:text-[#005587]">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to={"courses"}>
                  <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50/50 rounded-lg transition cursor-pointer">
                  Academy
                </button>
              </Link>


              <Link
                to="/contact"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50/50 rounded-lg transition"
              >
                Contact
              </Link>

              <div className="ml-4 flex items-center space-x-3">
                <Link className="inline-flex items-center group">
                  <button
                    onClick={() => setShowHirePopup(true)}
                    className="px-6 py-2.5 text-[#00B3CC] text-sm font-medium border-2 border-[#00B3CC] bg-transparent hover:bg-[#00B3CC] hover:text-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                    Hire Us
                  </button>
                  <span className="ml-2 text-[#00B3CC] group-hover:translate-x-1 group-hover:text-[#00B3CC] transition-transform duration-300">
                    &rarr;
                  </span>
                </Link>

              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#005587] hover:bg-gray-100 focus:outline-none transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-6 animate-fadeIn">
              <div className="space-y-1">
                <Link
                  to="/about"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50 rounded-lg transition"
                >
                  About Us
                </Link>

                <div className="border-t border-gray-100 pt-1">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50 rounded-lg transition"
                    onClick={() => setActiveDropdown(activeDropdown === 'mobile-solutions' ? null : 'mobile-solutions')}
                  >
                    Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${activeDropdown === 'mobile-solutions' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === 'mobile-solutions' && (
                    <div className="pl-6 pr-4 py-2 space-y-2">
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#005587] hover:bg-gray-50 rounded-lg transition"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-1">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50 rounded-lg transition"
                    onClick={() => setActiveDropdown(activeDropdown === 'mobile-resources' ? null : 'mobile-resources')}
                  >
                    Resources
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${activeDropdown === 'mobile-resources' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeDropdown === 'mobile-resources' && (
                    <div className="pl-6 pr-4 py-2 space-y-2">
                      {resourcesDropdown.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#005587] hover:bg-gray-50 rounded-lg transition"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#005587] hover:bg-gray-50 rounded-lg transition"
                >
                  Contact
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <Link
                  to="/get-started"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] rounded-lg shadow hover:shadow-md transition"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile language selector */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <select className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#00C4FF]">
                  <option>English</option>
                  <option>العربية</option>
                  <option>Afaan Oromo</option>
                  <option>Amharic</option>
                </select>
              </div>
            </div>
          )}
        </div>

      </header>
      <HireTeamPopup isOpen={showHirePopup} onClose={() => setShowHirePopup(false)} />
    </section>
  );
};

export default Header;