// storing questions in array of objects
const dataBase = [
    {
        question: "What do you call a type of shape that has five sides?",
        a: "Hexagon",
        b: "Pentagon",
        c: "Heptagon",
        d: "Quadilateral",
        answer: "B",
        result: ""
    },

    {
        question: "The largest Democracy in the world?",
        a: "Czech Republic",
        b: "KSA",
        c: "Spain",
        d: "India",
        answer: "D",
        result: ""
    },

    {
        question: `Who wrote the play "Romeo and Juliet"?`,
        a: "Arthur Miller",
        b: "Tennessee Williams",
        c: "William Shakespeare",
        d: "Oscar Wilde",
        answer: "C",
        result: ""
    },

    {
        question: "What is the capital city of France?",
        a: "Madrid",
        b: "Rome",
        c: "Paris",
        d: "London",
        answer: "C",
        result: ""
    },

    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Mone",
        answer: "C",
        result: ""
    },

    {
        question: "What is the largest planet in our solar system?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",
        answer: "C",
        result: ""
    },

    {
        question: "Which famous scientist developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Marie Curie",
        c: "Albert Einstein",
        d: "Nikola Tesla",
        answer: "C",
        result: ""
    },

    {
        question: "In which year did World War II end?",
        a: "1945",
        b: "1885",
        c: "1895",
        d: "1985",
        answer: "A",
        result: ""
    },

    {
        question: "Who is the author of the Harry Potter book series?",
        a: " J.R.R. Tolkien",
        b: "Stephen King",
        c: "J.K. Rowling",
        d: "George Orwell",
        answer: "C",
        result: ""
    },

    {
        question: "What is the chemical symbol for the element gold?",
        a: "Ag",
        b: "Go",
        c: "Au",
        d: "GO",
        answer: "C",
        result: ""
    },

    {
        question: "Who was the first person to step on the moon?",
        a: "Buzz Aldrin",
        b: "Neil Armstrong",
        c: "Yuri Gagarin",
        d: "John Glenn",
        answer: "B",
        result: ""
    },

    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: " Kilimanjaro",
        d: "Mount Fuji",
        answer: "B",
        result: ""
    },
];

// storing user's Score
const dataScore = [];

// common variables regarding the dataBase
let totalQstnNo = dataBase.length;
let currentQstnNo = 1;
let scoreTotal = 0;



// get elements
let container = document.getElementsByClassName("quiz-container")[0];
let qstn = document.getElementById("question");
let optA = document.getElementById("a");
let optB = document.getElementById("b");
let optC = document.getElementById("c");
let optD = document.getElementById("d");
let answers = document.querySelectorAll(".answers")

let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");
let submitBtn = document.getElementById("submit");
 

// functions

function display(){
    qstn.innerHTML = currentQstnNo + ". " + dataBase[currentQstnNo - 1].question;
    optA.innerHTML = dataBase[currentQstnNo - 1].a;
    optB.innerHTML = dataBase[currentQstnNo - 1].b;
    optC.innerHTML = dataBase[currentQstnNo - 1].c;
    optD.innerHTML = dataBase[currentQstnNo - 1].d;

    // check for availability
    availableBtn();

}

// store user's selection 
function storeUserSelection(inputNum){
    dataBase[currentQstnNo - 1].result = inputNum.id;
}

// find id of checked radio input and store to dataAnswers
function IsChecked(){
    answers.forEach(function(i){
        let inputNum = i;
        if(i.checked === true){
            storeUserSelection(inputNum); 
        }
    })
}

// show the checked option for each question
function defaultCheck(){
    if(dataBase[currentQstnNo-1].result.length === 1 ){
        answers.forEach(function(i){
            if(i.id === dataBase[currentQstnNo-1].result){
                i.checked = true;
            }
        })
    }
    else if(dataBase[currentQstnNo-1].result.length === 0){
        answers.forEach(function(i){
            i.checked = false;
        })
    }
}

// verify user answer and store user input for the last question 
function verify(){
    IsChecked();
    disableAll();

    for(let i=0 ; i < totalQstnNo ; i++){
        if(dataBase[i].result === dataBase[i].answer){
            dataScore[i] = 10;
        }
        else{
            dataScore[i] = 0;
        }
    }
    score();
    showScore();
    
}

// calculate score
function score(){
    for(i=0;i<totalQstnNo;i++){
        scoreTotal = scoreTotal + dataScore[i];
    }
    console.log(scoreTotal);
    // return scoreTotal;
    
}

// show score for the user
function showScore(){
    let scoreTag = document.createElement("p");
    scoreTag.innerHTML = `You have scored ${scoreTotal} points in this quiz`;
    container.appendChild(scoreTag);

    scoreTag.style.margin = "0 1rem";
    scoreTag.style.padding = "0.5rem";
    scoreTag.style.backgroundColor = "rgb(102, 255, 41)"
    scoreTag.style.color = "white";
    scoreTag.style.display = "flex";
    scoreTag.style.justifyContent = "center";
    scoreTag.style.textAlign = "center";
    scoreTag.style.fontSize = "1.5rem";
    scoreTag.style.fontWeight = "300";
}

// function for buttons
function nextFn(){
    IsChecked();
    currentQstnNo++;
    display();
    defaultCheck();
}

function previousFn(){
    IsChecked();
    currentQstnNo--;
    display();
    defaultCheck();
}

// function for disabling of buttons
function availableBtn(){
    availablePreviousBtn();
    availableNextBtn();
    availableSubmitBtn();
}

function availablePreviousBtn(){
    if(currentQstnNo === 1 ){
        previousBtn.disabled = true;
    }
    else{
        previousBtn.disabled = false;
    }
}

function availableNextBtn(){
    if(currentQstnNo === totalQstnNo){
        nextBtn.disabled = true;
    }
    else{
        nextBtn.disabled = false;
    }
}

function availableSubmitBtn(){
    if(currentQstnNo === totalQstnNo){
        submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
}

// disable all buttons and radio inputs
function disableAll(){
    submitBtn.disabled = "true";
    previousBtn.disabled = "true";
    nextBtn.disabled = "true";

    answers.forEach(function(i){
        i.disabled = "true";
    })
}

// calling created functions
display();

nextBtn.addEventListener("click", nextFn);
previousBtn.addEventListener("click", previousFn);
submitBtn.addEventListener("click",verify);

