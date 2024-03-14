// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Upload from './pages/Predict/Upload.js';
import ColumnChoice from './pages/Predict/ColumnChoice.js';
import SelectorChoice from './pages/Predict/SelectorChoice.js';
import NewValues from './pages/Predict/NewValues.js';
import Result from './pages/Predict/Result.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="predict">
            <Route index element={<Upload />} />
            <Route path="column-choice" element={<ColumnChoice />} />
            <Route path="selector-choice" element={<SelectorChoice />} />
            <Route path="new-values" element={<NewValues />} />
            <Route path="result" element={<Result />} />
          </Route>
        </Route>
        <Route path="*" element={"ERROR 404 - NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
