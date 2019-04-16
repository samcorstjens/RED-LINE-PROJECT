var allQuestions = [ {
    question: "Which of the following JQuery methods sets the html contents of an element?",
    choices: [ "html(val)", "setHtml(val)", "setInnerHtml(val)", "None of the above" ],
    correctAnswer: 0
}, {
    question: "Of the following JQuery methods which returns a JQuery collection with the positioned parent fo the first matched element?",
    choices: [ "offsetParent(selector)", "offset(selector)", "parent(selector)", "None of the above" ],
    correctAnswer: 0
}, {
    question: "Which of the following JQuery methods stops the bubbling of an event to parent elements?",
    choices: [ "preventDefault()", "stopImmediatePropagation()", "stopPropagation()", "None of the above" ],
    correctAnswer: 2
}, {
    question: "Can you pass a anonymous function as an argument to another function?",
    choices: [ "True", "False" ],
    correctAnswer: 0
}, {
    question: "Which built-in method changes the order of the elements of an array from last to first?",
    choices: [ "changeOrder(order)", "reverse()", "sort(order)", "None of the above" ],
    correctAnswer: 1
}, {
    question: "Which of the following JQuery method removes all child nodes from a set of matched elements?",
    choices: [ "empty()", "delete()", "remove()", "errase()" ],
    correctAnswer: 0
}, {
    question: "Which JQuery is used to hide selected elements?",
    choices: [ "visible(false)", "display(none)", "hidden()", "hide()" ],
    correctAnswer: 3
}, {
    question: "$.foo() is equivalent to...",
    choices: [ "javascript.foo()", "document.foo()", "JQuery.foo()", "scc.foo()" ],
    correctAnswer: 2
}, {
    question: "Which of the following JQuery methods checks the current selection against an expression?",
    choices: [ "getIs(selector)", "is(selector)", "checkIs(selector)", "get(selector)" ],
    correctAnswer: 1
}, {
    question: "The ___ method is used to represent an array or an object in serialize manner.",
    choices: [ "size()", "length()", "param()", "parameter()" ],
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
