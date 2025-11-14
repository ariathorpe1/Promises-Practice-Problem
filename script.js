// dog API
document.getElementById("dog-btn").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("dog-img").src = data.message;
    });
});

// advice API
document.getElementById("advice-btn").addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      document.getElementById("advice-output").textContent = data.slip.advice;
    });
});

// joke API
document.getElementById("joke-btn").addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke-output").textContent = data.joke;
    });
});
