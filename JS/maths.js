let questionList = [
  {
    question: "What is |-26|?",
    option: ["-26", "26", "0","undefined"],
    answer: 0
  },
  {
    question: "Solve the following question 6/2(2+1)",
    option: ["9", "1", "0", "2"],
    answer: 0
  },
  {
    question: "Rice weighing 3.75 pounds was divided equally and placed in 4 containers. How many ounces of rice were in each",
    option: ["15 ounces", "10 ounces", "5 ounces", "20 ounces"],
    answer: 0
  },
  {
    question: "20% of 2 is equal to ",
    option: ["0.4", "0.004", "20", "4"],
    answer: 0
  },
  {
    question: "The population of a country increased by an average of 2% per year from 2000 to 2003. If the population of this country was 2 000 000 on december 31,2003, then the populatioon of this country on January 1, 2000, to the nearest thousand would be ",
    option: ["1 846 000", "1 852 000", "1 000 000", "1 500 000"],
    answer: 0
  },
  {
    question: "A schooll committee consists of 2 teachers and a student. The number of different committees that can be formed from 5 teachers and 10 students is",
    option: ["10", "15", "2100", "8"],
    answer: 2
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
  
}TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT


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
