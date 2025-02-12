// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignments from './components/Assignments';
import Grades from './components/Grades';
import Courses from './components/Courses';



function App() {
  return (
    <>
    <Navbar />
    <Sidebar />
      <div style={{ marginLeft: '270px', marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/grades" element={<Grades />} />
          

        </Routes>
      </div>
      </>
  );
}

export default App;
