const BlogPage = () => {
    const featuredPost = {
      title: "The Future of Enterprise Digital Transformation in 2024",
      excerpt: "Discover how AI-powered automation and quantum computing are reshaping global business infrastructures at unprecedented scale.",
      author: "Dr. Sarah Chen",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "Digital Transformation",
      image: "/blog/featured-post.jpg",
      avatar: "/authors/dr-chen.jpg"
    };
  
    const popularPosts = [
      {
        title: "Microservices Architecture: Global Best Practices",
        category: "Tech Insights",
        date: "May 10, 2024",
        readTime: "6 min read"
      },
      {
        title: "AI Governance Frameworks for Multinationals",
        category: "Artificial Intelligence",
        date: "May 5, 2024",
        readTime: "10 min read"
      },
      {
        title: "Sustainable Cloud Infrastructure Strategies",
        category: "Cloud Computing",
        date: "April 28, 2024",
        readTime: "7 min read"
      }
    ];
  
    const blogPosts = [
      {
        title: "Cross-Cultural UX Design for Global Audiences",
        excerpt: "How we designed interfaces that increased engagement by 240% across 12 markets.",
        category: "Design",
        date: "April 22, 2024",
        readTime: "5 min read",
        image: "/blog/ux-design.jpg"
      },
      {
        title: "Blockchain for Enterprise Supply Chains",
        excerpt: "Case study: Implementing decentralized ledgers for a Fortune 100 manufacturer.",
        category: "Blockchain",
        date: "April 18, 2024",
        readTime: "9 min read",
        image: "/blog/blockchain.jpg"
      },
      {
        title: "The Psychology of Digital Adoption",
        excerpt: "Behavioral science principles that drive technology acceptance in organizations.",
        category: "Psychology",
        date: "April 12, 2024",
        readTime: "6 min read",
        image: "/blog/psychology.jpg"
      },
      {
        title: "Quantum Computing Readiness Assessment",
        excerpt: "Preparing your infrastructure for the next computational revolution.",
        category: "Emerging Tech",
        date: "April 5, 2024",
        readTime: "11 min read",
        image: "/blog/quantum.jpg"
      },
      {
        title: "Global Data Privacy Regulations Compared",
        excerpt: "Navigating GDPR, CCPA, PIPL and other frameworks for multinational compliance.",
        category: "Compliance",
        date: "March 29, 2024",
        readTime: "8 min read",
        image: "/blog/privacy.jpg"
      },
      {
        title: "Building Resilient Tech Teams",
        excerpt: "Lessons from scaling engineering teams across 3 continents.",
        category: "Leadership",
        date: "March 22, 2024",
        readTime: "7 min read",
        image: "/blog/teams.jpg"
      }
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Header with animated gradient */}
        <header className="relative bg-gradient-to-r from-[#001F3F] to-[#003366] py-20 overflow-hidden">
          {/* Floating tech elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-[#00C4FF] opacity-20 animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-lg bg-[#00FFC4] opacity-15 rotate-45 animate-float-delay"></div>
            <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-white opacity-10 animate-float-delay-2"></div>
          </div>
  
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 pt-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">Naif</span> Insights
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge perspectives on digital transformation, emerging technologies, and global business innovation.
              </p>
              
              {/* Search bar */}
              <div className="mt-10 max-w-xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search articles, reports, and insights..."
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC4] focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
  
        <main className="container mx-auto px-6 py-16">
          {/* Featured post */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00C4FF]/10 text-[#005587]">
                      {featuredPost.category}
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{featuredPost.date} · {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center">
                    <img 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#00C4FF]/30" 
                      src={featuredPost.avatar} 
                      alt={featuredPost.author}
                    />
                    <div className="ml-4">
                      <div className="font-bold text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">Chief Technology Officer</div>
                    </div>
                  </div>
                  <button className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-[#001F3F] font-medium rounded-full hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all">
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <div className="md:w-1/3 bg-gray-100 md:min-h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
  
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main content */}
            <div className="md:w-2/3">
              {/* Popular posts */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#00FFC4] mr-3"></span>
                  Trending in Global Tech
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {popularPosts.map((post, index) => (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-[#00C4FF]/30 group"
                    >
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-[#00C4FF]/10 text-[#005587]">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005587] transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
  
              {/* All posts */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#00C4FF] mr-3"></span>
                  Latest Insights
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <article 
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="h-48 bg-gray-100 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-[#00C4FF]/10 text-[#005587]">
                            {post.category}
                          </span>
                          <span className="ml-3 text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#005587] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <button className="text-[#005587] hover:text-[#003366] font-medium text-sm flex items-center">
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
  
                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#005587] text-white font-medium">1</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">2</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">3</button>
                    <span className="px-2 text-gray-500">...</span>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">8</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </section>
            </div>
  
            {/* Sidebar */}
            <div className="md:w-1/3">
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00C4FF] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Categories
                </h3>
                <ul className="space-y-3">
                  {['Digital Transformation', 'Artificial Intelligence', 'Cloud Computing', 'Blockchain', 'Leadership', 'Design', 'Security'].map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#005587] transition-colors">
                        <span>{category}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">24</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#005587] to-[#00b3cc] p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-lg font-bold text-white mb-3">Global Insights Newsletter</h3>
                <p className="text-gray-200 mb-4">Get the latest digital transformation trends delivered to your inbox.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFC4] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-white text-[#005587] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-white/70 mt-3">We respect your privacy. Unsubscribe at any time.</p>
              </div>
  
              {/* Tags */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00C4FF] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Microservices', 'DevOps', 'Quantum', 'GDPR', 'UX', 'CX', 'SaaS', 'IoT', '5G', 'Edge', 'Metaverse'].map((tag, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="inline-block px-3 py-1 bg-gray-100 hover:bg-[#00C4FF]/10 text-gray-700 hover:text-[#005587] rounded-full text-sm transition-colors"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
  
        {/* Animation keyframes */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-delay {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-7px) rotate(3deg); }
          }
          @keyframes float-delay-2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
          .animate-float-delay-2 { animation: float-delay-2 12s ease-in-out infinite; }
        `}</style>
      </div>
    );
  };



export default BlogPage