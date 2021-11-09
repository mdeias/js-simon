// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1 creo una funzione che estrae unmeri casuali da 1 a 100
// 2 creo una funzione che stampa le caselle 
// 3 creo un timer contenete la funzione facendo parire il prompt con la domanda all'utente
// 4 confronto i numeri dell'utente con quelli generati casualmente


//1
// funzione che genererà i numeri random
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

// ciclo for che stampa le caselle
const contenitore = document.querySelector(".container");

for (let i = 0; i < 5; i++) {
    const casella = document.createElement("div");
    casella.classList.add("casella");
    casella.innerHTML = `<h1>${numRandom(1, 100)}</h1>`;
    console.log(casella);
    contenitore.append(casella);
}

setTimeout(function(){
    contenitore.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const numeroUtente = prompt("inserisci il numero");
        console.log(numeroUtente);
    }
}, 5000);