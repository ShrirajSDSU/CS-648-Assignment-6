var coinFlip = parseInt(Math.random() * 100);
var choice = prompt('Select heads H or tails T');
var result;
if (coinFlip > 50 && choice === 'H') {
    result = 'The flip was heads and you chose heads...you win!';
} else if (coinFlip > 50 && choice === 'T') {
    result = 'The flip was heads and you chose tails...you lose!';
} else if (coinFlip <= 50 && choice === 'H') {
    result = 'The flip was tails and you chose heads...you lose!';
} else if (coinFlip <= 50 && choice === 'T') {
    result = 'The flip was tails and you chose tails...you win!';
}

document.write(result);