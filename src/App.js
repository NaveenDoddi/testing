import React from 'react';
import './App.css';
import News1 from './news.js';
import News2 from './news2';
import News3 from './news3';
import News4 from './news4';
import Search from './search';

import PageNation from './pagenation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Search />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<News1/>}/>
            <Route path='/News2' element={<News2/>}/>
            <Route path='/News3' element={<News3/>}/>
            <Route path='/News4' element={<News4/>}/>
            <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
      <PageNation />
      
    </>
  );
}

export default App;
