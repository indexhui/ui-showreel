import { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  InspirationPage,
  ResourcePage,
  PortfolioPage,
  WebsitePage,
  Sanity,
  DesignSystemPage,
} from 'pages';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);
  return children;
};

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Wrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/resource" element={<ResourcePage />}>
            <Route path=":content" element={<ResourcePage />} />
          </Route>
          <Route path="/" element={<InspirationPage />} />
          <Route path="/sanity" element={<Sanity />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/website" element={<WebsitePage />} />
          <Route path="/designSystem" element={<DesignSystemPage />} />
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Router;
