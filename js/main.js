
'use strict'

/* variabili */
let nome = document.getElementById("nomeUtente").value;
let km = document.getElementById("km").value;
let eta = document.getElementById("etaUtente").value;
let prezzoIntero = km * 0.21;

/* variabili */

/* if */
 
let prezzoFinale;

if (eta === 'minorenni') {  
    prezzoFinale = prezzoIntero * 0.8;
} else if (eta === 'over65') { 
    prezzoFinale = prezzoIntero * 0.6;
} else {
    prezzoFinale = prezzoIntero;
}
/* if */

const inputButton = document.getElementById('prezzo');

inputButton.addEventListener('click', 
    function() {
        document.getElementById('costo_biglietto').innerHTML = `${prezzoFinale.toFixed(2)} €`
        document.getElementById('nome_passegero').innerHTML = `${nome}`
    }

)















