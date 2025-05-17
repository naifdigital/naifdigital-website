const WhyChooseUs = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img 
                src="/images/why-choose-us.jpg" 
                alt="Why choose Naif Digital" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Naif Digital?</h2>
              <p className="text-gray-600 mb-8">
                With years of experience in both software development and digital marketing, we provide integrated solutions that deliver real business value.
              </p>
              <button className="bg-[#00A9BB] text-white px-6 py-3 rounded hover:bg-[#008999] transition">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default WhyChooseUs