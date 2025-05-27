import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import WhyChooseUs from './Components/WhyChooseUs.jsx';
import Footer from './Components/Footer.jsx';
import LowServices from './Components/LowServices.jsx';
import Leadership from './Components/Leadership.jsx';
import VideoShowcase from './Components/VideoShowcase.jsx';
import Approach from './Components/OurApproach.jsx';
import Academy from './Components/Academy.jsx';
import Testimonials from './Components/Testimonials.jsx';
import ContactSection from './Components/Contact.jsx';

// ✅ Import Blog & About Pages
import Blog from './Pages/BlogPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';
import CaseStudiesPage from './Pages/CaseStudiesPage.jsx';
import BlogPost from './Pages/BlogPost.jsx';
import AcademyPage from './Pages/AcademyPage.jsx';

function App() {
  return (
    <div className="font-sans">
      <Header /> {/* ✅ Header stays on all pages */}
      <ScrollToTop />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LowServices />
                <VideoShowcase />
                <Services />
                <Approach />
                <Academy />
                {/* Testimonials will go here in the future */}
                <ContactSection />
                {/* <Leadership /> */}
              </>
            }
          />
          <Route path="/blog" element={<Blog />} /> {/* ✅ Blog Route */}
          <Route path="/about" element={<AboutPage />} /> {/* ✅ About Route */}
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path='/login' element={<LoginPage /> }/>
          <Route path='/all-solutions' element={<ServicesPage/> }/>
          <Route path='/projects' element={<CaseStudiesPage />  }/>
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/courses" element={<AcademyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer /> {/* ✅ Footer stays on all pages */}
    </div>
  );
}

export default App;

