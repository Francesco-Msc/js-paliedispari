/********
PROGRAMMA
********/

// input parola da analizzare
const wordInput = prompt('Inserisci una parola');
const displayResult = document.getElementById('result')

// inverto l'ordine della parola e la salvo cosi da poterla usare nella risposta
const wordReversed = wordInput.split('') .reverse() .join('');

// risultato analizzato dalla funzione
const result = isPalindrome(wordInput)

// condizine per cui se la parola è palindroma esegue un'azione altrimenti ne esegue un'altra
if (result){
    text = `la parola "${wordInput}" è palindroma`;
} else {
    text = `la parola "${wordInput}" non è palindroma, eccola al contrario "${wordReversed}"`;
}

displayResult.innerHTML = text;

/********
FUNZIONE
********/

/**
 * verifica se la parola inserita dall'utente letta al contrario è uguale alla parola di partenza
 * @param {string} wordInput
 * @returns {boolean}
*/
function isPalindrome(wordInput) {
    const wordReversed = wordInput.split('') .reverse() .join('');
    return wordReversed === wordInput;
}