var player1 = localStorage.getItem("Player_1");
var player2 = localStorage.getItem("Player_2");

var questionTurn = player1;
var answerTurn = player2;

var number1;
var number2;
var result;

var score_player1 = 0;
var score_player2 = 0;

var answer;

document.getElementById("player1_name").innerHTML = player1;
document.getElementById("score1").innerHTML = score_player1;

document.getElementById("player2_name").innerHTML = player2;
document.getElementById("score2").innerHTML = score_player2;

document.getElementById("question_turn").innerHTML = "Question Turn : " + player1;
document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player2;

function sendNumber() {
    number1 = document.getElementById("number_display1").value;
    number2 = document.getElementById("number_display2").value;
    result = number1*number2;
    console.log(result)
    
    question_number = "<h4 id='q'>Q. " + number1 +" X "+ number2 + "</h4>";
    input = "Answer: <input id='input' placeholder='Your Answer' style='color: black;'></input>";
    check = "<button id='check' onclick='checkNumber()' class='btn btn-success'>Check</button>"
    row = question_number + input + "<br>" + "<br>" + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_display1").value = "";
    document.getElementById("number_display2").value = "";
}

function checkNumber() {
    answer = document.getElementById("input").value;
    console.log(answer);
    if (answer == result) {
        if (answerTurn == player1) {
            score_player1 = score_player1 + 1;
            document.getElementById("score1").innerHTML = score_player1;
        }
        if (answerTurn == player2) {
            score_player2 = score_player2 + 1;
            document.getElementById("score2").innerHTML = score_player2;
        }
    }
    if (answerTurn == player1) {
        answerTurn = player2;
        questionTurn = player1;
        document.getElementById("question_turn").innerHTML = "Question Turn : " + player1;
        document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player2;
    }
    if (answerTurn == player2) {
        answerTurn = player1;
        questionTurn = player2;
        document.getElementById("question_turn").innerHTML = "Question Turn : " + player2;
        document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player1;
    }
    document.getElementById("output").innerHTML = "";
}