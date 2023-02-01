const quizInfo = [
    {
        question: "Which is the fastest bird in the world?",
        a: "Bald Eagle",
        b: "Peregrine Falcon",
        c: "Hummingbird",
        d: "Raven",
        correct : c,

    },
    {
        question: "Which of the following US presidents served for the shortest amount of time?",
        a: "James Madison",
        b: "Abraham Lincoln",
        c: "George Washington",
        d: "William Henry Harrison",
        correct : d,

    },
    {
        question: "What is the tallest waterfall in the world?",
        a: "Angel Falls, Venezuela",
        b: "Niagara Falls, New York",
        c: "Wailua Falls, Hawaii",
        d: "Sutherland Falls, New Zealand",
        correct : b,

    },
    {
        question: "What is something the ancient Romans used as mouthwash?",
        a: "Saltwater",
        b: "Urine",
        c: "Mint tea",
        d: "Freshwater",
        correct : b,

    },
    {
        question: "Which of these is the shortest measurement of length?",
        a: "Centimetre",
        b: " Metre",
        c: "Inch",
        d: " Gramme",
        correct : a,

    },
    
]

// const quiz = document.querySelector('#quiz')
// const question = document.querySelector('#question')
// const answer = document.querySelectorAll('.answer')
// const a_text = document.querySelector('#a_text')
// const b_text = document.querySelector('#b_text')
// const c_text = document.querySelector('#c_text')
// const d_text = document.querySelector('#d_text')
// const button = document.getElementById('submit')

// let currentQuiz = 0
// let score = 0
// startQuiz()

// function startQuiz(){
//     answerDeselect()
//     const currentQuizInfo = quizInfo[currentQuiz]
//     question.innerText = currentQuizInfo.question
//     a_text.innerText = currentQuizInfo.a
//     b_text.innerText = currentQuizInfo.b
//     c_text.innerText = currentQuizInfo.c
//     d_text.innerText = currentQuizInfo.d

// }
// function answerDeselect (){
//     answer.forEach(answer => answer.checked = false)
// }
// function selection(){
//     let answers = undefined  ;
//     answers.forEach(answer => {
//         if (answer.checked){
//             answer = answer.id
//         }
//     })
//     return answer
// }
// button.addEventListener('click', ()=>{
  
//     if(answer){
//         if(answer= quizInfo[currentQuiz].correct){
//             score ++
//         }
//         currentQuiz++

//         if (currentQuiz < quizInfo.length){
//             startQuiz()
//         } else {
//             quiz.innerHTML =  "You've got "+ score + " correct answers out of "+ quizInfo.length + " questions!"
//         }
    
//     }
// })




const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const answerEl = document.querySelectorAll('.answer')
const a_text = document.getElementById ('a_text')
const b_text = document.getElementById ('b_text')
const c_text = document.getElementById ('c_text')
const d_text = document.getElementById ('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;
startQuiz()

function startQuiz (){
    deselectAnswers();
    
    const currentQuizInfo = quizInfo[currentQuiz];
    question.innerText= currentQuizInfo.question;
    a_text.innerText= currentQuizInfo.a;
    b_text.innerText= currentQuizInfo.b;
    c_text.innerText= currentQuizInfo.c;
    d_text.innerText= currentQuizInfo.d;
    



}
function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer 

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}



submitBtn.addEventListener ('click', () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizInfo[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizInfo.length) {
            startQuiz()
        } else {quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `
           
            
            
               
        }
    }
    
    
})