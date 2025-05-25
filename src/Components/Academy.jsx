import { Link } from "react-router-dom";

const Academy = () => {
  const courses = [
    {
      title: "Full-Stack Web Development",
      subtitle: "Real world projects",
      description:
        "A hands-on course to build complete web applications using modern full-stack technologies like React, Node.js, and PostgreSQL.",
      category: "CERTIFICATION",
      features: [
        "Project-based learning",
        "REST API development",
        "Authentication & Deployment"
      ],
      duration: "3 Months",
      level: "Intermediate to Advanced",
      animationDelay: "100ms",
      link: "",
      thumbnail: "fsd-course-banner.jpg",
    },
    {
      title: "UI/UX Design with Figma",
      subtitle: "Master design systems",
      description:
        "Master user-centered design principles and create beautiful, responsive interfaces using Figma and proven UX strategies.",
      category: "CERTIFICATION",
      features: [
        "Design systems & components",
        "Prototyping & testing",
        "Real-world UI challenges"
      ],
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      animationDelay: "200ms",
      link: "",
      thumbnail: "figma-course-banner.jpg",
    },
    {
      title: "Data Structures & Algorithms",
      subtitle: "With Python",
      description:
        "Crack technical interviews and build strong problem-solving skills through structured DSA practice in Python.",
      category: "BOOTCAMP",
      features: [
        "100+ curated problems",
        "Core concepts: Arrays to Graphs",
        "Weekly live sessions"
      ],
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      animationDelay: "300ms",
      link: "",
      thumbnail: "dsa-course-banner.jpg",
    }
  ];

  return (
    <section className="relative py-28 bg-gray-900 overflow-hidden" id="academy">
      {/* Animated binary code background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center space-y-8">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="whitespace-nowrap text-gray-600 text-xl font-mono animate-scroll-left" style={{ animationDelay: `${i * 2}s` }}>
              0101010101 0110101101 0101010101 0110101101 0101010101 0110101101
            </div>
          ))}
        </div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#00C4FF] opacity-10 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-lg bg-[#00FFC4] opacity-5 rotate-45 animate-float-delay"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-[#005587] opacity-10 animate-float-delay-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-[#00FFC4] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00FFC4] mr-2 animate-pulse"></span>
            GLOBAL DIGITAL ACADEMY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">Transform</span> Your Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            World-class training programs developed with Fortune 500 partners and taught by industry pioneers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-[#00C4FF]/50 transition-all duration-500 shadow-2xl"
              style={{ animationDelay: course.animationDelay }}
              data-aos="fade-up"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#00FFC4]/10 group-hover:bg-[#00FFC4]/20 transition-all duration-700"></div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#005587]/50 text-[#00C4FF]">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00FFC4] transition-colors">
                  {course.title}
                </h3>

                {/* --- 🎬 Video Thumbnail Starts Here --- */}
                <div className="mb-6">
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                    <img
                      src={course.thumbnail}
                      alt={`${course.title} Video Thumbnail`}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                </div>
                {/* --- 🎬 Video Thumbnail Ends Here --- */}

                <p className="text-gray-300 mb-6 flex-grow">
                  {course.description}
                </p>

                <div className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#00C4FF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-700 flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    <span className="block">{course.duration}</span>
                    <span className="block">{course.level}</span>
                  </div>
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-gray-900 font-medium hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-16">
          <Link to={"courses"}>
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00C4FF]/10 group">
              Explore All Programs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-delay {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          @keyframes float-delay-2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
          .animate-float-delay-2 { animation: float-delay-2 12s ease-in-out infinite; }
        `}</style>
    </section>
  );
};

export default Academy