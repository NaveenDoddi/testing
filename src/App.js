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
import SetingData from './fetchedData';

import { useState, useEffect } from "react";
function App() {
  // const [arr1, setArr] = useState('')
  // const [loading, setLoading] = useState(true)
  const [data,setdata] = useState('')
  
  // useEffect(() => {
  //   async function fetching(){
  //     let response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-28&sortBy=publishedAt&apiKey=87837d4baa484a0fba8427cc5388aaa2")

  //     // let response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-04-23&sortBy=publishedAt&apiKey=7ca859182eb14745bc5775d88af1b9fd")
  //     // arr = response.data
  //     // setdata(response.data)]

  //     sessionStorage.setItem("data",response.data)
  //     // setdata(sessionStorage.getItem("data"))
  //     // console.log(data)
  //     // Object.entries(data.articles).map((i)=>i[0] == 0 ? console.log(i[1]):0)
  //   }
  //   fetching()
  // },[])
  return (
    <>
    <SetingData />
    <NavbarNews />
    {/* <Search /> */}
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
