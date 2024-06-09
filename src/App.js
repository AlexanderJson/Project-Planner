import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const LazyLogin = lazy(() => import('./comps/AuthPage/Login'));
const LazyHeader = lazy(() => import('./comps/Header/Header.jsx'));
const LazySchedule = lazy(() => import('./comps/SchedulePage/Schedule'));
const LazyHome = lazy(() => import('./comps/Home.jsx'));


function App() {
  return (
    <div className="App">
     <Router>
     <Suspense fallback={<div>Loading...</div>}>
      <LazyHeader/>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/schedule" element={<LazySchedule />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </Suspense>
     </Router>
    </div>
  );
}

export default App;
