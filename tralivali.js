var tralivali = [];
var answers = ["-", "på", "i", "om"]

tralivali.push({
  question: 'Mariann tränar sig tre gånger _______ veckan.',
  answers: answers,
  correct: 2
})

tralivali.push({
  question: 'Varje gång tränar hon _______ två timmar ungefär.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Hon springer snabbt, 5 kilometer _______ 15 minuter.',
  answers: answers,
  correct: 1,
})

tralivali.push({
  question: 'Bengt lyssnar på sportnyheter flera gånger _______ dagen.',
  answers: answers,
  correct: 3,
})

tralivali.push({
  question: 'I dag talar de om en man som har sprungit 100 meter _______ 9 sekunder.',
  answers: answers,
  correct: 1,
})

tralivali.push({
  question: 'Örjan har tränat karate _______ 3 år.',
  answers: answers,
  correct: 0,
})

tralivali.push({
  question: 'Han tränar 4 gånger _______ veckan.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Eva rider. Hon rider trå gånger _______ veckan på en ridskola.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Några gånger _______ månader rider hon en kompis häst.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Minst två gånger _______ året åker hon på ridresa till något exotiskt ställe.',
  answers: answers,
  correct: 3,
})


var currentQuestionIndex = 0;

$('button').on('click', function (event) {

})

function showQuestion () {
  var questionToShow = selectQuestion();
  addQuestionToSite(questionToShow);
}

function selectQuestion () {
  return tralivali[currentQuestionIndex];
}

function addQuestionToSite (question) {
  $('.question').html(question.question);

  question.answers.forEach(function(answer, index) {
    $('.answers').append("<button onClick='nextQuestion(" + question.correct + ", " + index + ")'>" + answer + "</button> &nbsp;")
  }) 

}

function nextQuestion (correct, index) {
  if (correct == index) {
    alert("WELL DONE! COOL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    //clearAnswersHTML();
    //currentQuestionIndex++;
    //showQuestion();
  } else {
    alert("incorrect")
  }
}

function nextButtonClickHandler () {
  clearAnswersHTML();
  currentQuestionIndex++;
  showQuestion();
}

function clearAnswersHTML () {
  $('.answers').html("")
} 

$('.nextButton').on('click', function (event) {
 nextButtonClickHandler();
})

showQuestion()