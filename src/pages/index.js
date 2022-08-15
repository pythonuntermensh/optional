import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
