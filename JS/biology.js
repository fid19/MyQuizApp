let questionList = [
  {
    question: "The Human heart is a ________",
    option: ["Neurogenic Heart", "Myogenic Heart", "Pulsating Heart", "Ampullary Heart"],
    answer: 1
  },
  {
    question: "Who is known as the Father of zoology",
    option: ["Darwin", "Lamark", "Aristotle", "Theoprastus"],
    answer: 2
  },
  {
    question: "Spermology is the study of _______",
    option: ["Fruit", "Pollen-Grain", "Seed", "Leaf"],
    answer: 2
  },
  {
    question: "Animal without red blood cells",
    option: ["Earthworm", "Snake", "Peakcock", "Cow"],
    answer: 0
  },
  {
    question: "The phenomenon of summer sleep my mammals is called?",
    option: ["Hibernation", "Aestivation", "Laziness", "Lethargy"],
    answer: 1
  },
  {
    question: "Bone deformities occur due to excess intake of _______",
    option: ["Potassium", "Phosphorous", "Calcium", "Fluorine"],
    answer: 3
  }
];


let quizNumber = document.getElementById("question-number");
let quizQuestion = document.getElementById("question");
let quizOption = document.getElementById("content");
let nav = document.getElementById("content");

const minutesTime= 2;
let timeCounter = minutesTime * 60;

const countdownTimer = document.getElementById("time");
setInterval(updateTimer, 1000);

function updateTimer (){
  const minutes = Math.floor(timeCounter/60);
  let seconds = timeCounter % 60;

  countdownTimer.innerHTML = `<p>${minutes} : ${seconds}</p>`;
  
  if (timeCounter < 30){
    countdownTimer.style.color = "red";
  } 
  if (timeCounter == 0 ){
    quizNumber.innerHTML = `<h2>FINISHED</h2>`
    while (quizOption.hasChildNodes()) {
      quizOption.removeChild(quizOption.lastChild);
    }
    quizOption.innerHTML = `
    <h1 style="display:block">Your total score: ${totalScore}</h1>
    </div>`;
  }

  if (timeCounter != 0) {
    timeCounter--;
  }
  
}


let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
let submitButton = document.getElementById("submit");

previousButton.style.visibility = "hidden";
submitButton.style.display = "none";

let questionCounter = 0;
let totalScore = 0;
let answerStorage = {};

function SetQuestion() { 
  let currentQuestion = questionList[questionCounter].question;
  quizQuestion.innerHTML = `<h2>${currentQuestion}</h2>`;
  quizNumber.innerHTML = `<h2>Question ${questionCounter+1}</h2>`
 }

 function setOptions() {
   for (let i = 0; i < 4; i++) {
     let labelChoice = document.getElementsByTagName("label")[i];
      
     $("input")[i].setAttribute("value", `${i}`);
     $("input")[i].setAttribute("id", `choice${i}`);
     $("label")[i].setAttribute("for", `choice${i}`);
     
     let labelOptions = `${questionList[questionCounter].option[i]}`;
     labelChoice.innerHTML = labelOptions;
   }
 }



 function scoreCalculator() {
  let userAnswer =  document.querySelector('input[name="choice"]:checked').value;
  let correctAnswer = questionList[questionCounter].answer;

  answerStorage[questionCounter] = userAnswer;
  if (userAnswer == correctAnswer) {
    totalScore = totalScore + 1;
  }
}

function warningAlert () {
  let choice = document.getElementsByTagName("input");
  if (!choice[0].checked && !choice[1].checked && !choice[2].checked && !choice[3].checked) {
    alert("Please select an option");
  }
}

function next(){
  previousButton.style.visibility = "visible";
  warningAlert();
  scoreCalculator();
  questionCounter++;

  if (questionCounter < questionList.length) {
    SetQuestion();
    setOptions();
  }

  if (questionCounter == (questionList.length-1)) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline";
  }

  if (questionCounter == questionList.length) {
    quizNumber.innerHTML = `<h2>FINISHED</h2>`
    while (quizOption.hasChildNodes()) {
      quizOption.removeChild(quizOption.lastChild);
    }
    quizOption.innerHTML = "<h1>Your total score: " + totalScore + "</h1>";
  }
  console.log(answerStorage);
}

function previous() {

  if (questionCounter > 0) {
    questionCounter--;
    SetQuestion();
    setOptions();
    $(`input[name="choice"][value="${answerStorage[questionCounter]}"]`).attr("checked", true);
  }

  if (questionCounter == 0) {
    previousButton.style.visibility = "hidden";
  }
}

window.onload = SetQuestion();
window.onload = setOptions();

// let quizNumber = document.getElementById("question-number");
// let quizQuestion = document.getElementById("question");
// let quizOption = document.getElementById("input-group");

// let nextButton = document.getElementById("next");
// let previousButton = document.getElementById("previous");
// let submitButton = document.getElementById("submit");

// previousButton.style.visibility = "hidden";
// submitButton.style.display = "none";

// let questionCounter = 0;

// quizNumber.innerHTML = `<h2>Question ${questionCounter + 1}</h2>`;

// quizQuestion.innerHTML = `<p>${questionList[questionCounter].question}</p>`;

// quizOption.innerHTML = `
//               <input type="radio" id="firstChoice" class="btn" value="${questionList[questionCounter].option1}" name="choice">
//               <label for ="firstChoice">${questionList[questionCounter].option1}</label>

//               <input type="radio" id="secondChoice" class="btn" value="${questionList[questionCounter].option2}" name="choice">
//               <label for ="secondChoice">${questionList[questionCounter].option2}</label>

//               <input type="radio" id="thirdChoice" class="btn" value="${questionList[questionCounter].option3}" name="choice">
//               <label for ="thirdChoice">${questionList[questionCounter].option3}</label>

//               <input type="radio" id="fourthChoice" class="btn" value="${questionList[questionCounter].option4}" name="choice">
//               <label for ="fourthChoice">${questionList[questionCounter].option4}</label>
// `;

// function next() {
//   questionCounter++;
//   previousButton.style.visibility = "visible";
//   quizNumber.innerHTML = `<h2>Question ${questionCounter + 1}</h2>`;

//   quizQuestion.innerHTML = `<p>${questionList[questionCounter].question}</p>`;

//   quizOption.innerHTML = `
//               <input type="radio" id="firstChoice" class="btn" value="${questionList[questionCounter].option1}" name="choice">
//               <label for ="firstChoice">${questionList[questionCounter].option1}</label>

//               <input type="radio" id="secondChoice" class="btn" value="${questionList[questionCounter].option2}" name="choice">
//               <label for ="secondChoice">${questionList[questionCounter].option2}</label>

//               <input type="radio" id="thirdChoice" class="btn" value="${questionList[questionCounter].option3}" name="choice">
//               <label for ="thirdChoice">${questionList[questionCounter].option3}</label>

//               <input type="radio" id="fourthChoice" class="btn" value="${questionList[questionCounter].option4}" name="choice">
//               <label for ="fourthChoice">${questionList[questionCounter].option4}</label>
// `;

//   if (questionCounter == questionList.length - 1) {
//     nextButton.style.display = "none";
//     submitButton.style.display = "inline";
//   }
// }

// function previous() {
//   questionCounter--;

//   quizNumber.innerHTML = `<h2>Question ${questionCounter + 1}</h2>`;
//   quizQuestion.innerHTML = `<p>${questionList[questionCounter].question}</p>`;

//   quizOption.innerHTML = `
//               <input type="radio" id="firstChoice" class="btn" value="${questionList[questionCounter].option1}" name="choice">
//               <label for ="firstChoice">${questionList[questionCounter].option1}</label>

//               <input type="radio" id="secondChoice" class="btn" value="${questionList[questionCounter].option2}" name="choice">
//               <label for ="secondChoice">${questionList[questionCounter].option2}</label>

//               <input type="radio" id="thirdChoice" class="btn" value="${questionList[questionCounter].option3}" name="choice">
//               <label for ="thirdChoice">${questionList[questionCounter].option3}</label>

//               <input type="radio" id="fourthChoice" class="btn" value="${questionList[questionCounter].option4}" name="choice">
//               <label for ="fourthChoice">${questionList[questionCounter].option4}</label>
//               `;
//   if (questionCounter == 0) {
//     previousButton.style.visibility = "hidden";
//   }

//   else if (questionCounter < questionList.length-1){
//     nextButton.style.display = "inline";
//     submitButton.style.display = "none";
//   }}
