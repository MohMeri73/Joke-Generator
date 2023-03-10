let jokeSection = document.getElementById("joke-section");
let generateBtn = document.getElementById("btn");
const API =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeSection.classList.remove("fade");
  fetch(API)
    .then((data) => data.json())
    .then((item) => {
      jokeSection.textContent = `${item.joke}`;
      jokeSection.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);

// const fetchJoke = async () => {
//   let response = await fetch("https://api.chucknorris.io/jokes/random");
//   let data = await response.json();
//   document.getElementById("joke-section").innerText = data.value;
// };
