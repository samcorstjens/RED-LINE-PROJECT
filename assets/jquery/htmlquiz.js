var allQuestions = [ {
    question: "What does HTML stand for?",
    choices: [ "Hyper Text Markup Language", "Hyper Text Mode Leftout", "Hypter test Markup Language", "Hight the max length" ],
    correctAnswer: 0
}, {
    question: "How many types of headers are there in an html?",
    choices: [ "5", "6", "3", "1", "8" ],
    correctAnswer: 1
}, {
    question: "Must you place !Doctype html?",
    choices: [ "Yes", "No" ],
    correctAnswer: 0
}, {
    question: "The header element is appropriate to use ...",
    choices: [ "Inside the footer", "Inside of the head tag", "Inside the body tag", "At the top of the document" ],
    correctAnswer: 2
}, {
    question: "Which attribute contains the URL address of the webpage that is loaded after a form",
    choices: [ "Action", "ID", "Method", "Name" ],
    correctAnswer: 1
}, {
    question: "When formatting text, can you get the same result when using different tags?",
    choices: [ "NO", "Probably", "Maybe", "Yes" ],
    correctAnswer: 3
}, {
    question: "Which of these tags are all table tags?",
    choices: [ "Table, tr, tt", "Table, tr, td", "Thead, body, tr", "tr, tt, dd" ],
    correctAnswer: 1
}, {
    question: "Which one of the following is a cointainer?",
    choices: [ "SELECT", "BODY", "Neither SELECT or BODY", "Both SELECT and BODY" ],
    correctAnswer: 3
}, {
    question: "Input is a?",
    choices: [ "Format tag", "Empty tag", "Both a format and empty tag", "Neither a format or an empty tag" ],
    correctAnswer: 1
}, {
    question: "Which of the following attributes of text box control allow you to limit the maximum amount of characters?",
    choices: [ "Size", "Len", "Maxlength", "None of the above" ],
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
