const quizAndAnswers = [
    {
        question: "How many countries are there in Africa",
        A: "57",
        B: "53",
        C: "63",
        D: "47",
        correctAns: "B"
    },
    {
        question: "Which one of these is wrong",
        A: "Python is used in data analysis",
        B: "Javascript is for web development",
        C: "Java is a styling language",
        D: "Python is used for web development",
        correctAns: "C"
    },
    {
        question: "What is the most popular programming problem?",
        A: "Missing a comma",
        B: "Missing a Semicolon",
        C: "Missing a colon",
        D: "Missing a fullstop",
        correctAns: "B"
    },
    {
        question: "What two words every programmer learned to code first?",
        A: "If else",
        B: "Print line",
        C: "Hello world",
        D: "Hello",
        correctAns: "C"
    },
    {
        question: "Which one is the scripting language for web development",
        A: "HTML",
        B: "Javascript",
        C: "CSS",
        D: "Python",
        correctAns: "B"
    }
];

const container = document.querySelector(".main-container");
const quizContainer = document.querySelector(".quiz-container");


const question = document.getElementById("quizes");
const ansA = document.getElementById("a");
const ansB = document.getElementById("b");
const ansC = document.getElementById("c");
const ansD = document.getElementById("d");
const submitButton = document.getElementById("btn");
const answers = document.querySelectorAll(".answers");

let currentQuestion = 0;
let results = 0;

loadQuizes()
function loadQuizes(){
    deselectPreviousAns();
    const currQuiz = quizAndAnswers[currentQuestion];
    question.innerText = currQuiz.question;

    ansA.innerText = currQuiz.A;
    ansB.innerText = currQuiz.B;
    ansC.innerText = currQuiz.C;
    ansD.innerText = currQuiz.D;
}
function selectedOne(){
    let ans;
    answers.forEach(answer => {     
        if(answer.checked){
            ans = answer.id;
        }
    });
    return ans;
}

function deselectPreviousAns(){
    answers.forEach(answer => {
        answer.checked = false
    });
}

submitButton.addEventListener("click", ()=>{
    const ans = selectedOne();

    if(ans){
        if(ans === quizAndAnswers[currentQuestion].correctAns){         
            results++;
        };
        currentQuestion++;
        if(currentQuestion < quizAndAnswers.length){
            loadQuizes();
        }else{
            let refreshBtn = document.getElementById("refresh-btn");
            refreshBtn.classList.add("displayBtn");
            refreshBtn.addEventListener("click", function(){
                location.reload();
            })

            submitButton.classList.add("removeSubmitBtn");
            quizContainer.innerHTML = `<h2>You scored ${results} out of 5<h2/>`;
         } 
    }
});

