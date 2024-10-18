// inserimento dei valori da parte dell'utente
const inputEvenOdd = prompt('Scrivi pari o dispari');
const inputNumber = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));

//  verifica che i valori inseriti dall'utente rispettino i criteri richiesti
if ((inputEvenOdd === 'pari' || inputEvenOdd === 'dispari') && 
    (!isNaN(inputNumber)) && (inputNumber >= 1 && inputNumber <= 5)){
    const sum = getRndInteger(1, 5) + inputNumber;
    console.log(sum);
} else {
    alert('Per favore scrivi la tua scelta tra dispari e pari ed inserisci un numero compreso tra 1 e 5')
};


/********
FUNZIONI
********/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
