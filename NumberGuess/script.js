
const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) { window.alert("That's not a number!") }

    if (guess > answer) { 
        attempts++;
        window.alert("Try lower!"); 
    }else if (guess < answer) { 
        attempts++;
        window.alert("Try higher!"); 
    }else { 
        attempts++;1
        window.alert(`That's right! The answer was ${answer}.\nIt took you ${attempts} attempts`);
        running = false;  
    }
} 

