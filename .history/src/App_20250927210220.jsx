// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Public Components
import HomePage from "./HomePage";
import FeedbackForm from "./FeedbackForm";
import DoreenBio from "./DoreenBio";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import CompanyProfile from "./CompanyProfile";
import ThankYouPopup from "./ThankYouPopup";

// Admin Components
import ProtectedAdmin from "./ProtectedAdmin";
import BlogAdmin from "./BlogsAdmin";
import LogoAdmin from "./LogoAdmin";
import NavbarAdmin from "./NavbarAdmin";
import HeroAdmin from "./HeroAdmin";
import TestimonialAdmin from "./TestimonialAdmin";
import AboutAdmin from "./AboutAdmin";
import CoreValuesAdmin from "./CoreValuesAdmin";
import ServicesAdmin from "./ServicesAdmin";
import TeamAdmin from "./TeamAdmin";
import ReviewsAdmin from "./ReviewsAdmin";
import SubscribeAdmin from "./SubscribeAdmin";
import ContactAdmin from "./ContactAdmin";
import VisitorsAdmin from "./VisitorsAdmin";
import BulkEmailSender from "./BulkEmailSender";
import InquiryAdmin from "./InquiryAdmin";

const App = () => {
  return (
    <>
      {/* Thank You Popup – can switch between "load" or "scroll" */}
      <ThankYouPopup trigger="scroll" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/bio" element={<DoreenBio />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<CompanyProfile />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedAdmin />}>
          <Route path="blogs" element={<BlogAdmin />} />
          <Route path="logo" element={<LogoAdmin />} />
          <Route path="navbar" element={<NavbarAdmin />} />
          <Route path="hero" element={<HeroAdmin />} />
          <Route path="testimonials" element={<TestimonialAdmin />} />
          <Route path="about" element={<AboutAdmin />} />
          <Route path="core-values" element={<CoreValuesAdmin />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="reviews" element={<ReviewsAdmin />} />
          <Route path="subscribe" element={<SubscribeAdmin />} />
          <Route path="contact" element={<ContactAdmin />} />
          <Route path="visitors" element={<VisitorsAdmin />} />
          <Route path="emails" element={<BulkEmailSender />} />
          <Route path="inquiry" element={<InquiryAdmin />} />
        </Route>
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
