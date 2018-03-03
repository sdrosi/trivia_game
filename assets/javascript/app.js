//variables
var seconds = 13;
var countDown;
var correct = 0;
var incorrect = 0;
var missed = 0;
var currentQuestion;
var answered;
var userGuess;
var choice;

//questions
var questionOptions= [
    {
    question: "Which artist was commonly called the 'Pope of Pop'?",
    options: ["Claude Monet ", "Jackson Pollock ", "Andy Warhol ", "Henri Matisse "],
    answer: 2,
    },

    {
    question: "Who is the most famous American abstract artist?",
    options: ["Georgia O'Keeffe", "Andy Warhol", "Henri Matisse", "Jackson Pollock"],
    answer: 3,
    },

    {
    question: "Which of these artists created the most famous masterpieces of Surrealist art?",
    options: ["Salvador Dali", "Claude Monet", "Andy Warhol", "Frida Khalo"],
    answer: 0,
    },

    {
    question: "This artist is best known for their creation: 'The Starry Night'.",
    options: ["Pablo Picasso", "Vincent van Gogh", "Andy Warhol", "Salvador Dali"],
    answer: 1,
    },

    {
    question: "Who is best known as the 'leading figure of American Modernism'?",
    options: ["Henri Matisse", "Wassily Kandinsky", "Andy Warhol", "Georgia O'Keeffe"],
    answer: 3,
    },

    {
    question: "Which of the following Abstract Expressionist artists tended to use rectangles of bold, vibrant color?",
    options: ["Salvador Dali", "Mark Rothko", "Andy Warhol", "Georgia O'Keeffe"],
    answer: 1,
    },

    {
    question: "Which of the following Abstract Expressionist artists tended to use rectangles of bold, vibrant color?",
    options: ["Salvador Dali", "Mark Rothko", "Andy Warhol", "Georgia O'Keeffe"],
    answer: 1,
    },
];

//when page loads, hide answer container
$(document).ready(function() {
    console.log("READY!");
    $(".answer-container").hide();
    $("#results").hide();

});

//set ip game with empty arrays, initialize first question
//should have made a reset button that would have cleared the scoreBoard when a new game was initialized
function setGame() {
    $("questions").empty();
    $("#results").hide();
    $("#scoreBoard").hide();
    correct = 0;
    incorrect = 0;
    missed = 0;
    currentQuestion = 0;
    answered = 0;
    seconds = 13;
    addQues();
};




//add questions to id questions
function addQues() {
    if (currentQuestion < 6) {
    $(".answer-container").show();
    $("#scoreBoard").show();
    $("#questions").html("<h3>" + questionOptions[currentQuestion].question + "</h3>");
//add answer options to id answer-options
//could make this more efficient with a for loop
    $("#answer-option1").html(questionOptions[currentQuestion].options[0]);
    $("#answer-option2").html(questionOptions[currentQuestion].options[1]);
    $("#answer-option3").html(questionOptions[currentQuestion].options[2]);
    $("#answer-option4").html(questionOptions[currentQuestion].options[3]);
    choice = questionOptions[currentQuestion].answer;
    timer();
    seconds = 13;}
    //if current question === 7 end game
    else {
        endGame();
    };
    
};


//store user guess as userGuess
// function addUserGuessClickHandler() {
    $(".guess").on("click", function() {
        clearInterval(countDown);
        seconds = 13;
        console.log("You clicked me!");
        console.log(this.value);
        userGuess = this.value;
        console.log("Userguess= " + userGuess);
        console.log(choice);
        if (choice == userGuess && currentQuestion < 6) {
            console.log("Correct!")
            correct++;
            currentQuestion++;
            $("#correct").html("<h4>Correct: " + correct + "</h4>");
            addQues();
        }
        else {
            incorrect++;
            clearInterval(countDown);
            seconds = 13;
            console.log("nope: " + incorrect);
            currentQuestion++;
            $("#incorrect").html("<h4>Incorrect: " + incorrect + "</h4>");
            stop();
            addQues();
            }
        });

        function endGame () {
            $(".answer-container").hide();
            $("#results").show();            
        }
    
        //Timing functions

        function timer() {
            clearInterval(countDown);
            countDown = setInterval(decrement, 1000);
        };

        function decrement() {
            seconds--;
            $("#timer").html("<h4>Time left: " + seconds + "</h4>")
            console.log(seconds);
            if (seconds === 0) {
                stop(); {
                    clearInterval(countDown);
                    currentQuestion = currentQuestion + 1;
                    console.log(currentQuestion);
                    addQues();
                    missed++;
                    console.log(missed);
                    $("#missed").html("<h4>Missed: " + missed + "</h4>");
                }
            }
        };

       
    

        //

$("#start").on("click", setGame);



