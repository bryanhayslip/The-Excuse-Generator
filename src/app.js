/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = [
    "my sister",
    "his Dad",
    "their priest",
    "my neighbor",
    "the mayor"
  ];
  let action = ["punched", "kissed", "kicked", "slapped", "ate"];
  let what = ["my car", "her house", "his diary", "some cheese", "Guy Fieri"];
  let when = [
    "last night",
    "this morning",
    "a few moments ago",
    "yesterday",
    "on Tuesday evening"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * action.length);
  let whenIndex = Math.floor(Math.random() * action.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
