// Crea una matriz 10x10 para almacenar los resultados de la tabla de multiplicación
let tablaMultiplicacion = [];
for (let i = 0; i < 10; i++) {
  tablaMultiplicacion[i] = [];
  for (let j = 0; j < 10; j++) {
    tablaMultiplicacion[i][j] = (i + 1) * (j + 1);
  }
}

// Imprime la tabla de multiplicación
for (let i = 0; i < 10; i++) {
  let fila = "";
  for (let j = 0; j < 10; j++) {
    fila += tablaMultiplicacion[i][j] + "\t";
  }
  console.log(fila);
}