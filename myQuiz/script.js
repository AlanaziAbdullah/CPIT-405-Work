const confirmBtn = document.getElementById("confirmBtn");
const scoreArea = document.querySelector(".score");

const questionsSection = document.querySelector(".questions");
const timeoutSection = document.querySelector(".timeout");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const wrong1 = document.getElementById("wrong1");
const wrong2 = document.getElementById("wrong2");
const wrong3 = document.getElementById("wrong3");
const wrong4 = document.getElementById("wrong4");
const wrong5 = document.getElementById("wrong5");
const wrong6 = document.getElementById("wrong6");
const wrong7 = document.getElementById("wrong7");
const wrong8 = document.getElementById("wrong8");
const wrong9 = document.getElementById("wrong9");
const wrong10 = document.getElementById("wrong10");
const wrong11 = document.getElementById("wrong11");
const wrong12 = document.getElementById("wrong12");

const seconds = document.getElementById("seconds");

var intervalId = null;
var secs = 0;
var myTimer = function () {
    if (secs < 30) {
        secs++;
        seconds.innerHTML = 30 - secs;
        
    } else {
        clearInterval(intervalId);
        confirmBtn.classList.add('hideBtn');
        questionsSection.classList.add('hideSection');
        timeoutSection.classList.add('showSection');
    }
};

window.onload = function () {
    intervalId = setInterval(myTimer, 1000);
};



confirmBtn.onclick = () => {
    var score = 0;
    clearInterval(intervalId);
    if (document.getElementById('correct1').checked) {
        score++;
        // answer1.classList.add('rightAnswer');
    }
    if (document.getElementById('correct2').checked) {
        score++;
        // answer2.classList.add('rightAnswer');
    }
    if (document.getElementById('correct3').checked) {
        score++;
        // answer3.classList.add('rightAnswer');
    }
    if (document.getElementById('correct4').checked) {
        score++;
        // answer4.classList.add('rightAnswer');
    }

    // alert('You Got ' + score + ' out of 4');
    scoreArea.classList.add('activeScore');
    document.getElementById('score-text').innerHTML = "You Got " + (score/4) * 100 + 
    "% in " + secs + " seconds!";
    confirmBtn.classList.add('hideBtn');
    answer1.classList.add('rightAnswer');
    answer2.classList.add('rightAnswer');
    answer3.classList.add('rightAnswer');
    answer4.classList.add('rightAnswer');

    questionsSection.classList.add('disabledSection');

    document.querySelector("#wrong1").classList.add('wrongAnswer');
    document.querySelector("#wrong2").classList.add('wrongAnswer');
    document.querySelector("#wrong3").classList.add('wrongAnswer');
    document.querySelector("#wrong4").classList.add('wrongAnswer');
    document.querySelector("#wrong5").classList.add('wrongAnswer');
    document.querySelector("#wrong6").classList.add('wrongAnswer');
    document.querySelector("#wrong7").classList.add('wrongAnswer');
    document.querySelector("#wrong8").classList.add('wrongAnswer');
    document.querySelector("#wrong9").classList.add('wrongAnswer');
    document.querySelector("#wrong10").classList.add('wrongAnswer');
    document.querySelector("#wrong11").classList.add('wrongAnswer');
    document.querySelector("#wrong12").classList.add('wrongAnswer');

}
