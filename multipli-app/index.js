const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
console.log(num1);

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", (event) => { // corrigido para "submit" em vez de "Submit"
  event.preventDefault(); // adicionado para evitar recarregamento da página
  const userAns = parseInt(inputEl.value); // adicionado parseInt para converter entrada em um número inteiro
  console.log(userAns, typeof userAns);
  if(userAns === correctAns) {
    score++;
    console.log(score);
    updateLocalStorage(); // adicionado para atualizar o localStorage quando houver um acerto
    scoreEl.innerText = `score: ${score}`; // adicionado para atualizar a pontuação exibida na página
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", score); // corrigido para "score" em vez de "scoreItem" e adicionado "score" como valor do parâmetro
}
