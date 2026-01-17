const quizData = [
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool ML",
      "None"
    ],
    answer: "Hyper Text Markup Language"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
  const q = quizData[index];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  for (let i = 0; i < q.options.length; i++) {
    const btn = document.createElement("button");
    btn.innerText = q.options[i];
    btn.onclick = function () {
      checkAnswer(q.options[i]);
    };
    optionsEl.appendChild(btn);
  }
}

function checkAnswer(selected) {
  if (selected === quizData[index].answer) {
    score++;
  }

  index++;

  if (index < quizData.length) {
    loadQuestion();
  } else {
    questionEl.innerText =
      "Your Score: " + score + " / " + quizData.length;
    optionsEl.innerHTML =
      "<button onclick='location.reload()'>Restart Quiz</button>";
  }
}

loadQuestion();
