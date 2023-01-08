import { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  HomePage,
  BookPage,
  InspirationPage,
  ResourcePage,
  PortfolioPage,
  WebsitePage,
  Sanity,
  DesignSystemPage,
} from 'pages';
import Resource from 'pages/Resource';
import Creators from 'pages/Resource/Creators';
import Books from 'pages/Resource/Books';
import Uiux from 'pages/Resource/Uiux';
import Portfolio from 'pages/Resource/Portfolio';
import Organize from 'pages/Resource/Organize';

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
    <AnimatePresence>
      <Wrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/resource" element={<Resource />}>
            <Route path="creators" element={<Creators />} />
            <Route path="books" element={<Books />} />
            <Route path="organization" element={<Organize />} />
            <Route path="uiux" element={<Uiux />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
          <Route path="/resource2" element={<ResourcePage />}>
            <Route path=":content" element={<ResourcePage />} />
          </Route>
          <Route path="/website" element={<WebsitePage />} />
          <Route path="/book" element={<BookPage />} />
          {/* <Route path="/resource" element={<ResourcePage />} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/sanity" element={<Sanity />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/designSystem" element={<DesignSystemPage />} /> */}
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Router;
