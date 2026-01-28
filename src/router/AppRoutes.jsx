import React, { useEffect, useState } from "react";
import { llcData } from "../constants/llc";
import { incData } from "../constants/inc";
import {
  // Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  // useLocation,
  useParams,
} from "react-router-dom";
import MetaUpdater from "./MetaUpdater";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blogs/Blog";
import Contact from "../pages/contact/Contact";
import Partner from "../pages/partner/Partner";
import HelpCenter from "../pages/helpCenter/HelpCenter";
import Privacy from "../pages/privacy/Privacy";
import Terms from "../pages/terms/Terms";
import Refund from "../pages/refundPolicy/Refund";
import Error from "../pages/error/Error";
import ApplyNow from "../pages/applyNow/ApplyNow";
import Register from "../pages/landingPages/Register";
import NewLanding from "../pages/landingPages/apply-now/newLanding";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import LandingGoogle from "../pages/landingPages/LandingGoogle";
import LandingFB from "../pages/landingPages/LandingFB";

import BlogDetails from "../pages/blogDetail/BlogDetails";
// import Loans from "../pages/loans/Loans";

const countryMap = {
  us: llcData,
  ca: incData,
};

function LayoutWithMeta() {
  return (
    <>
      <MetaUpdater />
      <Layout />
    </>
  );
}

const ChatWidgetWrapper = () => {
  const location = useLocation();
  // Extract country code from pathname (first segment)
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const countryCode = pathSegments[0] === "ca" ? "ca" : "us";

  return <ChatWidget countryCode={countryCode} />;
};

const AppRoutes = () => {
  const { countryCode } = useParams();
  const [content, setContent] = useState(llcData);

  useEffect(() => {
    const country = (countryCode || "us").toLowerCase();
    setContent(countryMap[country] || llcData);
  }, [countryCode]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWithMeta />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="loan" element={<Loans />} /> */}
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="partner" element={<Partner />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund-policy" element={<Refund />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* <Route path=":countryCode" element={<CountryWrapper />}> */}
        <Route path=":countryCode" element={<LayoutWithMeta />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="loan" element={<Loans />} /> */}
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="partner" element={<Partner />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund-policy" element={<Refund />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="/apply" element={<ApplyNow />} />

        <Route path="/thank-you" element={<Register />} />
        <Route path="/register" element={<Register />} />

        <Route path="/:countryCode/apply" element={<ApplyNow />} />

        <Route path="/:countryCode/google" element={<LandingGoogle />} />
        <Route
          path="/:countryCode/google/thank-you"
          element={<LandingGoogle />}
        />

        <Route path="/:countryCode/fb" element={<LandingFB />} />
        <Route path="/:countryCode/fb/thank-you" element={<LandingFB />} />

        {/* for smarter loan  */}
        <Route path="/:countryCode/apply-now" element={<NewLanding />} />
        <Route
          path="/:countryCode/apply-now/thank-you"
          element={<NewLanding />}
        />
      </Routes>
      <ChatWidgetWrapper />
    </>
  );
};

export default AppRoutes;
