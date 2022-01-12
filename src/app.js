/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com"];
  let newDomain = [];

  var htmlInsert = document.getElementById("domain-name");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        newDomain.push(pronoun[i] + adj[j] + noun[k] + extension[0]);
      }
    }
  }

  console.log(newDomain);
  for (let i = 0; i < newDomain.length; i++) {
    htmlInsert.innerHTML += "<li>" + newDomain[i] + "</li>";
  }
};
