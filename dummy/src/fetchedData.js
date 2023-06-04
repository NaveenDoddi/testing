import React from "react";
import axios from "axios";
import  data from "./database.json";


var data1 = data

function SetingData(){
    // let response = axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=87837d4baa484a0fba8427cc5388aaa2")
    // var data = response.data
    // fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-04-28&sortBy=publishedAt&apiKey=7ca859182eb14745bc5775d88af1b9fd")
    // .then(response=> response.json())
    // .then((data)=> {
    //   console.log(data)
      sessionStorage.setItem("data",JSON.stringify(data1))
    
      var existingData = JSON.parse(localStorage.getItem('data'))
      
      if (existingData) {
  
        var newData = [...existingData,...data1.articles]
        var uniqueArray = Array.from(new Set(newData));
        // console.log(uniqueArray[101])
        localStorage.setItem('data', JSON.stringify(uniqueArray))
  
      } else {
  
        var newData = JSON.stringify(data1.articles)
        localStorage.setItem('data', newData)
  
      }
    
    // var data2 = response.data
    // console.log(data2)
    
    
}
export default SetingData