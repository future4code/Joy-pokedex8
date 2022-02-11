import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageHome, PageDetails, PagePokedex } from '../pages'

export const Rota = () => {
  return ( <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/pageDetails/:name" element={<PageDetails />} />
      <Route path="/pagePokedex" element={<PagePokedex />} />
    </Routes>
    </BrowserRouter>
  </div>);
};


