import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TeamPage from './pages/TeamPage';
import VisionPage from './pages/VisionPage';
import EScootersPage from './pages/EScootersPage';
import DealershipPage from './pages/DealershipPage';
import CataloguePage from './pages/CataloguePage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Update the "component" prop to "element" with JSX syntax */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about/company" element={<CompanyPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/e-scooters" element={<EScootersPage />} />
          <Route path="/dealership" element={<DealershipPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
