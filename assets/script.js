var headerEl = document.querySelector('#header');
var startButtonEl = document.querySelector('#start-btn');
var firstQuestionEl = document.querySelector('#question-1').style.display = "none";
var secondQuestionEl = document.querySelector('#question-2').style.display = "none";
var thirdQuestionEl = document.querySelector('#question-3').style.display = "none";
var fourthQuestionEl = document.querySelector('#question-4').style.display = "none";
var fifthQuestionEl = document.querySelector('#question-5').style.display = "none";
var timerEl = document.querySelector('#timer');
var count = 60;

// Main function to get the quiz and timer started
function startQuiz() {



    var setTimer = setInterval(function () {

        count--;
        timerEl.textContent = "Time Left: " + count;

        if (count === 0) {
            clearInterval(setTimer);

        }


    }, 1000);

    // First question

    function questionOne() {

        var choiceArray = ['a reusable block of code designed to perform a particular task', 'a block of code that cannot be used more than once',
        'functions are not real', 'functions are used to store variables'];
        

        var displayQuestion = document.querySelector('#question-1');
        displayQuestion.setAttribute('style', "display: block;");

        var hidePrevious = document.querySelector('header');
        hidePrevious.setAttribute('style', 'display: none;');


    }
    questionOne();


    

}







startButtonEl.addEventListener('click', startQuiz);







