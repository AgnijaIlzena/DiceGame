
const randomNumber1 =Math.floor(Math.random()*6)+1;
const randomImageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);



const randomNumber2 = Math.floor(Math.random()*6)+1;
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);