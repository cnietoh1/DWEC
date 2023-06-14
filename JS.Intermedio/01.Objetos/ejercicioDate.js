/*
Escribe un script que imprima un mensaje con la fecha de hoy con el siguiente formato.

Hola, hoy es DD de MM de YYYY
*/

var today = new Date();

var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];;

var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

var message = "Hola hoy es " + day + " de " + months[month] + " de " + year;

console.log(message);