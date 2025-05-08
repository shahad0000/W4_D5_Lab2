let imgs = [
  "",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg",
];

let img = document.getElementById("tv-content");
// Buttons
let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let btn4 = document.getElementById("four");
let btn5 = document.getElementById("five");
let btn6 = document.getElementById("six");
let btn7 = document.getElementById("seven");
let btn8 = document.getElementById("eight");
let btn9 = document.getElementById("nine");

let changeImg = (imgIndex) => {
  img.src = imgs[imgIndex];
};

// handle buttons clicks
btn1.addEventListener("click", () => changeImg(parseInt(btn1.innerText)));
btn2.addEventListener("click", () => changeImg(parseInt(btn2.innerText)));
btn3.addEventListener("click", () => changeImg(parseInt(btn3.innerText)));
btn4.addEventListener("click", () => changeImg(parseInt(btn4.innerText)));
btn5.addEventListener("click", () => changeImg(parseInt(btn5.innerText)));
btn6.addEventListener("click", () => changeImg(parseInt(btn6.innerText)));
btn7.addEventListener("click", () => changeImg(parseInt(btn7.innerText)));
btn8.addEventListener("click", () => changeImg(parseInt(btn8.innerText)));
btn9.addEventListener("click", () => changeImg(parseInt(btn9.innerText)));

