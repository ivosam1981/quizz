// declaracao de variaveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

//Perguntasd
const questions = [{
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [{
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [{
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [{
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
]

//substituição do quizz para a primeira pergunta
function init() {
    //cria a primeira pergunta
    createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {

    //limpar a quertao anterior
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    // alterar o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;


    //Insere as alternativas
    questions[i].answers.forEach(function(answer, i) {
        //cria template do botao quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        //Remover hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");


        ///inserir alternativa na tela

        answersBox.appendChild(answerTemplate);

        //inserir evento de click no botao

        answerTemplate.addEventListener("click", function() {
            checkAsnwer(this);
        });

    });

    //incrementar o numero da questao
    actualQuestion++;

}

//verificando resposta do usuario
function checkAsnwer(btn) {
    const buttons = answersBox.querySelectorAll("button");

    buttons.forEach(function(button) {
        if (button.getAttribute("correct-answer") == "true") {

            button.classList.add("correct-answer");

            if (btn == button) {

                points++;
            }

        } else {
            button.classList.add("wrong-answer");
        }
    })

    nextQuestion();

}

function nextQuestion() {

    //timer para usuario ver as respostas
    setTimeout(function() {
        if (actualQuestion >= questions.length) {
            //apresenta msg de sucesso
        }

        createQuestion(actualQuestion);
    }, 1500);

}

//inicializaçõa do quizz
init();