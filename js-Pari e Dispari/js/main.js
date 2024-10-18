const inputEvenOdd = prompt('Scrivi pari o dispari');
const inputNumber = prompt('Scegli un numero compreso tra 1 e 5');

if ((inputEvenOdd === 'pari' || inputEvenOdd === 'dispari') && 
    (!isNaN(inputNumber)) && (inputNumber >= 1 && inputNumber <= 5)){
    console.log(`hai scelto ${inputEvenOdd}`);
} else {
    alert('Per favore scrivi la tua scelta tra dispari e pari ed inserisci un numero compreso tra 1 e 5')
}