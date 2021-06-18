// 1. Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

 
//  var array = [5, 7, 12, 8, 15, 20, 50];

//  var a = 1;
//  var b = 5;

// //  var nuovoArray = [];

// //  myFunction(array,a,b); 

//  console.log(myFunction, a, b);

//  function myFunction (array, min, max){
//      var nuovoArray = [];
//     for (var i = min - 1; i < max; i++){
//         if (a <= array.length && b >= array.length){
//             nuovoArray.push(array[i]);
//         }
//     }
//     return nuovoArray;
//  }



// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// var word1 = prompt('inserisci la prima parola');

// var word2 = prompt('inserisci la seconda parola');

// function parole(a,b) {
//     var result;
//     if (a.length == b.length) {
//         result = 'hanno la stessa lunghezza';

//     } else if (a.length < b.length) {
//         result = b + ' è più lunga';

//     } else if (a.length > b.length) {
//         result = a + ' è più lunga';
//     }
        
//     return result;
// }

// var leParole = parole(word1,word2);
// console.log(leParole);



// 3.  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

//  var arrayPrimo = ['a', 'b', 'c'];

//  var arraySecondo = [1, 2, 3];



// var lengthList; 


// console.log(arrayTerzo);



//  function myFunction(a, b) {
//     var arrayTerzo = [];

//     if (a.length == b.length) {
//         var lengthList = a.length;
//         for (var i = 0; i < lengthList; i++){
//             arrayTerzo.push(a[i]);
//             arrayTerzo.push(b[i]);
//         }
//     }else {
//         console.log('gli array non sono lunghi uguali'); 
//     }
//     return  arrayTerzo;
//  }

//  myFunction(arrayPrimo, arraySecondo);
//  console.log(myFunction(arrayPrimo, arraySecondo));

//  if (arrayPrimo.length == arraySecondo.length) {
//     var lengthList = arrayPrimo.length;
//     for (var i = 0; i < lengthList; i++){
//         arrayTerzo.push(arrayPrimo[i]);
//         arrayTerzo.push(arraySecondo[i]);
//     }
// }else {
//     console.log('gli array non sono lunghi uguali'); 
// }


// 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var parola = prompt('inserisci una parola');



function myFunction(str) {
    var lettera = str[0];

    lettera = lettera.toUpperCase();

    str = str.substring(1).toLowerCase();

    str = lettera + str;

    return str;
    
}

console.log(myFunction(parola));