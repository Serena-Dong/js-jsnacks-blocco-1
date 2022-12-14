//collego l'elemento
const result = document.getElementById('result');

//faccio le domande e il calcolo

let sum = 0;
for (let i = 0; i < 10; i++){
   const numbers = parseInt(prompt('Dammi un numero').trim());
   sum += numbers;
}

//stampo in pagina
result.innerText=sum;




