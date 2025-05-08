
// Buttons
let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

// Lights 
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

stopButton.onclick = () => {
    stopLight.style.backgroundColor = "red";
    slowLight.style.backgroundColor = "#111";
    goLight.style.backgroundColor = "#111";
}
slowButton.onclick = () => {
    stopLight.style.backgroundColor = "#111";
    slowLight.style.backgroundColor = "gold";
    goLight.style.backgroundColor = "#111";
}

goButton.onclick = () => {
    stopLight.style.backgroundColor = "#111";
    slowLight.style.backgroundColor = "#111";
    goLight.style.backgroundColor = "limeGreen";
}