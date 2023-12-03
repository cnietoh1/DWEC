// Clase base Empleado
class Empleado {
    constructor(nombre = "", departamento = "General") {
        this.nombre = nombre;
        this.departamento = departamento;
    }
}

// Clase Director que hereda de Empleado
class Director extends Empleado {
    constructor(nombre = "", departamento = "General", informes = []) {
        super(nombre, departamento);
        this.informes = informes;
    }
}

// Clase Trabajador que hereda de Empleado
class Trabajador extends Empleado {
    constructor(nombre = "", departamento = "General", proyectos = []) {
        super(nombre, departamento);
        this.proyectos = proyectos;
    }
}

// Clase Ingeniero que hereda de Trabajador
class Ingeniero extends Trabajador {
    constructor(nombre = "", proyectos = [], maquina = "") {
        super(nombre, "Ingeniería", proyectos);
        this.maquina = maquina;
    }
}

// Casos de prueba

// Crear un empleado
const empleado1 = new Empleado("Juan");

// Crear un director con informes
const director1 = new Director("Ana", "Dirección General", ["Informe1", "Informe2"]);

// Crear un trabajador con proyectos
const trabajador1 = new Trabajador("Carlos", "Recursos Humanos", ["Proyecto1", "Proyecto2"]);

// Crear un ingeniero con máquina
const ingeniero1 = new Ingeniero("Elena", ["Proyecto3"], "Máquina1");

// Mostrar información de los empleados
console.log("Empleado 1:", empleado1);
console.log("Director 1:", director1);
console.log("Trabajador 1:", trabajador1);
console.log("Ingeniero 1:", ingeniero1);
