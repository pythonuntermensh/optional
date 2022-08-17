import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Examples from './Examples';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
