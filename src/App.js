


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // or './App.css'

import Header from './components/header'; 
import Home from './components/home';
import IndustriesServed from './components/IndustriesServed'
import QualityAssurance from './components/qualityassurance';
import EdibleOilRefineries from './pages/edible-oil-refineries';
import SoapAndDetergentManufacturers from './pages/soap-&-detergent-manufacturers';
import WaterTreatmentPlant from './pages/water-treatment-plant';
import PetrochemicalIndustry from './pages/petrochemical-industry';
import FoodAndBeverageIndustry from './pages/food-&-beverage-industry';
import BeverageJuicePlants from './pages/beverage-&-juice-plants';
import AgricultureFertilizers from './pages/agriculture-&-fertilizers';
import Pharmaceuticals from './pages/pharmaceutical-manufacturing';
import Contact from './pages/contact-us';
import AboutUs from './pages/about-us';
import CausticSoda from './components/ourproducts/Caustic';
import BleachingEarth from './components/ourproducts/Bleaching';
import FilterFlowAid from './components/ourproducts/Filter';
import CitricAcid from './components/ourproducts/Citric';
import OurBlogs from './pages/our-blog';
import BlogDetail from './pages/blogdetail';

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-blog" element={<OurBlogs/>} />
          <Route path="/industries" element={<IndustriesServed />} />
            <Route path="/industries/edible-oil-refineries" element={<EdibleOilRefineries />} />
            <Route path="/industries/soap-&-detergent-manufacturers" element={<SoapAndDetergentManufacturers/>}/>
            <Route path="/industries/water-treatment-plant" element={<WaterTreatmentPlant/>}/>
            <Route path="/industries/pharmaceutical-manufacturing" element={<Pharmaceuticals/>}/>
            <Route path='/industries/food-&-beverage-industry' element={<FoodAndBeverageIndustry/>}/>
            <Route path='/industries/agriculture-&-fertilizers' element={<AgricultureFertilizers/>}/>
            <Route path='/industries/petrochemical-industry' element={<PetrochemicalIndustry/>}/>
            <Route path="/industries/beverage-&-juice-plants" element={<BeverageJuicePlants/>}/>
           <Route path="/blogdetail/:id" element={<BlogDetail />} />

            

          <Route path="/our-products/caustic-soda" element={<CausticSoda />} />
          <Route path="/our-products/bleaching-earth" element={<BleachingEarth />} />
          <Route path="/our-products/filter-flow-aid" element={<FilterFlowAid />} />
          <Route path="/our-products/citric-acid" element={<CitricAcid />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
      </Router>
    </div>
    </HelmetProvider >
  );
}

export default App;
