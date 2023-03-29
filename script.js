let jokeDiv = document.querySelector("#chuckJoke");

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((out) => {
    jokeDiv.innerHTML = out.value;
  })
  .catch((err) => {
    throw err;
  });

let chuckPics = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let randomKey = Math.floor(Math.random() * chuckPics.length);
let randomChuckPic = `./images/${chuckPics[randomKey]}`;
let chuckPicDiv = document.querySelector("#chuckPic");
chuckPicDiv.innerHTML = `<img src="${randomChuckPic}" alt="Chuck Norris ${randomKey}">`;
