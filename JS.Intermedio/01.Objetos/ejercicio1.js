/**
 * Imaginemos que vamos a desarrollar un juego, y debemos crear un 
 * objeto Jugador que tenga una propiedad de fuerza que inicialmente 
 * tenga el valor 1 de la fuerza del jugador y un método consultarFuerza 
 * que nos muestre un mensaje con la fueza del jugador.
 **/ 

function Jugador() {

    this.fuerza = 1;

    this.incrementarFuerza = function() {
        this.fuerza++;
        console.log("Incrementando fuerza...")
    }

    this.consultarFuerza = function() {
        console.log("La fuerza del jugador es " + this.fuerza);
    }
}

    var jugador1 = new Jugador();
    jugador1.consultarFuerza();
    jugador1.incrementarFuerza();
    jugador1.consultarFuerza();