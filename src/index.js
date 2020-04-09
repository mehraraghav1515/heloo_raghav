import "./styles.css";

const API_KEY = "813e4044";
const base_url = "https://www.omdbapi.com/";

const searchform = document.querySelector("form");

searchform.addEventListener("submit", event => {
  event.preventDefault();
  const movie_input = searchform.querySelector("input");
  const searchtext = movie_input.value;

  fetch(`${base_url}?apikey=${API_KEY}&t=${searchtext}`)
    .then(response => response.json())
    .then(data => console.log(data));

  console.log("Submitted");
});
