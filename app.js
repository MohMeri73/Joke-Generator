const loader = document.querySelector("#loading");

function displayLoading() {
  loader.classList.add("display");
  loader.style.display = "block";

  // // to stop loading after some time
  // setTimeout(() => {
  //     loader.classList.remove("display");
  // }, 1000);
}
function hideLoading() {
  loader.classList.remove("display");
  loader.style.display = "none";
}

const jokeContainer = document.getElementById("joke-section");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  displayLoading();
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
      hideLoading();
    });
};
btn.addEventListener("click", getJoke);
