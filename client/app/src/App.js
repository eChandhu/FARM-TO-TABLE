import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file here
import FarmList from './components/FarmList';
import FarmDetails from './components/FarmDetails';
import CropDetails from './components/CropDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FarmList />} />
        <Route path="/farms/:farmId" element={<FarmDetails />} />
        <Route path="/farms/:farmId/crops/:cropId" element={<CropDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
