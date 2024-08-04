const questions = [
    {
        question : "Which among the following movements started with breaking the salt law?",
        answers : [
            {text : "Non-cooperation Movement", correct : false},
            {text : "Civil Disobedience Movement", correct : true},
            {text : "Quit India Movement", correct : false},
            {text : "Home Rule Movement", correct : false},
        ]
    },
    {
        question : "Who drafted the “Declaration of Independence” pledge in 1930?",
        answers : [
            {text : "Motilal Nehru", correct : false},
            {text : "Jawahar Lal Nehru", correct : false},
            {text : "Mahatma Gandhi", correct : true},
            {text : "C R Das", correct : false},
        ]
    },
    {
        question : "Who said that British established a robber state in Bengal between 1765 and 1772 ?",
        answers : [
            {text : "G. W. Forrest", correct : false},
            {text : "Lord Macaulay", correct : false},
            {text : "K. M. Panikkar", correct : true},
            {text : "Nand Lal Chatterji", correct : false},
        ]
    },
    {
        question : "On the suggestion of Rabindra Nath Tagore, the date of partition of Bengal (October 16, 1905) was celebrated as?",
        answers : [
            {text : "Rakhi Bandhan Day", correct : true},
            {text : "Brotherhood Day", correct : false},
            {text : "Solidarity Day", correct : false},
            {text : "Black Day", correct : false},
        ]
    },
    {
        question : "Paunar Ashram is related to which of the following social activist?",
        answers : [
            {text : "Vinoba Bhave", correct : true},
            {text : "Baba Amte", correct : false},
            {text : "Swami Sahajanand Saraswati", correct : false},
            {text : "Ambedkar", correct : false},
        ]
    },
    {
        question : "Who among the following were the most vocal opponents of Ilbert Bill?",
        answers : [
            {text : "Zamindars of Bengal & Bihar", correct : false},
            {text : "Advocates and legal practitioners of Kolkata", correct : false},
            {text : "British tea and indigo plantation owners in Bengal", correct : true},
            {text : "British Army Officials", correct : false},
        ]
    },
    {
        question : "For which of the following commodities , the Dutch wanted to barter cotton piece goods in the Indonesian Archipelago?",
        answers : [
            {text : "Tobacco", correct : false},
            {text : "Rice", correct : false},
            {text : "Pepper and Spices", correct : true},
            {text : "Silk", correct : false},
        ]
    },
    {
        question : "Who among the following formed a government-in-exile, the Aarzi Hukumat or a temporary government in Junagarh ?",
        answers : [
            {text : "Ramdas Gandhi", correct : false},
            {text : "Samaldas Gandhi", correct : true},
            {text : "Ramchandra Gandhi", correct : false},
            {text : "Harilal Gandhi", correct : false},
        ]
    },
    {
        question : "Who among the following formed the group “Brothers of India”?",

        answers : [
            {text : "Annie Besant", correct : true},
            {text : "George Feuerstein", correct : false},
            {text : "H.S. Olcott", correct : false},
            {text : "Alan Watts", correct : false},
        ]
    },
    {
        question : "Which among the following was the only session in which Mahatma Gandhi elected as Congress President?",
        answers : [
            {text : "Lucknow", correct : false},
            {text : "Belgaum", correct : true},
            {text : "Mumbai", correct : false},
            {text : "Karachi", correct : false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Retry";
    nextButton.style.display = "block";
};

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();