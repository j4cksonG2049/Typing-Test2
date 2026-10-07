let wpm15 = localStorage.getItem("wpm15");

localStorage.removeItem("wpm15");

let accuracy15 = localStorage.getItem("accuracy15")
    
localStorage.removeItem("accuracy15");

let wpm30 = localStorage.getItem("wpm30");

localStorage.removeItem("wpm30");

let accuracy30 = localStorage.getItem("accuracy30")

localStorage.removeItem("accuracy30");

let wpm60 = localStorage.getItem("wpm60");

localStorage.removeItem("wpm60");

let accuracy60 = localStorage.getItem("accuracy60")

localStorage.removeItem("accuracy60");

document.getElementById("15-result").textContent = wpm15;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.dataset.theme = savedTheme;
}

if (accuracy15===null){
    document.getElementById("15-accuracy").textContent = "-%";
} else{
document.getElementById("15-accuracy").textContent = accuracy15 + "%";
}

document.getElementById("30-result").textContent = wpm30;

if (accuracy30===null){
    document.getElementById("30-accuracy").textContent = "-%";
} else {
    document.getElementById("30-accuracy").textContent = accuracy30 + "%";
}

document.getElementById("60-result").textContent = wpm60;

if (accuracy60===null){
    document.getElementById("60-accuracy").textContent = "-%";
} else{
document.getElementById("60-accuracy").textContent = accuracy60 + "%";
}