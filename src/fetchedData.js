import React from "react";

import  data from "./database.json";

var data1 = data
function SetingData(){
    // let response = axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-27&sortBy=publishedAt&apiKey=87837d4baa484a0fba8427cc5388aaa2")    
    // var data1 = response.data
    sessionStorage.setItem("data",JSON.stringify(data1))
    sessionStorage.setItem("searchKey",false)
    
}
export default SetingData