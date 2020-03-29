var questions = [
  ['What is Emma\'s name?', 'Emma'],
  ['What is Ollie\'s name?', 'Ollie'],
  ['What number house do we live in?', '17']
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var incorrect = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if (answer === response){
    correctAnswers += 1;
    correct.push(question);
  }
  else {
      incorrect.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) correct";
html += '<h2>You got these right:</h2>';
html += buildList(correct);
html += '<h2>You got these wrong:</h2>';
html += buildList(incorrect);

print(html)
