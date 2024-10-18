/********
PROGRAMMA
********/

// inserimento dei valori da parte dell'utente
const inputChoice = prompt('Scrivi pari o dispari');
const inputNumber = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));

//  verifica che i valori inseriti dall'utente rispettino i criteri richiesti
if ((inputChoice === 'pari' || inputChoice === 'dispari') && 
    (!isNaN(inputNumber)) && (inputNumber >= 1 && inputNumber <= 5)) {

    const sum = getRndInteger(1, 5) + inputNumber;
    const result = evenOdd(sum);

    // verifica se il risultato e la scelta effettuta dall'utente tra dispari e pari sono uguali
    if ((result === 'pari' && inputChoice === 'pari') || (result === 'dispari' && inputChoice === 'dispari')){
        console.log('Complimenti hai vinto');
    } else {
        console.log('Mi spiace hai perso, ritenta e sarai piu fortunato');
    };

} else {
    alert('Per favore scrivi la tua scelta tra dispari e pari ed inserisci un numero compreso tra 1 e 5')
};


/********
FUNZIONI
********/

/**
 * genera un numero compreso tra un valore minimo e un valore massimo
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * verifica se il numero è pari o dispari
 * @param {number} numToCheck
 * @returns {string}
 */
function evenOdd(numToCheck) {
    console.log(numToCheck);
    let result = "";
    if(numToCheck % 2 === 0) {
      result = "pari";
    } else {
      result = "dispari";
    }
    return result;
  }