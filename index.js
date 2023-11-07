let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");

let options = {
  method: "GET",
};

function radamjokedata() {
  spinnerEl.classList.remove("d-none");
  jokeTextEl.classList.add("d-none");
}

fetch("https://apis.ccbp.in/jokes/random", options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsondata) {
    //console.log(jsondata)
    let radam = jsondata.value;
    spinnerEl.classList.add("d-none");
    jokeTextEl.classList.remove("d-none");
    jokeTextEl.textContent = radam;
  });

jokeBtnEl.addEventListener("click", radamjokedata);
