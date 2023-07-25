import React from 'react';
// import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash1 from './pages/Dash1';
import Dash2 from './pages/Dash2';
import Dash3 from './pages/Dash3';
import Dash4 from './pages/Dash4';
import Dash5 from './pages/Dash5';

function App() {
  return (
   <div>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Dash1/>}>
          <Route index element={<Dash2/>} />
          <Route path="blogs" element={<Dash3/>} />
          <Route path="contact" element={<Dash4/>} />
          <Route path="*" element={<Dash5/>} />
        </Route>
      </Routes>
    </Router> */}
    {/* <Dash1/> */}
    {/* <Dash2/> */}
    <Dash3/>
    {/* <Dash4/> */}
    {/* <Dash5/> */}
   </div>
  );
}
export default App;

