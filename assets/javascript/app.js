//variables
var seconds = 21;
var countDown;
var correct;
var incorrect;
var missed;
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
];


//create a button to start game in id instructions
function setGame() {
    $("questions").empty();
    correct = 0;
    wrong = 0;
    missed = 0;
    currentQuestion = 0;
    answered = 0;
    addQues();

};
//add questions to id questions
function addQues() {
    $("#questions").html("<h3>" + questionOptions[currentQuestion].question + "</h3>");
//add answer options to id answer-options
    $("#answer-option1").html(questionOptions[currentQuestion].options[0]);
    $("#answer-option2").html(questionOptions[currentQuestion].options[1]);
    $("#answer-option3").html(questionOptions[currentQuestion].options[2]);
    $("#answer-option4").html(questionOptions[currentQuestion].options[3]);
    choice = questionOptions[currentQuestion].answer;
    
};


//store user guess as userGuess
// function addUserGuessClickHandler() {
    $(".guess").on("click", function() {
        console.log("You clicked me!");
        console.log(this.value);
        userGuess = this.value;
        console.log("Userguess= " + userGuess);
        console.log(choice);
        if (choice == userGuess && currentQuestion < 4) {
            console.log("Correct!")
            correct++;
            currentQuestion++;
            addQues();
        }
        else {
            console.log("nope!");
            incorrect++;
            addQues();
            currentQuestion++;
        }

    });

function timer() {
    clearInterval(countDown);
    countDown = setInterval(decrement, 1000);
};

function decrement() {
    seconds--;
    $("#timer").html("Time left: " + seconds)
    console.log(seconds);
    if (seconds === 0) {
        stop(); {
            clearInterval(countDown);
        }
    }
};

       
    

    

setGame();
$("#start").on("click", timer);



