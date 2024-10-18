const wordInput = prompt('Inserisci una parola');
console.log(wordInput);


const word = wordInput.split('');
console.log(word);

const reverse = word.reverse();
console.log(reverse);

const wordReversed = reverse.join('');
console.log(wordReversed);

