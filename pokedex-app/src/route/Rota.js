import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageHome, PageDetails, PagePokedex } from '../pages'

export const Rota = () => {
  return ( <div>
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/pageDetails" element={<PageDetails />} />
      <Route path="/pagePokedex" element={<PagePokedex />} />

    </Routes>
  </div>);
};


