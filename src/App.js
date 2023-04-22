import React from 'react';
import './App.css';
import News1 from './news.js';
import News2 from './news2';
import News3 from './news3';
import News4 from './news4';
import Search from './search';
import NavbarNews from './navbar.js';
import CarasoulNews from './carasoul.js';
import PageNation from './pagenation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
// const MyLazyComponent = lazy(()=> import("./search"))
function App() {
  return (
    <>
      <NavbarNews />
      <Search />
      
      <CarasoulNews />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<News1/>}/>
            <Route path='/News2' element={<News2/>}/>
            <Route path='/News3' element={<News3/>}/>
            <Route path='/News4' element={<News4/>}/>
        </Routes>
      </BrowserRouter>
      <PageNation />
    </>
  );
}

export default App;
