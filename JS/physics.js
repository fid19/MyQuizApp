let questionList = [
  {
    question: "About how fast does sound travels in meter per second?",
    option: ["340", "640", "240", "440"],
    answer: 0
  },
  {
    question: "What are the component parts of a battery cell called",
    option: ["Chemical Cells", "Electrovalent Cells", "Electrical Cells", "Physical Cells"],
    answer: 2
  },
  {
    question: "What is the distance between two peaks of a wave called?",
    option: ["Trough", "Crest", "Wavelength", "Period"],
    answer: 2,
  },
  {
    question: "Masses are to Newton's Gravitational law as charges are to what?",
    option: ["Coulomb's Law", "Magnetic Law", "Charge law", "Law of Electrostatics"],
    answer: 0
  },
  {
    question: "How much would a 150 pound person weight at the center of the Earth?",
    option: ["150 Pounds", "150 Newtons", "Nothing", "1500 Newtons"],
    answer: 2
  },
  {
    question: "What type of lens has a thin middle and makes objects appear smaller",
    option: ["Concave", "Convex", "Rectangular Lens", "Octave Lens"],
    answer: 0
  },
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

//               <input type="radio" id="answerCalc" class="btn" value="${totalScore}" name="">
//               <label for ="fourthChoice">${totalScore}</label>
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

//               <input type="radio" id="answerCalc" class="btn" value="${totalScore}" name="">
//               <label for ="fourthChoice">${totalScore}</label>
// `;

//   if (questionCounter == questionList.length - 1) {
//     nextButton.style.display = "none";
//     submitButton.style.display = "inline";
//   }

//   let userAnswer = $('input[name="choice"]:checked').value;
//   console.log(userAnswer);
//   scoreCalculator();
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

//               <input type="radio" id="answerCalc" class="btn" value="${totalScore}" name="">
//               <label for ="fourthChoice">${totalScore}</label>
//               `;
//   if (questionCounter == 0) {
//     previousButton.style.visibility = "hidden";
//   }

//   else if (questionCounter < questionList.length-1){
//     nextButton.style.display = "inline";
//     submitButton.style.display = "none";
//   }};

  

  

  
