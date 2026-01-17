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
  },
  {
    question: "Who is known as the Father of the Nation (India)?",
    options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Largest ocean in the world?",
    options: ["Indian", "Atlantic", "Pacific", "Arctic"],
    answer: "Pacific"
  },
  {
    question: "National animal of India?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    answer: "Tiger"
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who invented the computer?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    question: "Fastest land animal?",
    options: ["Lion", "Horse", "Cheetah", "Tiger"],
    answer: "Cheetah"
  },
  {
    question: "Which is the largest continent?",
    options: ["Africa", "Asia", "Europe", "Australia"],
    answer: "Asia"
  },
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "Java", "CSS", "Python"],
    answer: "CSS"
  },
  {
    question: "National bird of India?",
    options: ["Peacock", "Sparrow", "Eagle", "Parrot"],
    answer: "Peacock"
  },
  {
    question: "Which day is celebrated as Independence Day in India?",
    options: ["26 Jan", "15 Aug", "2 Oct", "14 Nov"],
    answer: "15 Aug"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    question: "CPU stands for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "Control Processing Unit"
    ],
    answer: "Central Processing Unit"
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Bose"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which device is used to input text?",
    options: ["Mouse", "Monitor", "Keyboard", "Printer"],
    answer: "Keyboard"
  },
  {
    question: "Water freezes at?",
    options: ["0°C", "50°C", "100°C", "10°C"],
    answer: "0°C"
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
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
