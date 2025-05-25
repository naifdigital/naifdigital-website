import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // In a real app, you would fetch this data based on the slug
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      // Find the post that matches the slug
      const blogPosts = [
        {
          id: 1,
          slug: "the-future-of-enterprise-digital-transformation-in-2024",
          title: "The Future of Enterprise Digital Transformation in 2024",
          excerpt: "Discover how AI-powered automation and quantum computing are reshaping global business infrastructures at unprecedented scale.",
          content: `
            <h2>The Digital Transformation Landscape</h2>
            <p>As we approach 2024, enterprise digital transformation has evolved from a competitive advantage to an operational necessity. Our research across Fortune 500 companies reveals three key trends driving this evolution:</p>
            
            <h3>1. AI-Powered Process Automation</h3>
            <p>The integration of artificial intelligence into core business processes has moved beyond pilot programs to full-scale implementation. What began with robotic process automation (RPA) has now matured into cognitive automation systems capable of handling complex decision-making tasks.</p>
            
            <p>At Naif, we've implemented these systems for clients in the financial sector, resulting in:</p>
            <ul>
              <li>300% faster loan approval processes</li>
              <li>98% reduction in manual data entry errors</li>
              <li>$4.2M annual savings per mid-sized bank</li>
            </ul>
            
            <h3>2. Quantum Readiness</h3>
            <p>While practical quantum computing remains 3-5 years away for most enterprises, leading organizations are already preparing their infrastructure. Our Quantum Readiness Assessment has helped 12 global enterprises:</p>
            <ul>
              <li>Identify cryptographic vulnerabilities</li>
              <li>Develop hybrid quantum-classical algorithms</li>
              <li>Train teams on quantum programming basics</li>
            </ul>
            
            <h3>3. Composable Architecture</h3>
            <p>The monolithic systems of the past decade are giving way to modular, composable architectures. This shift enables:</p>
            <ul>
              <li>83% faster feature deployment</li>
              <li>40% reduction in cloud infrastructure costs</li>
              <li>Seamless integration of emerging technologies</li>
            </ul>
            
            <h2>Implementation Roadmap</h2>
            <p>Based on our work with 37 enterprise clients, we've developed a phased approach to 2024 digital transformation:</p>
            
            <h3>Phase 1: Foundation (Months 1-3)</h3>
            <ul>
              <li>Current state assessment</li>
              <li>Workflow automation prioritization</li>
              <li>Data architecture modernization</li>
            </ul>
            
            <h3>Phase 2: Acceleration (Months 4-9)</h3>
            <ul>
              <li>AI/ML integration</li>
              <li>Cloud-native transformation</li>
              <li>Digital workforce augmentation</li>
            </ul>
            
            <h3>Phase 3: Optimization (Months 10-12+)</h3>
            <ul>
              <li>Continuous improvement systems</li>
              <li>Emerging tech pilots</li>
              <li>Ecosystem integration</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>The enterprises that will thrive in 2024 and beyond are those treating digital transformation as an ongoing capability rather than a one-time project. By building adaptable, intelligent systems today, organizations position themselves to capitalize on tomorrow's technological breakthroughs.</p>
          `,
          author: {
            name: "Dr. Sarah Chen",
            title: "Chief Technology Officer",
            avatar: "/authors/dr-chen.jpg",
            bio: "Dr. Chen leads Naif's global technology practice, with 15 years of experience implementing digital transformation for Fortune 500 companies across 28 countries."
          },
          date: "May 15, 2024",
          readTime: "8 min read",
          category: "Digital Transformation",
          image: "/blog/featured-post.jpg",
          tags: ["AI", "Quantum Computing", "Enterprise Architecture", "Automation"],
          stats: {
            views: "24.5K",
            shares: "1.2K",
            comments: 84
          }
        },
        {
          id: 2,
          slug: "microservices-architecture-global-best-practices",
          title: "Microservices Architecture: Global Best Practices",
          excerpt: "Lessons from implementing microservices at scale across three continents.",
          content: "<p>Microservices content would go here...</p>",
          author: {
            name: "James Wilson",
            title: "Lead Architect",
            avatar: "/authors/james-wilson.jpg",
            bio: "James specializes in distributed systems architecture with a focus on financial services and healthcare."
          },
          date: "May 10, 2024",
          readTime: "6 min read",
          category: "Tech Insights",
          image: "/blog/microservices.jpg",
          tags: ["Microservices", "Cloud", "DevOps"],
          stats: {
            views: "18.3K",
            shares: "892",
            comments: 42
          }
        }
      ];

      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || blogPosts[0]); // Fallback to first post if not found
      
      // Set related posts (in reality, these would be fetched based on category/tags)
      setRelatedPosts([
        {
          title: "AI Governance Frameworks for Multinationals",
          category: "Artificial Intelligence",
          date: "May 5, 2024",
          readTime: "10 min read",
          slug: "ai-governance-frameworks-for-multinationals"
        },
        {
          title: "Sustainable Cloud Infrastructure Strategies",
          category: "Cloud Computing",
          date: "April 28, 2024",
          readTime: "7 min read",
          slug: "sustainable-cloud-infrastructure-strategies"
        },
        {
          title: "Cross-Cultural UX Design for Global Audiences",
          category: "Design",
          date: "April 22, 2024",
          readTime: "5 min read",
          slug: "cross-cultural-ux-design-for-global-audiences"
        }
      ]);
      
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-[#00C4FF] rounded-full mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or may have been moved.</p>
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-[#001F3F] font-medium rounded-full hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with animated gradient */}
      <header className="relative bg-gradient-to-r from-[#001F3F] to-[#003366] py-16 overflow-hidden">
        {/* Floating tech elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-[#00C4FF] opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-lg bg-[#00FFC4] opacity-15 rotate-45 animate-float-delay"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-white opacity-10 animate-float-delay-2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.a
              href="/blog"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center text-[#00C4FF] hover:text-[#00FFC4] mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </motion.a>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00C4FF]/10 text-[#005587]">
                  {post.category}
                </span>
                <span className="ml-3 text-sm text-gray-300">{post.date} · {post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center">
                <img 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00C4FF]/30" 
                  src={post.author.avatar} 
                  alt={post.author.name}
                />
                <div className="ml-4">
                  <div className="font-bold text-white">{post.author.name}</div>
                  <div className="text-sm text-gray-300">{post.author.title}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <article className="lg:w-2/3">
            {/* Featured image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Article content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <a 
                    key={index}
                    href={`/blog/tags/${tag.toLowerCase()}`}
                    className="inline-block px-3 py-1 bg-gray-100 hover:bg-[#00C4FF]/10 text-gray-700 hover:text-[#005587] rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Author bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#00C4FF]/30"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author.name}</h3>
                  <p className="text-gray-600 mb-3">{post.author.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#00C4FF] hover:text-[#005587]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-[#00C4FF] hover:text-[#005587]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-[#00C4FF] hover:text-[#005587]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Engagement stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-between items-center text-sm text-gray-500"
            >
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {post.stats.views} views
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {post.stats.shares} shares
                </span>
              </div>
              <a href="#comments" className="flex items-center text-[#00C4FF] hover:text-[#005587]">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {post.stats.comments} comments
              </a>
            </motion.div>

            {/* Comments section - placeholder */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              id="comments"
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Discussion ({post.stats.comments})</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-center py-8">Sign in to participate in the discussion</p>
              </div>
            </motion.section>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            {/* Table of contents - placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8 sticky top-8"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00C4FF] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                In This Article
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-[#005587] transition-colors">The Digital Transformation Landscape</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#005587] transition-colors">AI-Powered Process Automation</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#005587] transition-colors">Quantum Readiness</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#005587] transition-colors">Composable Architecture</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#005587] transition-colors">Implementation Roadmap</a></li>
              </ul>
            </motion.div>

            {/* Related articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00C4FF] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((post, index) => (
                  <a 
                    key={index}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#00C4FF]"></div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900 group-hover:text-[#005587] transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <span>{post.category}</span>
                          <span className="mx-2">·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#005587] to-[#00b3cc] p-6 rounded-xl shadow-md"
            >
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
            </motion.div>
          </aside>
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
        
        /* Prose styles for article content */
        .prose {
          color: #374151;
          max-width: 65ch;
        }
        .prose h2 {
          color: #111827;
          font-weight: 700;
          font-size: 1.5em;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.333;
        }
        .prose h3 {
          color: #111827;
          font-weight: 600;
          font-size: 1.25em;
          margin-top: 1.8em;
          margin-bottom: 0.8em;
          line-height: 1.4;
        }
        .prose p {
          margin-top: 1.25em;
          margin-bottom: 1.25em;
        }
        .prose ul {
          margin-top: 1.25em;
          margin-bottom: 1.25em;
          padding-left: 1.625em;
        }
        .prose li {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;