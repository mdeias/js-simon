// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




//1
// funzione che genererà i numeri random
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


// recupero il contenitore
const contenitore = document.querySelector(".container");
//array che conterrà i numeri casuali generati dal pc
const numeriPc =[];
// arrai che conterrà i numeri inseriti dall'utente
const numeriUtente = [];
// creo il testo che comparirà assieme ai numeri casuali
const testo = document.createElement("h1");
testo.innerHTML = `Memorizza i numeri`;
contenitore.append(testo);



// ciclo for che stampa le caselle con i numeri casuali
for (let i = 0; i < 5; i++) {
    const casella = document.createElement("div");
    casella.classList.add("casella");
    let numeriCasuali = numRandom(1, 100);
    casella.innerHTML = `<h1>${numeriCasuali}</h1>`;
    console.log(casella);
    if (!numeriPc.includes(numeriCasuali)) {
        numeriPc.push(numeriCasuali);
        contenitore.append(casella);
    }
   
}
console.log(numeriPc);


// funzione che resetta il contenitore e dopo il tempo stabilito chiede i numeri all'utente confrontandoli con quelli generati dal pc

setTimeout(function(){
    contenitore.innerHTML = "";
    
    for (let i = 0; i < 5; i++) {
        const numeroUtente = parseInt( prompt("inserisci il numero"));
        numeriUtente.push(numeroUtente);
        console.log(numeroUtente);
        if (numeriPc.includes(numeroUtente)) {
            const casella = document.createElement("div");
            casella.classList.add("casella");
            casella.innerHTML = `<h1>${numeriUtente[i]}</h1>`;
            contenitore.append(casella);
        }
    }
    console.log(numeriUtente);
}, 5000);

