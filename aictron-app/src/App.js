// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Contribute from './pages/Contribute.js';
import Upload from './pages/Predict/Upload.js';
import ColumnChoice from './pages/Predict/ColumnChoice.js';
import NewValues from './pages/Predict/NewValues.js';
import ResultText from './pages/Predict/ResultText.js';
import ResultFile from './pages/Predict/ResultFile.js';


import './assets/style/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="predict">
            <Route index element={<Upload />} />
            <Route path="column-choice" element={<ColumnChoice />} />
            <Route path="new-values" element={<NewValues />} />
            <Route path="result-text" element={<ResultText />} />
            <Route path="result-file" element={<ResultFile />} />
          </Route>
        </Route>
        <Route path="*" element={"ERROR 404 - NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
