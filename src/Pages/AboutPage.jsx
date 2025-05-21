import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "3+", label: "Active Clients" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "2023", label: "Founded" },
  ];


  const coreValues = [
    {
      title: "Craftsmanship",
      description: "We write clean, maintainable code and obsess over user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-[#00C4FF] to-[#005587]",
    },
    {
      title: "Partnership",
      description: "We work closely with clients to understand their vision and adapt as we grow together.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-[#00FFC4] to-[#007a8a]",
    },
    {
      title: "Continous Learning",
      description: "We constantly experiment and stay updated with modern tools and practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-[#FF00AA] to-[#005587]",
    },
  ];

  const leadershipTeam = [
    {
      name: "Adnan Tahir Abda",
      role: "CEO, Founder & Software Engineer",
      expertise:
        "Expert in web Development, backend and frontend development, Adnan has a strong track record of designing scalable, secure, and maintainable systems from the ground up. His leadership and hands-on development experience span a range of industries, enabling him to deliver digital products.",
      avatar: "developer.png",
    },
    {
      name: "Abdulfetah Suudi Hasen",
      role: "Manager & Full Stack Engineer",
      expertise:
        "Specialized in full stack development with a focus on crafting responsive web interfaces, robust backend solutions and cross-platform mobile app development. Abdulfetah brings extensive experience in managing software projects from concept to launch. and high-quality code.",
      avatar: "suudi.webp",
    },
  ];



  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001F3F] to-[#003366] py-32 overflow-hidden">
        {/* Animated binary code overlay */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="text-gray-400 font-mono text-xl whitespace-nowrap animate-scroll-left"
              style={{ animationDelay: `${i * 3}s` }}
            >
              0101010101 0110101101 0101010101 0110101101
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#00FFC4]">
                Engineering
              </span>{" "}
              the Digital Future
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Naif Digital, we help indviduals, growing businesses, startups, and local teams bring their digital ideas to life with scalable, user-friendly web and mobile solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b3cc] to-[#005587]">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#00b3cc]">Principles</span>
            </h2>
            <p className="text-xl text-gray-600">
              We aim to solve meaningful problems through dependable Solutions. Our principles clarity, consistency, and care guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-500"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#005587]">Global</span> Reach,{" "}
                <span className="text-[#00b3cc]">Local</span> Expertise
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                we currently work remotely with clients across different regions and time zones, allowing us to stay flexible and responsive.
              </p>
              <div className="space-y-4">
                {[
                  "Remote-first team working across regions and time zones.",
                  "Reliable infrastructure on AWS, Azure, and GCP.",
                  "Compliant with GDPR, CCPA, and PIPL where needed.",
                    "We communicate in 4 languages to stay accessible"
                      ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-[#00C4FF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              {/* World map visualization */}
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-contain bg-no-repeat bg-center opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      "Remote-first development process",
                      "Quick iteration cycles and clear communication",
                      "Committed to transparency and reliability",
                    ].map((city) => (
                      <div
                        key={city}
                        className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex items-center"
                      >
                        <div className="w-3 h-3 rounded-full bg-[#00FFC4] mr-3"></div>
                        <span className="font-medium text-gray-900">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#00b3cc]">Lead</span>
            </h2>
            <p className="text-xl text-gray-600">
              We’re a growing team of passionate engineers and creators.            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 relative z-10 -mt-12">
                  <div className="flex items-end mb-4">
                    <div className="bg-white p-2 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-[#00b3cc] font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#001F3F] to-[#003366]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We are Ready to Transform Your Digital Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our engineering team is ready to have a step.
          </p>
          <Link to="/contact">
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#00C4FF] to-[#00FFC4] text-[#001F3F] font-bold rounded-full hover:shadow-lg hover:shadow-[#00C4FF]/30 transition-all transform hover:-translate-y-1">
              Connect With Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
        `}</style>
    </div>
  );
};


export default AboutPage