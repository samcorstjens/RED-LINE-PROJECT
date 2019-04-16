var allQuestions = [ {
    question: "What are the key features that SASS includes?",
    choices: [ "Full CSS3-compatible", "Language extensions such as nesting,variables and mixins", "Many usefull functions for manipulating colors and other values", "All of the above" ],
    correctAnswer: 3
}, {
    question: "What is the correct way to define a variable in Sass?",
    choices: [ "$primary-color:#888", "@primary-color:#888", "%primary-color:#888", "#primary-color:#888" ],
    correctAnswer: 0
}, {
    question: "Which of the following are types of mixin arguments?",
    choices: [ "Keyword Arguments", "Ariable Arguments", "Both", "Neither" ],
    correctAnswer: 2
}, {
    question: "What are the data types that SassScript supports?",
    choices: [ "Numbers", "Strings of texts", "Colors", "All of the above" ],
    correctAnswer: 3
}, {
    question: "Which of the following directive displays the SassScript expression value as fatal error?",
    choices: [ "@error", "@warn", "@warning", "@at-root" ],
    correctAnswer: 0
}, {
    question: "In __ directive, a variable is defined which contains the value of each item in a list.",
    choices: [ "@if", "@each", "@for", "@while" ],
    correctAnswer: 1
}, {
    question: "What is the use of the @return directive in Sass?",
    choices: [ "Used to define the mixin", "Used to include the mixins in the document", "Used to call the return value for the function", "None of the above" ],
    correctAnswer: 2
}, {
    question: "What is Rack?",
    choices: [ "Web server interface", "Web framework", "Web application framework", "Web app development" ],
    correctAnswer: 0
}, {
    question: "__ is a web application framework, which provides speed and modularity to Rails.",
    choices: [ "Rails", "Rack", "Merb", "Var" ],
    correctAnswer: 2
}, {
    question: "Which one of the following allows you to generate styles in a loop?",
    choices: [ "@while", "@if", "@for", "@each" ],
    correctAnswer: 2
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
