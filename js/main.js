// input parola da analizzare
const wordInput = prompt('Inserisci una parola');

/**
 * verifica se la parola inserita dall'utente letta al contrario è uguale alla parola di partenza
 * @param {string} wordInput
 * @returns {boolean}
 */
function isPalindrome(wordInput) {
    const wordReversed = wordInput.split('') .reverse() .join('');
    return wordReversed === wordInput;
}

const result = isPalindrome(wordInput)
console.log(result);
