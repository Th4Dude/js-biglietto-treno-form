'use strict'

const etaUtente = prompt(`inserisci la tua età`);
console.log(etaUtente)

const chilometri = prompt(`inserisci quanti km vuoi percorrere`);
console.log(chilometri)

let prezzoAlchilometro = 0.21;

let prezzoTotale = chilometri * prezzoAlchilometro;

let scontoMinori = prezzoTotale * 20 / 100;

let  scontoOver = prezzoTotale * 40 / 100;

console.log ('Il prezzo totale del biglietto è',prezzoTotale);

if ( etaUtente < 18) {
    scontoMinori = prezzoTotale * 20 / 100;
    prezzoTotale = prezzoTotale - scontoMinori;
    console.log (`Prezzo scontato per minori del 20% per un totale di`, + prezzoTotale.toFixed(2) );
} else if ( etaUtente >= 65 ) {
    scontoOver = prezzoTotale * 40 / 100;
    prezzoTotale = prezzoTotale - scontoOver;
    console.log (`Prezzo scontato per over 65 del 40% per un totale di`, + prezzoTotale.toFixed(2) );
}

document.querySelector('h4').innerHTML = `Prezzo del biglietto ` +  prezzoTotale