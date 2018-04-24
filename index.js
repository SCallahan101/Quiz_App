'use strict';
const mangaQuestions = [
  { 
    theQuestion: `Modern manga got its start in a period of expanding artistic creativity. When was that?`,
    A: ` 1920-1925`,
    B: ` 1945-1952`, 
    C: ` 2005-2010`, 
    D: ` 1990-2000`,
    answer: `B`,
    feedback: `Although modern manga came to be amid an expansion of artistic creativity during the US occupation of Japan between 1945 and 1952, their origins can be traced centuries back.` ,
  }, 
  { 
    theQuestion: `Which of these was the old-school modern manga that became famous from 1952 to 1968?`,
    A: ` Akira`,
    B: ` InuYasha`, 
    C: ` Mighty Atom: Astro Boy`, 
    D: ` Fruits Baskets`,
    answer: `C`,
    feedback: `Astro Boy is famous manga series written and illustrated by Osamu Tezuka, and it was published between 1952 and 1968. It’s also known as Mighty Atom. Astro Boy is a science fiction comic set in a futuristic planet where Robots co-exist with humans.`,
  },
  { 
    theQuestion: `One Piece is one of the best-known mangas. How many copies did it sell in 2016?`,
    A: ` 380 Million`,
    B: ` 211 Million`, 
    C: ` 100 Million`, 
    D: ` 500 Million`,
    answer: `A`,
     feedback: `It follows the adventures of Monkey D. Luffy, a young man whose body gained the properties of rubber after unintentionally eating a Devil Fruit. It is written by Eiichiro Oda and the first volume was published in 1997, and it’s still being published. In 2016, the manga has 380 million copies printed worldwide, making it the best-selling manga series in history.`,
  },
  { 
    theQuestion: `Manga in Japan currently consumes more paper than which of these paper products?`,
    A: ` Notebooks`,
    B: ` Wallpaper`, 
    C: ` Office paper`, 
    D: ` Toilet paper`,
    answer: `D`,
    feedback: `Manga are a billion-dollar industry. Sales of these fat comics account for close to a third of the total output of publishing houses here and amount to a whopping 553 million copies a year. More than 500 categories of manga are released each month. Some playful commentators once estimated that the Japanese use more paper for the telephone-book-size comics than for toilet paper.`,
  },
  { 
    theQuestion: `When did manga take the world by storm, especially Southeast Asian nations, and Europe and the US too?`,
    A: ` Early 1970s`,
    B: ` Late 2010s`, 
    C: ` Late 1980s`, 
    D: ` Early 2000s`,
    answer: `C`,
    feedback: `Since the late 1980s, Japanese manga has taken the world by storm. The influence of manga on the comics market has increased significantly in the last two decades, but it had also had an aesthetic effect on comic artists around the globe.`,
  },
  { 
    theQuestion: `The biggest manga influence occurs in one of these european countries. So, which one is it?`,
    A: ` France`,
    B: ` Belgium`, 
    C: ` Germany`, 
    D: ` Greece`,
    answer: `A`,
    feedback: `European market opened its doors for manga during the 1970s. The biggest European manga market is definitely France, having a share of 50% in the continent’s manga market and with manga comics representing 40% of all the comics being published in the country.`,
  },
  {}
];

let currentQuestionNumber = 1;
let score = 0

function renderScoreAndQuestion() {
   console.log('score ran');
  $('.score-section').html(
      `<span id='your-score'>Current Score: ${score} out of 6</span>
      <span id='current-question'>Current Question: ${currentQuestionNumber} out of 6</span>`
    );
}

function renderQuestion() {
  let question = mangaQuestions[currentQuestionNumber-1];
  console.log("renderQuestion ran");
  $('.container').html(
    `<form class='question-form' role='choice'>
      <fieldset>
        <legend class='question'>${question.theQuestion}</legend>
        <input type="radio" name="choice" id='choice' value= "A"/>${question.A}<br>
        <input type="radio" name="choice" id='choice' value= "B"/>${question.B}<br>
        <input type="radio" name="choice" id='choice' value= "C"/>${question.C}<br>
        <input type="radio" name="choice" id='choice' value="D"/>${question.D}<br>
      </fieldset>
      <input type='submit' value='Your choice?' id='submit'/>
    </form>
    <button id="skip" role='fool users'>Skip the question</button>`
  );
}
console.log('`handleQuestionPage` ran');
  
function renderQuizApp() {
  console.log('`renderQuizApp` ran');
}

function handleStartButton() {
  $("#start").click(function(event){
      $('.container').html(
        `<img src="https://media.giphy.com/media/MeFiwDSGDApHy/giphy.gif" id="start-gif" alt='background of getting ready'>
         <button id='start-quiz'>Let's Go!</button`  
      )
  });
  console.log('`handleStartButton` ran');
}

function handleLetsGoButton() {
  console.log('handleLetsGoButton ran');
  $('.container').on('click', '#start-quiz', function() {
    renderQuestion();
    renderScoreAndQuestion();
  });
}
  
function handleSubmitButton() {
  console.log('handleSubmitButton ran');
  $('.container').on('click', '#submit', function(e) {
    console.log('submission triggered');
    // this is to prevent page reload on submission
    e.preventDefault();
    let val = $(".container input[name=choice]:checked").val();
    if (val) {
    gradeAnswer(val);
    }
  });
}

function gradeAnswer(choice) {
  let correctAnswer = mangaQuestions[currentQuestionNumber-1].answer;
  let userAnswer = choice;
  let correct = false;
  if (userAnswer === correctAnswer) {
    correct = true;
    score++;
  }
  displayFeedbackPage(correct);
  renderScoreAndQuestion();
}

function displayFeedbackPage(correct) {
  let message;
  if (correct) {
    message = `Correct ! <br><img src='https://www.fluentu.com/blog/japanese/wp-content/uploads/sites/6/2014/07/7-tips-learning-japanese-manga.jpg' class='right' alt='manga'/>`;
  } else {
    message = `Incorrect ! <br><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKD46eQy-kzv3ej_p77j3ZfUXLSKeUh5H4LyhUkGdFHPtsdTF5w' alt="manga" class='wrong'/>`;
  }
  let info = mangaQuestions[currentQuestionNumber-1].feedback;
  $('.container').html(
    `<p class='feedback-message' role='result'>Your answer was ${message} <br><span class='feedback-message2'role='info'>${info}</span></p>
     <button class='next-button' role='next question'>Next</button>`
  );
}

function handleNextButton() {
  $('.container').on('click', '.next-button', function() {
    console.log('next button pressed');
    currentQuestionNumber++;
    if (currentQuestionNumber === mangaQuestions.length) {
      handleFinalPage();
    } else {
      renderQuestion();
      renderScoreAndQuestion()
    }
  });
}

function handleFinalPage() {
  console.log('`handleFinalPage` ran');
  $('.container').html(
    `<p class='final-message'>This is the final page!</p>
     <p class='score'>Your score was ${score}/6</p>
     <button class='play-again'>Click here if you want to try again</p>
     <img src='https://media.giphy.com/media/LjTSPzJbcw2sg/giphy.gif' class='doneQuiz' alt='happy dance'/>`  
  );
}

function restartGame() {
  $('.container').on('click', '.play-again', function(){
    currentQuestionNumber = 1;
    score = 0;
    renderQuestion();
    renderScoreAndQuestion();
 
  })
}

function handleScoreBoard() {
 console.log('`handleScoreBoard` ran');
 
}
function handleSkipButton() {
  console.log('`handleSkipButton` ran');
  $(".container").one('click', '#skip', function(e){
    console.log('submission skip');
      $('#skip').append(
        `<img src="https://media.giphy.com/media/3kfrTYuonhgOY/giphy.gif" id="skip-me" alt='gif'/>`
        );
        e.preventDefault();
})}

function handleQuizApp() {
  handleSkipButton()
  handleStartButton();
  handleLetsGoButton();
  handleSubmitButton();
  handleNextButton();
  restartGame();
}

$(handleQuizApp());







