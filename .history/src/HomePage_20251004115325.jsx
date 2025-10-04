import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import BookSection from './BookSection';
import Team from './Team';
import Testimonials from './Testimonials';
import BlogCarousel from './BlogCarousel';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Footer from './Footer';
import DailyInspiration from './DailyInspiration';
import Subscribe from './Subscribe';
import WhatsAppButton from './WhatsAppButton';
import VideoGallery from './VideoGallary';
import Assosiates from './Assosiates';
import FounderMessage from './FounderMessage';
import Gallery from './Gallery';
import Faqs from './Faqs'
import Sustainability from './Sustainability';
import CoreValues from './CoreValues';
i

const videos = [
  { id: "6qE5e2pRWyE", title: "Wealth and life" },
  { id: "MXEycZO7XPk", title: "Welcome Video" },
  { id: "sJ4v7IxM-oE", title: "My three success habits" },
  { id: "QMk7MmQHvXM", title: "Self awareness" },
  { id: "52S1Q15Kjiw", title: "General" },
  { id: "4P-meJuyd2s", title: "Believe in you" },
  { id: "FDVdGozwR3Y", title: "Take Charge" }
];


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FounderMessage/>
      {/* <DailyInspiration /> */}
      <About />
      <CoreValues/>
      <Milestone/>
      <Services />
      <Gallery/>
      {/* <VideoGallery videos={videos}/> */}
      {/* <BookSection /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <BlogCarousel /> */}
      {/* <CallToAction /> */}
      <Contact />
      <Testimonials/>
      <Faqs/>
      <Sustainability/>
      <Subscribe />
     {/* <Assosiates/> */}
      <Footer />
      <WhatsAppButton />

    </>
  );
};

export default HomePage;