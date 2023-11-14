var headerEl = document.querySelector('#header');
var startButtonEl = document.querySelector('#start-btn');
var firstQuestionEl = document.querySelector('#question-container-1').style.display = "none";
var secondQuestionEl = document.querySelector('#question-container-2').style.display = "none";
var thirdQuestionEl = document.querySelector('#question-container-3').style.display = "none";
var fourthQuestionEl = document.querySelector('#question-container-4').style.display = "none";
var fifthQuestionEl = document.querySelector('#question-container-5').style.display = "none";
var answerResultEL = document.querySelector('#result1');
var answerResultELTwo = document.querySelector('#result2');
var answerResultELThree = document.querySelector('#result3');
var answerResultELFour = document.querySelector('#result4');
var answerResultELFive = document.querySelector('#result5');
var nameSubmit = document.querySelector('#form').style.display = "none";
var userInput = document.querySelector('#initials');
var formBtn = document.querySelector('#userInitials');
var formResultEl = document.querySelector('#form-result').style.display = "none";
var optionEl = document.querySelectorAll('.option');
var timerEl = document.querySelector('#timer');
var count = 60;
var score = 0;
var setTimer;


// Main function to get the quiz and timer started. it will say time is up once it hits 0
function startQuiz() {

    setTimer = setInterval(function () {
        
        count--;
        timerEl.textContent = "Time Left: " + count;

        if (count === 0) {
            clearInterval(setTimer);
            timerEl.textContent = "Time's up!";
        } 

    }, 1000);

    // display the next question and hide the previous question, so only one question displays at a time

    var displayQuestion = document.querySelector('#question-container-1');
    displayQuestion.setAttribute('style', "display: block;");

    var hidePrevious = document.querySelector('header');
    hidePrevious.setAttribute('style', 'display: none;');


}

startButtonEl.addEventListener('click', startQuiz);


// Question 1 


function checkAnswer1(choice) {
    
    var selectedAnswer = choice.textContent;
    var correctAnswer = "a reusable block of code designed to perform a particular task";


    if (selectedAnswer === correctAnswer) {
        answerResultEL.textContent = "Correct!";

        // if you get answer wrong it will subtract 5 seconds off the timer
    } else {

        answerResultEL.textContent = "Incorrect!";
        count -= 5;
    }

    //display the next question and hide the previous after 1 second. This is so you see if you got the answer right or not

    setTimeout(function () {

        var displayQuestion = document.querySelector('#question-container-2');
        displayQuestion.setAttribute('style', "display: block;");


        var hidePrevious = document.querySelector('#question-container-1');
        hidePrevious.setAttribute('style', "display: none;");

        if (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) {
            hidePrevious;

        }
    }, 1000);


}


// Question 2

function checkAnswer2(choice) {
    var selectedAnswer = choice.textContent;
    var correctAnswer = "global scope variables are accessible from any part of your code, and local scope variables are not";


    if (selectedAnswer === correctAnswer) {
        answerResultELTwo.textContent = "Correct!";
        
    } else {
        answerResultELTwo.textContent = "Incorrect!";
        count -= 5;
    }
   
    setTimeout(function () {

        var displayQuestion = document.querySelector('#question-container-3');
        displayQuestion.setAttribute('style', "display: block;");


        var hidePrevious = document.querySelector('#question-container-2');
        hidePrevious.setAttribute('style', "display: none;");

        if (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) {
            hidePrevious;

        }
    }, 1000);


}

// Question 3

function checkAnswer3(choice) {
    var selectedAnswer = choice.textContent;
    var correctAnswer = "false";


    if (selectedAnswer === correctAnswer) {
        answerResultELThree.textContent = "Correct!";
       
    } else {
        answerResultELThree.textContent = "Incorrect!";
        count -= 5;
    }
    
    setTimeout(function () {

        var displayQuestion = document.querySelector('#question-container-4');
        displayQuestion.setAttribute('style', "display: block;");


        var hidePrevious = document.querySelector('#question-container-3');
        hidePrevious.setAttribute('style', "display: none;");

        if (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) {
            hidePrevious;

        }
    }, 1000);


}


// Question 4 

function checkAnswer4(choice) {
    var selectedAnswer = choice.textContent;
    var correctAnswer = "responsive design";


    if (selectedAnswer === correctAnswer) {
        answerResultELFour.textContent = "Correct!";
        
    } else {
        answerResultELFour.textContent = "Incorrect!";
        count -= 5;
    }
    
    setTimeout(function () {

        var displayQuestion = document.querySelector('#question-container-5');
        displayQuestion.setAttribute('style', "display: block;");


        var hidePrevious = document.querySelector('#question-container-4');
        hidePrevious.setAttribute('style', "display: none;");

        if (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) {
            hidePrevious;

        }
    }, 1000);


}

// Question 5

function checkAnswer5(choice) {
    var selectedAnswer = choice.textContent;
    var correctAnswer = "event handlers";


    if (selectedAnswer === correctAnswer) {
        answerResultELFive.textContent = "Correct!";
        
    } else {
        answerResultELFive.textContent = "Incorrect!";
        count -= 5;
    }
  
    setTimeout(function () {

        var displayQuestion = document.querySelector('#form');
        displayQuestion.setAttribute('style', "display: block;");


        var hidePrevious = document.querySelector('#question-container-5');
        hidePrevious.setAttribute('style', "display: none;");

        if (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) {
            hidePrevious;

        }
    }, 1000);

    function stopTimer () {
        clearInterval(setTimer);
        timerEl.textContent = "Finished!";
    };
    stopTimer();
}





// Form function 


formBtn.addEventListener('click', function() { 
    
    var init = userInput.value; 

   
    if (init === userInput) {
        output.textContent = "Initials" + userInput;
        
    }

    localStorage.setItem("initials", init);


    setTimeout(function () {

        var displayQuestion = document.querySelector('#form-result');
        displayQuestion.setAttribute('style', "display: block;");


        var hidePrevious = document.querySelector('#form');
        hidePrevious.setAttribute('style', "display: none;");

        if (init === userInput || init !== userInput) {
            hidePrevious;

        }
    }, 2000);



});
































