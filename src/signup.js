import React from "react";
import { json } from "react-router-dom";
import Signup from "./singin";

let persons= [
        {
            name:"naveen",
            age:19,
            class:12,
        },
        {
            name:"navya",
            age: 17,
            class: 10,
        }
    ];
    

    var value1 = "naveen";
    for (let i=0; i<2; i++){
        for(let data in persons[i]){
            console.log(persons[i].name)
        }
    }
    
    
    
    persons[0].name = value1
    function run(){
    
        let kothaDhi = {
          firstname : "naveen",
          lastname  : "doddi",
          DOB : 1111111,
          gender : "M",
          email : "prasadnaveen@123",
          username : "n",
          password : "n"
        }
      
          kothaDhi = JSON.stringify(kothaDhi)
          console.log(kothaDhi)
          fetch('C:\Users\Doddi Naveen\Desktop\coding\tdgame\src\batabase.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
function EEE(){


    return(
        <>
            <input id="inputt"></input><button onClick={run()}>send</button>
            <p>chieeew</p>
            <p>{persons[0].name}</p>
            {/* <Signup person1 ={ person1 } /> */}
        </>
    )
}
function rundhe(persons){
    // value1 = document.getElementById("inputt").value
    value1 = "vahinshihj"
    
    persons[0].name = value1
    console.log(value1)
}
rundhe(persons)

export { persons }
export default EEE