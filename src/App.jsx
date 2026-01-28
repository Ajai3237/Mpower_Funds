import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { Toaster } from "react-hot-toast";
import MetaPixelScript from "./components/MetaPixelScript/MetaPixelScript";
import MetaUpdater from "./router/MetaUpdater";
import AppRoutes from "./router/AppRoutes";
import ChatWidget from "./components/ChatWidget/ChatWidget";

function App() {
  return (
    <>
      <Router>
        <MetaPixelScript />
        <Toaster />
        <ScrollToTop />
        <MetaUpdater />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
