// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Upload from './pages/Upload.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="*" element={"ERROR 404 - NOT FOUND"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
