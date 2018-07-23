$(document).ready(function(){

    var questionArray = [
        {
        question: "1.  How often should you be lifting weights?",
        choiceA: "A.	Lift every day for at least 30 minutes.",
        choiceB: "B.	Lift every other day for at least 30 minutes.",
        choiceC: "C.	Lift every day for 60 minutes.",
        choiceD: "D.	Lift every other day for only 10 minutes.",
        answer: "B.	Lift every other day for at least 30 minutes."
        },
        {
        question: "2.  What is the best vegetable that will give you a good source of calcium?",
        choiceA: "A.	Banana",
        choiceB: "B.	Lettuce",
        choiceC: "C.	Broccoli",
        choiceD: "D.	Apple",
        answer: "C.	Broccoli"
        },
        {
        question: "3.  What is the daily amount of steps a person should walk in a day to equal 5 miles?",
        choiceA: "A.	5,000",
        choiceB: "B.	10,000",
        choiceC: "C.	20,000",
        choiceD: "D.	30,000",
        answer: "B.	10,000"
        },
        {
        question: "4.  Which one of these workouts is aerobic?",
        choiceA: "A.	Jumping",
        choiceB: "B.	Lifting Weights",
        choiceC: "C.	Running",
        choiceD: "D.	Sleeping",
        answer: "C.	Running"
        },
        {
        question: "5.  	Which fruit is a good source of potassium?",
        choiceA: "A.	Apple",
        choiceB: "B.	Grape",
        choiceC: "C.	Lettuce",
        choiceD: "D.	Banana",
        answer: "D.	Banana"
        }
    ]

    let i = 0;
    var currentQuestion = questionArray[i].question;
    var currentGuess = "";

    var timer = 20;
    var countdown = "";
    
    // functions:
    var myFunctions = {
        setTimer: function() {
            countdown = setInterval(function(){
                timer--;
                $("#displayTimer").text(timer);
                if (timer <= 0) {
                    clearInterval(countdown);
                    $("#displayAnswer").text("You ran out of time. The correct answer is: " + questionArray[i].answer)
                    setTimeout(function(){myFunctions.nextQuestion()}, 5000)
                }
            }, 1000);
        },
        onClickEvents: function() {
            $("#choiceA").on("click", function() {
                myFunctions.checkAnswer(questionArray[i].choiceA);
                setTimeout(function(){myFunctions.nextQuestion()}, 5000)
            })
            $("#choiceB").on("click", function() {
                myFunctions.checkAnswer(questionArray[i].choiceB);
                setTimeout(function(){myFunctions.nextQuestion()}, 5000)
            })
            $("#choiceC").on("click", function() {
                myFunctions.checkAnswer(questionArray[i].choiceC);
                setTimeout(function(){myFunctions.nextQuestion()}, 5000)
            })
            $("#choiceD").on("click", function() {
                myFunctions.checkAnswer(questionArray[i].choiceD);
                setTimeout(function(){myFunctions.nextQuestion()}, 5000)
            })
        },
        checkAnswer: function(currentGuess) {
            clearInterval(countdown);
            if (currentGuess == questionArray[i].answer) {
                $("#displayAnswer").text("That's right!");
            }else {
                $("#displayAnswer").text("The correct answer is: " + questionArray[i].answer);
            }
        },
        nextQuestion: function() {
            i++;
            if (i > 4) {
                clearInterval(countdown);
                $("#displayAnswer").text("");
                $("#choiceA").text("");
                $("#choiceB").text("");
                $("#choiceC").text("");
                $("#choiceD").text("");
                $("#currentQuestion").text("You've finished the quiz! ")
                .append($('<br></br><button class="btn btn-secondary">Restart the Quiz</button>'))
                .click(function() {
                    i=-1;
                    console.log(i);
                    myFunctions.nextQuestion();
                })
            }else {
                var currentGuess = "";
                timer = 20;
                $("#displayTimer").text(timer);
                $("#currentQuestion").text(questionArray[i].question);
                $("#choiceA").html('<button id="buttonA" class="btn btn-outline-dark"></button>');
                $("#buttonA").text(questionArray[i].choiceA)
                $("#choiceB").html('<button id="buttonB" class="btn btn-outline-dark"></button>');
                $("#buttonB").text(questionArray[i].choiceB);
                $("#choiceC").html('<button id="buttonC" class="btn btn-outline-dark"></button>');
                $("#buttonC").text(questionArray[i].choiceC);
                $("#choiceD").html('<button id="buttonD" class="btn btn-outline-dark"></button>');
                $("#buttonD").text(questionArray[i].choiceD);
                $("#displayAnswer").text("");
                myFunctions.setTimer();
            }
            return i;
        }
    };
    
    // quiz logic
    $("#displayTimer").text(timer);
    $("#currentQuestion").text(questionArray[i].question);
    $("#choiceA").html('<button id="buttonA" class="btn btn-outline-dark"></button>');
    $("#buttonA").text(questionArray[i].choiceA)
    $("#choiceB").html('<button id="buttonB" class="btn btn-outline-dark"></button>');
    $("#buttonB").text(questionArray[i].choiceB);
    $("#choiceC").html('<button id="buttonC" class="btn btn-outline-dark"></button>');
    $("#buttonC").text(questionArray[i].choiceC);
    $("#choiceD").html('<button id="buttonD" class="btn btn-outline-dark"></button>');
    $("#buttonD").text(questionArray[i].choiceD);
    $("#displayAnswer").text("");
    myFunctions.setTimer();
    myFunctions.onClickEvents();

});