//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes= [{
     quote: '“First, solve the problem. Then, write the code.”',
     person: 'John Johnson',
}, {
     quote: '“Experience is the name everyone gives to their mistakes.”',
     person: 'Oscar Wilde',
}, {
     quote: '“In order to be irreplaceable, one must always be different.”',
     person: 'Coco Chanel',
}, {
     quote: '“Java is to JavaScript what car is to Carpet.”',
     person: 'Chris Heilmann',
}, {
     quote: '“Knowledge is power.”',
     person: 'Francis Bacon',
}, {
     quote: '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”',
     person: 'Dan Salomon',
}, {
     quote: '“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”',
     person: 'Antoine de Saint-Exupery',
}, {
     quote: '“Code is like humor. When you have to explain it, it’s bad.”',
     person: 'Cory House',
}, {
     quote: '“Ruby is rubbish! PHP is phpantastic.”',
     person: 'Nikita Popov',
}, {
     quote: '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
     person: 'Martin Fowler',
}, ];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})