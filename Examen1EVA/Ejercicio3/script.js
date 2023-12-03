// Crear un array con valores numéricos, incluyendo algunos repetidos
const arrayNumerico = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];

// Eliminar elementos repetidos utilizando el operador spread (...) y Set
const arraySinRepetidos = [...new Set(arrayNumerico)];

console.log("Array original:", arrayNumerico);
console.log("Array sin elementos repetidos:", arraySinRepetidos);
