var coinFlip = Math.round(Math.random());
var choice = prompt('Select heads H or tails T');
var result;

if (coinFlip === 1 && choice === 'H') {
    result = 'The flip was heads and you chose heads...you win!';
} else if (coinFlip === 1 && choice === 'T') {
    result = 'The flip was heads and you chose tails...you lose!';
} else if (coinFlip === 0 && choice === 'H') {
    result = 'The flip was tails and you chose heads...you lose!';
} else if (coinFlip === 0 && choice === 'T') {
    result = 'The flip was tails and you chose tails...you win!';
} else {
    result = 'Please enter valid choice - Heads H or Tails T';
}

document.write(result);