class Vehiculo {
    constructor(marca, modelo, color, añoFabricacion) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.añoFabricacion = añoFabricacion;
      this.cilindrada = cilindrada;
      this.velocidadActual = 0;
    }
  
    mostrarDatos() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año de fabricación: ${this.añoFabricacion}, Cilindrada: ${this.cilindrada} cc`;
    }

    acelerar(velocidad) {
        this.velocidadActual = velocidad;
        console.log(`El coche ha acelerado a ${this.velocidadActual} km/h.`);
    }

    frenar() {
        this.velocidadActual = 0;
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha parado.`);
    }

    arrancar() {
        function arrancarInternamente() {
          console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha arrancado.`);
        }
    
        arrancarInternamente.call(this); // Usar call para establecer el contexto correcto
    }
  }

  class Furgoneta extends Vehiculo {
    constructor(marca, modelo, color, añoFabricacion, numPasajeros) {
      super(marca, modelo, color, añoFabricacion);
      this.numPasajeros = numPasajeros;
    }
  
    detalleFurgoneta() {
      return `${this.mostrarDatos()}, Número de pasajeros: ${this.numPasajeros}`;
    }
  }

  class Todoterreno extends Vehiculo {
    constructor(marca, modelo, color, añoFabricacion, traccion) {
      super(marca, modelo, color, añoFabricacion);
      this.traccion = traccion;
    }
  
    detalleTodoterreno() {
      return `${this.mostrarDatos()}, Tipo de tracción: ${this.traccion}`;
    }
  }

