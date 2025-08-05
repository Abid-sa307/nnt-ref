
// import React from 'react';
// import Header from './components/header'; 

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* Other components or content */}
//     </div>
//   );
// }

//export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'; 
import Home from './components/home';
import IndustriesServed from './components/IndustriesServed';
import QualityAssurance from './components/qualityassurance';
import Contact from './components/contact';

import CausticSoda from './components/ourproducts/Caustic';
import BleachingEarth from './components/ourproducts/Bleaching';
import FilterFlowAid from './components/ourproducts/Filter';
import CitricAcid from './components/ourproducts/Citric';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<IndustriesServed />} />
          <Route path="/our-products/caustic-soda" element={<CausticSoda />} />
          <Route path="/our-products/bleaching-earth" element={<BleachingEarth />} />
          <Route path="/our-products/filter-flow-aid" element={<FilterFlowAid />} />
          <Route path="/our-products/citric-acid" element={<CitricAcid />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
