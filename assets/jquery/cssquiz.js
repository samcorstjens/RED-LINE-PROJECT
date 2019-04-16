var allQuestions = [ {
    question: "What are style sheets used for?",
    choices: [ "To control the look and feel of web documents", "To script web pages", "To store the keywords of web pages", "To define the structure of web documents" ],
    correctAnswer: 0
}, {
    question: "Which of the values below is NOT applicable for the text-align property?",
    choices: [ "Left", "Center", "Even", "Right" ],
    correctAnswer: 2
}, {
    question: "Which measurement units cannot be used with the word-spacing property?",
    choices: [ "Feet and Yards", "Pixels", "Points", "cm, mm and inches" ],
    correctAnswer: 0
}, {
    question: "Which property value is used to have an animation repeat forever?",
    choices: [ "Continue", "Repeat", "Infinity", "Infinite" ],
    correctAnswer: 3
}, {
    question: "Which of the following selectors selects an element that has no children?",
    choices: [ ":nochild", ":empty", ":no-child", ":inheritance" ],
    correctAnswer: 1
}, {
    question: "In how many ways can border-image-width CSS property be defined?",
    choices: [ "4", "5", "6", "7", "8", "9" ],
    correctAnswer: 5
}, {
    question: "Which of the following property is used to change the background in a table?",
    choices: [ "Table-background", "Background", "Color", "None of the above" ],
    correctAnswer: 1
}, {
    question: "Which of the following property is used to apply visual effects to associated elements?",
    choices: [ "Filter", "Effect", "Adjust", "None of the mentioned" ],
    correctAnswer: 0
}, {
    question: "Which of the following values are accepted by the float Property?",
    choices: [ "Left", "Right", "Neither", "Both" ],
    correctAnswer: 3
}, {
    question: "Which of the following properties controls how spaces, tabs and newline characters are handled in an element?",
    choices: [ "Space", "White-space", "Widows", "Display" ],
    correctAnswer: 1
} ];

var Vraag = 0;

var correctAnswers = 0;

function setupOptions() {
    $("#question").html(parseInt(Vraag) + 1 + ". " + allQuestions[Vraag].question);
    var a = allQuestions[Vraag].choices;
    var b = "";
    for (var c = 0; c < a.length; c++) b += '<div><input type="radio" name="option" value="' + c + '" id="option' + c + '"><label for="option' + c + '">' + allQuestions[Vraag].choices[c] + "</label></div><br/>";
    $("#form").html(b);
    $("#option0").prop("checked", true);
}

function checkAns() {
    if ($("input[name=option]:checked").val() == allQuestions[Vraag].correctAnswer) correctAnswers++;
}

$(document).ready(function() {
    $(".jumbotron").hide();
    $("#start").click(function() {
        $(".jumbotron").fadeIn();
        $(this).hide();
    });
    setupOptions();
    $("#next").click(function() {
        event.preventDefault();
        checkAns();
        Vraag++;
        if (Vraag < allQuestions.length) {
            setupOptions();
            if (Vraag == allQuestions.length - 1) {
                $("#next").html("Submit");
                $("#next").click(function() {
                    $(".jumbotron").hide();
                    $("#result").html("You correctly answered " + correctAnswers + " out of " + Vraag + " questions! ");
                    if (correctAnswers < 5) {
                        $("#continue").html("You failed the TEST! Try again!");
                        $("#redo").css("visibility", "visible");
                    }
                    if (correctAnswers >= 5) {
                        $("#continue").html("You passed the TEST! Return to main-learning screen for another one or visit sololearn for more info about this subject!");
                        $("#finished").css("visibility", "visible");
                    }
                });
            }
        }
    });
});
