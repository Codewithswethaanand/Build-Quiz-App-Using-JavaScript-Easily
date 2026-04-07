const questions = [
    {
    question: "Which is larget animal in the world",
    answer:[
        { text: "shark", correct: false},
        { text: "blue whale", correct: true},
        { text: "shark", correct: false},
        { text: "shark", correct: false},

    ]
},
{
    question: "Which is the largest planet in our solar system?",
    answer: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Mars", correct: false },
        { text: "Venus", correct: false },
    ]
},
{
    question: "Who is known as the Father of Computers?",
    answer: [
        { text: "Charles Babbage", correct: true },
        { text: "Alan Turing", correct: false },
        { text: "Bill Gates", correct: false },
        { text: "Steve Jobs", correct: false },
    ]
},
{
    question: "Which country is famous for the Eiffel Tower?",
    answer: [
        { text: "Italy", correct: false },
        { text: "France", correct: true },
        { text: "Germany", correct: false },
        { text: "Spain", correct: false },
    ]
},
{
    question: "Which is the fastest land animal?",
    answer: [
        { text: "Lion", correct: false },
        { text: "Tiger", correct: false },
        { text: "Cheetah", correct: true },
        { text: "Leopard", correct: false },
    ]
}

];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
