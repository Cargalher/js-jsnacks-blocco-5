/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */



// snack 1

var zucchini = [
    
        variety1 = {
            variety: "Aristocrat",
            weight: 0.5,
            length: 7,
    
        },
        variety2 = {
            variety: "Black Zucchini",
            weight: 0.6,
            length: 6.5,
    
        },
        variety3 = {
            variety: 'Zucchini Gadzukes',
            weight: 0.6,
            length: 10,
    
        },
        variety4 = {
            variety: 'Caserta',
            weight: 0.7,
            length: 13,
    
        },
        variety5 = {
            variety: 'Nimba',
            weight: 2.5,
            length: 11,
    
        },
        variety6 = {
            variety: 'Table Dainty',
            weight: 0.3,
            length: 8,
    
        },
        variety7 = {
            variety: 'Gold Rush',
            weight: 0.5,
            length: 7.5,
    
        },
        variety8 = {
            variety: 'Black Beauty',
            weight: 0.6,
            length: 12,
    
        },
        variety9 = {
            variety: 'Embassy',
            weight: 0.2,
            length: 8.5,
    
        },
        variety10 = {
            variety: 'Greyzini',
            weight: 0.3,
            length: 9,
    
        },
    
    ]
     
    var weightTotal = zucchini.reduce(function(prev, cur){
        return prev + cur.weight;
    }, 0);
    console.log('Total Weight:', weightTotal); 

    /*fabio's way
var weightzucchini = 0;
    for(var i=0;i<zucchini.length;i++){
        var zucchiniElemento = zucchini [i];
        console.log(zucchiniElemento);
        console.log(zucchiniElemento.weight);
        weightzucchini += zucchiniElemento.weight;
    }
    console.log('Total Weight:' +  weightzucchini);
*/


// snack 2

/*
var zucchini = [
    
        variety1 = {variety: "Aristocrat", weight: 0.5, length: 7,},
        variety2 = {variety: "Black Zucchini", weight: 0.6, length: 6.5,},
        variety3 = {variety: 'Zucchini Gadzukes', weight: 0.6,length: 10,},
        variety4 = {variety: 'Caserta', weight: 0.7, length: 13,},
        variety5 = {variety: 'Nimba', weight: 2.5, length: 11,},
        variety6 = {variety: 'Table Dainty', weight: 0.3, length: 8,},
        variety7 = {variety: 'Gold Rush', weight: 0.5, length: 7.5,},
        variety8 = {variety: 'Black Beauty', weight: 0.6, length: 12,},
        variety9 = {variety: 'Embassy', weight: 0.2, length: 8.5,},
        variety10 = {variety: 'Greyzini', weight: 0.3, length: 9,},
    ]

 //to check the length of one zucchini variety we use for example
//console.log(zucchini[1].length);         //this return the length of the zucchini variety2

//we declare two empty arrays to store the zucchini
//if they are longer than 15cm
var zucchineGrandi=[];
//if they are shorter than 15cm
var zucchinePiccole = [];

//using a for loop to traverse the 10 objects and check their length 
for(var i=0; i<zucchini.length ; i++){
    if(zucchini[i].length < 15) {               //if lenght is less than 15 cm 
        zucchinePiccole.push(zucchini[i]);      //we push this variety in zucchinePiccole Array
        //console.log(zucchinePiccole);
    } else if (zucchini[i].length > 15) {       //if lenght is more than 15 cm
        zucchineGrandi.push(zucchini[i]);       //we push this variety in zucchineGrandi Array
        //console.log(zucchinePiccole);
    }
}
console.log(zucchineGrandi);                    //printing to the console the two arrays
console.log(zucchinePiccole);                   //printing to the console the two arrays

*/
// snack 3
/*
function reverseString (word){
    var reverseWord= word.split ('').reverse().join('');
    console.log(reverseWord);
}
reverseString("ciao");
*/

// snack 4
/*
function elementFusion (array1, array2) {
    var unionArray = [];

    for (var i =0; i<array1.length ; i++) {
      unionArray.push(array1[i], array2[i]);
    }
    console.log(unionArray);
    return unionArray;
}

var arrayA = [1, 2, 3, 4, 5];
var arrayB = ["a", "b", "c", "d", "e"];
elementFusion(arrayA, arrayB);

//to have the elements printed in the console i simply console.log
console.log(elementFusion(arrayA, arrayB));
*/
/*
// snack 5

function threeElements (element1, number1, number2) {
    if (number1< number2 && number2<element1.length) {
        var result = element1.slice(number1, number2);
        console.log(result);
    }
}

array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

threeElements (array1, 2, 9);*/