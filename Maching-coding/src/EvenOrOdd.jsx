import React from "react";
import "./styles.css";

function EvenOrOddChecker() {
  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
      />

      <button className="check-button">Check</button>

      <div className="result-area">
        <div className="result">Result appears here</div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;




/*
console.log("Hello, World!");



function func()
{
  console.log("Start");
  
}
setTimeout(function() {console.log("Timer")}, 10);

const p1 = new Promise((resolve,reject) =>
{
  resolve("Promise")
})
p1.then((res) =>
console.log(res))
func()



function outer()
{
  let count =0;
  return function inner()
  {
    
    return ++count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());


const arr = [1,2,3,4,5,6,6,3,4];

const result = [...new Set(arr)].join(",");

console.log(result)


let uniq =[];
for (var i = 0; i < arr.length; i++) {
  if(!uniq.includes(arr[i]))
  {
    uniq.push(arr[i])
  }

}
console.log(uniq)

*/