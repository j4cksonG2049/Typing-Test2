const input= document.getElementById("typing-input");

const words=["the ","of ","and ","a ","to ","in ","is ","you ","that ",
"it ","he ","was ","for ","on ","are ","as ","with ","his ","they ","I ",
"at ","be ","this ","have ","from ","or ","one ","had ","by ","word ","but ",
"not ","what ","all ","were ","we ","when ","your ","can ","said ","there ","use ",
"an ","each ","which ","she ","do ","how ","their ","if ","will ","up ","other ","about ",
"out ","many ","then ","them ","these ","so ","some ","her ","would ","make ","like ","him ",
"into ","time ","has ","look ","two ","more ","write ","go ","see ","number ","no ","way ","could ",
"people ","my ","than ","first ","water ","been ","call ","who ","oil ","its ","now ","find ","long ",
"down ","day ","did ","get ","come ","made ","may ","part ",
"during ", "planet ", "bridge ", "castle ", "jungle ", "silver ", "rocket ", "green ", "yellow ", "purple ", "orange ", "forest ", "mountain ", "river ", "ocean ", "cloud ", "storm ",
"window ", "garden ", "school ", "teacher ", "student ", "family ", "friend ", "house ", "street ", "market ",
"music ", "movie ", "picture ", "story ", "book ", "paper ", "computer ", "keyboard ", "screen ", "phone ",
"happy ", "strong ", "bright ", "small ", "large ", "quick ", "slow ", "early ", "night ", "morning ",
"summer ", "winter ", "spring ", "autumn ", "travel ", "world ", "country ", "city ", "animal ", "future "];

const wordDisplay=document.getElementById("word-display");

const result = document.getElementById("result");

const startButton = document. getElementById("start-button");

let correctWords= 0;

let incorrectWords= 0;

let correctCharacters= 0;

let incorrectCharacters= 0;

let wordWasIncorrect = false;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.dataset.theme = savedTheme;
}

const wordCount= document.getElementById("word-count");

const wordincorrectCount= document.getElementById("word-count-incorrect");

const timer=document.getElementById("countdown");

const timeOptions = document.querySelectorAll(".timer");

let testRunning= false;
let countdown;

function getRandomWord(){
    const randomIndex= Math.floor(Math.random() *words. length);
    const randomWord=words[randomIndex];
    return randomWord;
}
let randomWord=getRandomWord();

wordDisplay.textContent= randomWord;

input.addEventListener("input", function(){
    console.log(input.value);


    if (!testRunning){
        return;
    }

    if (input.value===randomWord) {
    result.textContent=("Correct!");

    correctWords = correctWords + 1;

    wordWasIncorrect = false;

    wordCount.textContent = "Words correct:" + correctWords;

    input.value="";

    randomWord=getRandomWord();

    wordDisplay.textContent=randomWord;

    } else if(randomWord.startsWith(input.value)){

        result.textContent="";

    } else{
        
        result.textContent="Incorrect!";

        if (!wordWasIncorrect) {
        incorrectWords = incorrectWords + 1;
        wordincorrectCount.textContent = "Incorrect Words:" + incorrectWords;
        wordWasIncorrect = true;
    }
}});

let selectedTime;

for(let option of timeOptions){

    option.addEventListener("click", function(){

        selectedTime = option.value;

        if(testRunning){
            return;
        }

        correctWords = 0;
        incorrectWords = 0;

        wordCount.textContent = "Words Correct: 0"

        console.log(selectedTime);


        let timeLeft = Number(selectedTime);

        testRunning = true;

        input.focus();

        countdown = setInterval(function(){

            timeLeft = timeLeft - 1;

            timer.textContent = timeLeft;

            if(timeLeft === 0){

                clearInterval(countdown);
                testRunning = false;

                let totalWords = correctWords + incorrectWords;

                let accuracy = Math.round((correctWords / totalWords) * 100);

                if(selectedTime === "15"){
                    correctWords = correctWords * 4;
                    localStorage.setItem("wpm15", correctWords);
                    localStorage.setItem("accuracy15", accuracy);
                }

                if(selectedTime === "30"){
                    correctWords = correctWords * 2;
                    localStorage.setItem("wpm30", correctWords);
                    localStorage.setItem("accuracy30", accuracy);
                }

                if(selectedTime === "60"){
                    correctWords = correctWords * 1;
                    localStorage.setItem("wpm60", correctWords);
                    localStorage.setItem("accuracy60", accuracy);
                }

                result.textContent = "Time's Up! You got " + correctWords + " WPM";
            }

        }, 1000);

    });
}

document.getElementById("default-button").addEventListener("click", function() {
    document.body.dataset.theme = "default";
    localStorage.setItem("theme", "default");
});

document.getElementById("dark-button").addEventListener("click", function() {
    document.body.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
});

document.getElementById("light-button").addEventListener("click", function() {
    document.body.dataset.theme = "light";
    localStorage.setItem("theme", "light");
});


