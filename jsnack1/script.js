//collego l'elemento
const result = document.getElementById('result');

//faccio le domande
let numbers = [];


for (let i = 0; i <= 10; i++){
    numbers = prompt('Dammi un numero');
}

//faccio il calcolo
let sum = 0;
for (let w = 0; w < numbers.length; w++) {
    sum += +numbers[w];
}
//stampo in pagina
result.innerText=sum;




