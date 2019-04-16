var allQuestions = [ {
    question: "Javascript is __ language.",
    choices: [ "Application", "Programming", "Scripting", "Developer" ],
    correctAnswer: 2
}, {
    question: "Javascript is __ Side Scripting Language.",
    choices: [ "Browser", "Server", "ISP", "Database" ],
    correctAnswer: 0
}, {
    question: "What is JavaScript designed for?",
    choices: [ "To Perform Server Side Scripting Operation", "To add interactivity to HTML Pages", "To Style HTML Pages", "To execute Query related to the server" ],
    correctAnswer: 1
}, {
    question: "State the correct place of JS code inside HTML.",
    choices: [ "Inside Head", "Inside Body", "Inside single javacript files", "All of the above" ],
    correctAnswer: 3
}, {
    question: "Which of the following Attributes is used to include External JS code inside you HTML Document?",
    choices: [ "src", "script", "ext", "link" ],
    correctAnswer: 0
}, {
    question: "__ attribute is used to specify the character encoding used in an external script file.",
    choices: [ "Charset", "Character", "Type", "None of the above" ],
    correctAnswer: 0
}, {
    question: "Javascript code contain sequence of __.",
    choices: [ "Executable Statements", "Method Calls", "HTML Tags", "All of these" ],
    correctAnswer: 3
}, {
    question: "How many values can a variable hold?",
    choices: [ "Single", "Double", "Multiple", "None" ],
    correctAnswer: 0
}, {
    question: "We can declare all type of variables in Javascript with the keyword __",
    choices: [ "obj", "var", "jvar", "All of the above" ],
    correctAnswer: 1
}, {
    question: "Which Javascript variable cannot be used as First character but can be used after first character?",
    choices: [ "Dollar Sign", "Digit", "Asterisk", "Underscore" ],
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
