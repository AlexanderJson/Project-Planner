import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
const LazyLogin = lazy(() => import('./comps/AuthPage/Login'));
const LazyHeader = lazy(() => import('./comps/Header/Header.jsx'));
const LazySchedule = lazy(() => import('./comps/SchedulePage/Schedule'));
const LazyHome = lazy(() => import('./comps/Home.jsx'));
const LazyUserPage = lazy(() => import('./comps/UserInfoPage/UserPage.jsx'));


function App() {
  return (
    <div className="App">
     <Router>
     <Suspense fallback={<div>Loading...</div>}>
      <LazyHeader/>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/schedule" element={<LazySchedule />} />
        <Route path="/login" element={<LazyLogin />} />
        <Route path="/profile" element={<LazyUserPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </Suspense>
     </Router>
    </div>
  );
}

export default App;
