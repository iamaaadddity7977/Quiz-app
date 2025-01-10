document.addEventListener('DOMContentLoaded', () => {

    const quizContiner = document.getElementById('quiz-continer');
    const questionContainer = document.getElementById('question-container');
    const choicesList = document.getElementById('choices-list');
    const nextBtn = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');
    const restartBtn = document.getElementById('restart-btn');
    const startBtn = document.getElementById('start-btn');
    const questionText = document.getElementById('question-text');

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain"
            ],
            answer: "William Shakespeare",
        },
        {
            question: "What is the smallest prime number?",
            choices: ["1", "2", "3", "5"],
            answer: "2",
        },
        {
            question: "What is the boiling point of water at sea level?",
            choices: ["90°C", "100°C", "110°C", "120°C"],
            answer: "100°C",
        },
        {
            question: "Which language is used to create web pages?",
            choices: ["Python", "HTML", "C++", "Java"],
            answer: "HTML",
        },
        {
            question: "What is the square root of 64?",
            choices: ["6", "7", "8", "9"],
            answer: "8",
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
        {
            question: "Which gas do plants use for photosynthesis?",
            choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
            answer: "Carbon Dioxide",
        },
        {
            question: "What is the currency of Japan?",
            choices: ["Yuan", "Yen", "Won", "Rupee"],
            answer: "Yen",
        },
        {
            question: "Who discovered gravity?",
            choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            answer: "Isaac Newton",
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["Oxygen", "Gold", "Osmium", "Iron"],
            answer: "Oxygen",
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale",
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    });

    function startQuiz() {
        startBtn.classList.add('hidden'); 
        resultContainer.classList.add('hidden'); 
        questionContainer.classList.remove('hidden');
        showQuestion(); 
    }

    function showQuestion() {
        nextBtn.classList.add('hidden'); 
        questionText.textContent = questions[currentQuestionIndex].question; 
        choicesList.innerHTML = ""; 
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.classList.add('choice-item'); 
            li.addEventListener('click', () => selectAnswer(li, choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(selectedLi, choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;

        Array.from(choicesList.children).forEach(child => child.classList.remove('selected'));
        selectedLi.classList.add('selected'); 

        if (choice === correctAnswer) {
            score++;
        }
        nextBtn.classList.remove('hidden'); 
    }

    function showResult() {
        questionContainer.classList.add('hidden'); 
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`; 
    }
});
