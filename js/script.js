// 1. Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

 
 var array = [5, 7, 12, 8, 15, 20, 50];

 var a = 1;
 var b = 5;

 var nuovoArray = [];

 

// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

var word1 = prompt('inserisci la prima parola');

var word2 = prompt('inserisci la seconda parola');

function parole(a,b) {
    var result;
    if (a.length == b.length) {
        result = 'hanno la stessa lunghezza';

    } else if (a.length < b.length) {
        result = b + ' è più lunga';

    } else if (a.length > b.length) {
        result = a + ' è più lunga';
    }
        
    return result;
}

var leParole = parole(word1,word2);
console.log(leParole);



// 3.  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.