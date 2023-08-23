import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CareerPlan from './pages/CareerPlan';
import CourseScore from './pages/CourseScore';
import ConditionalPlan from './pages/ConditionalPlan';
import SideNavigation from './components/common/SideNavigation';
import { styled } from 'styled-components';
import Ready from './pages/ready';
import Header from './components/common/Header';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SideNavigation />
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<CareerPlan />} />
            <Route path="/career" element={<CareerPlan />} />
            <Route path="/course" element={<CourseScore />} />
            <Route path="/plan" element={<ConditionalPlan />} />
            <Route path="/ready" element={<Ready />} />
          </Routes>
        </GlobalWrapper>
      </BrowserRouter>
    </>
  );
}

const GlobalWrapper = styled.main`
  padding-top: 8rem;
  padding-left: 24rem;

  background: #f7f9fa;
`;
