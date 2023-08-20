import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CareerPlan from './pages/CareerPlan';
import CourseScore from './pages/CourseScore';
import ConditionalPlan from './pages/ConditionalPlan';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CareerPlan />} />
        <Route path="/course" element={<CourseScore />} />
        <Route path="/plan" element={<ConditionalPlan />} />
      </Routes>
    </BrowserRouter>
  );
}
