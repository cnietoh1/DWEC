/**
 * Suma todo los números del siguiente array
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 */

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var total = 0;

for(var i = 0; i < numeros.length; i++) {
    total += numeros[i];
}

console.log("Todos los números del array suman " + total);
