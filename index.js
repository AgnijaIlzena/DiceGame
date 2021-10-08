const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2)
// {document.querySelector("h1").textContent = "🎈Player 1 Wins!"} ;

// if(randomNumber2 > randomNumber1)
// {document.querySelector("h1").textContent = "Player 2 Wins! 🎈"}

// if(randomNumber1 == randomNumber2)
// {document.querySelector("h1").textContent = "Draw!"}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🎈Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🎈";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
