import React from "react";
// import axios from "axios";
// import { useEffect} from "react";


// let response = axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=87837d4baa484a0fba8427cc5388aaa2")    
// var data1 = response.data
// console.log(data1)
// export { data1 }


import  data from "./database.json";

var nav = data
function SetingData(){
    sessionStorage.setItem("data",JSON.stringify(nav))
}
export default SetingData