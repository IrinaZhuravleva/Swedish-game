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
  question: 'Eva rider. Hon rider två gånger _______ veckan på en ridskola.',
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

tralivali.push({
  question: '_______ vintern åker jag skidor.',
  answers: answers,
  correct: 1,
})

tralivali.push({
  question: 'Jag vare jätteduktig _______ styrketräning.',
  answers: answers,
  correct: 1,
})

tralivali.push({
  question: 'Om du vill gå ner _______ vikt bör du gå på gympa.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Man kan försöka skära ner på fettet _______ maten ock röra på sig mer.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'På morgonen är hans barn så långsamma. Han säger: Skynda _______! , men de lyssnar inte.',
  answers: answers,
  correct: 1,
})

tralivali.push({
  question: 'Jag tycker inte att gå _______ simhallen.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Jag har blivit kär _______ min bäst väns flickvän.',
  answers: answers,
  correct: 2,
})

tralivali.push({
  question: 'Bry dig inte _______ att han luktar.',
  answers: answers,
  correct: 3,
})

tralivali.push({
  question: 'Har du gott _______ pengar?',
  answers: answers,
  correct: 3,
})

tralivali.push({
  question: 'Min kompis och jag har känt varandra _______ mer än tjugo år.',
  answers: answers,
  correct: 2,
})

var currentQuestionIndex = 0;


var correctAnswer = 0;// НЕПРАВИЛЬНАЯ ЛОГИКА ПРИСВОЕНИЯ ЧИСЛА
var result = {
  correct: 0,
  incorrect: 0
}

// текущая_книга = 0
// книги = [1,2,3]

// фукнция ЧИТАТЬ_КНИГУ {
//   если книга последная
//     обунули счётчик
//   иначе
//     читать книги[текущая_книга]
// }


function showQuestion () {

  if(currentQuestionIndex === tralivali.length){
    currentQuestionIndex = 0;
   // alert("Правильных ответов " + correctAnswer + "Неправильных ответов " + (tralivali.length - correctAnswer));

  } 

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
    alert("WELL DONE! COOL!!!!!!!!!!!!!!!!!!!!");
    correctAnswer++; //

    // clearAnswersHTML();
    // currentQuestionIndex++;
    // showQuestion();
  } else {
    alert("Incorrect((((((((((( Try again");
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