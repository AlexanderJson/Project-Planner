import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const LazyLogin = lazy(() => import('./comps/AuthPage/Login'));

function App() {
  return (
    <div className="App">
     <Router>
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LazyLogin />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </Suspense>
     </Router>
    </div>
  );
}

export default App;
