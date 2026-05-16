const questions = [
  {
    question: "¿Cual es la primera pelicula que vimos juntos? ",
    choices: ["Wonka","Interestelar", "Titanic"],
    correctAnswer: "Wonka"
  },
  {
    question: "¿Con cual cancion nos hemos besado mas? ",
    choices: ["Mujer Hermosa","Tuyo", "Ladrones"],
    correctAnswer: "Mujer Hermosa"
  },
  {
    question: "¿Por qué persona nos conocimos? ",
    choices: ["Lalo", "Montse", "Ricardo"],
    correctAnswer: "Montse"
  },
  {
    question: "¿Dónde fue el primer lugar donde nos conocimos bien?",
    choices: ["Domino's", "Tu casa", "COBACH"],
    correctAnswer: "Domino's"
  },
  {
    question: "¿Quién dijo el primero te quiero?",
    choices: ["Majo❤️","Yahzi", " Diego"],
    correctAnswer: "Yahzi"
  },
  {
    question: "¿Quién dio el primer beso?",
    choices: ["Majo❤️ (Me lo robaste, regresármelo😔)","Yahzi", "Majo❤️"],
    correctAnswer: "Majo❤️ (Me lo robaste, regresármelo😔)"
  },
  {
    question: "¿Por qué me gustaste?",
    choices: ["Tus ojos.","Tu forma de ser.", "Todo de ti."],
    correctAnswer: "Todo de ti."
  },
  {
    question: "¿Sabes que me da paz? ",
    choices: ["La comida","Manejar de noche", "Tus abrazos."],
    correctAnswer: "Tus abrazos."
  },
  {
    question: "¿Nos casamos? ",
    choices: ["si","si", "tal vez"],
    correctAnswer: "si"
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');
const finalResultElement = document.getElementById('finalResult'); 

function displayQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  choicesElement.innerHTML = '';
  q.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => checkAnswer(choice));
    choicesElement.appendChild(button);
  });
}

function checkAnswer(choice) {
  const q = questions[currentQuestion];
  if (choice === q.correctAnswer) {
    resultElement.textContent = "¡Respuesta correcta!";
    resultElement.style.color = "green";
    correctAnswers++;
  } else {
    resultElement.textContent = "Respuesta incorrecta. La respuesta correcta es: " + q.correctAnswer;
    resultElement.style.color = "red";
    incorrectAnswers++;
  }
  // Deshabilitar botones después de que se seleccione una respuesta
  const buttons = document.querySelectorAll('#choices button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

submitButton.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    resultElement.textContent = '';
  } else {
    questionElement.textContent = '';
    choicesElement.textContent = '';
    submitButton.style.display = 'none';
    resultElement.textContent = '¡Has completado el test!';
    finalResultElement.textContent = `Respuestas correctas: ${correctAnswers}. Respuestas incorrectas: ${incorrectAnswers}.`;
  }
});

displayQuestion();
