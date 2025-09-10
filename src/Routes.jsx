import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SmartMapInterface from './pages/smart-map-interface';
import EnvironmentalEducationCenter from './pages/environmental-education-center';
import AboutEcoVision from './pages/about-eco-vision';
import MunicipalDashboard from './pages/municipal-dashboard';
import BinNetworkManagement from './pages/bin-network-management';
import SmartEnvironmentalDashboard from './pages/homepage-smart-environmental-dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<SmartEnvironmentalDashboard />} />
        <Route path="/smart-map-interface" element={<SmartMapInterface />} />
        <Route path="/environmental-education-center" element={<EnvironmentalEducationCenter />} />
        <Route path="/about-eco-vision" element={<AboutEcoVision />} />
        <Route path="/municipal-dashboard" element={<MunicipalDashboard />} />
        <Route path="/bin-network-management" element={<BinNetworkManagement />} />
        <Route path="/homepage-smart-environmental-dashboard" element={<SmartEnvironmentalDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
