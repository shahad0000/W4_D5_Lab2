
// Buttons
let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

// Lights 
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

stopButton.onclick = () => {
    stopLight.style.background = "radial-gradient(red,rgba(225, 18, 18, 0.72))";
    slowLight.style.background =  "radial-gradient(#111, #111";;
    goLight.style.background =  "radial-gradient(#111, #111";
}
slowButton.onclick = () => {
    stopLight.style.background =  "radial-gradient(#111, #111";
    slowLight.style.background = "radial-gradient(gold,rgba(238, 194, 73, 0.72))";
    goLight.style.background = "radial-gradient(#111, #111";
}

goButton.onclick = () => {
    stopLight.style.background =  "radial-gradient(#111, #111";
    slowLight.style.background =  "radial-gradient(#111, #111";
    goLight.style.background = "radial-gradient(limeGreen, green)";
}