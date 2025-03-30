import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AuthPage from './components/pages/AuthPage';
import ExpensePage from './components/pages/ExpensePage';
import IncomePage from './components/pages/IncomePage';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/income" element={<IncomePage />} />   
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
