//collego l'elemento
const result = document.getElementById('result');

//faccio le domande
let numbers = [];

numbers[0] = prompt('Dammi un numero');
numbers[1] = prompt('Dammi un numero');
numbers[2] = prompt('Dammi un numero');
numbers[3] = prompt('Dammi un numero');
numbers[4] = prompt('Dammi un numero');
numbers[5] = prompt('Dammi un numero');
numbers[6] = prompt('Dammi un numero');
numbers[7] = prompt('Dammi un numero');
numbers[8] = prompt('Dammi un numero');
numbers[9] = prompt('Dammi un numero');

//faccio il calcolo
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += +numbers[i];
}
//stampo in pagina
result.innerText=sum;




