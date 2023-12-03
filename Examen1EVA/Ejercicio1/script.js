// Clase Cliente para representar la información del cliente
class Cliente {
    // Constructor que recibe los datos del cliente
    constructor(nombre, direccion, telefono, dni) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.dni = dni;
    }
}

// Clase Factura para representar la información de la factura
class Factura {
    // Constructor que recibe el cliente y los elementos de la factura
    constructor(cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.base_imponible = 9; // Valor por defecto para la base imponible
        this.iva = 21; // Valor por defecto para el IVA
        this.total = 7; // Valor por defecto para el total
        this.forma_pago = "contado"; // Valor por defecto para la forma de pago
        this.empresa = null; // Inicializamos la propiedad empresa como nula
    }

    // Método para calcular el total de la factura con el IVA aplicado
    calcularTotal() {
        // Calculamos el subtotal sumando la cantidad * precio de cada elemento
        const subtotal = this.elementos.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
        
        // Calculamos el monto del IVA
        const ivaAmount = (subtotal * this.iva) / 100;
        
        // Actualizamos el total sumando el subtotal y el IVA
        this.total = subtotal + ivaAmount;
    }

    // Método para mostrar el total de la factura
    mostrarTotal() {
        console.log(`Total de la factura: ${this.total} euros`);
    }
}

// Instanciación de la clase Cliente con datos de ejemplo
const cliente = new Cliente("Nombre del Cliente", "Dirección del Cliente", "123456789", "12345678A");

// Instanciación de la clase Factura con elementos de ejemplo
const elementosFactura = [
    { descripcion: "Producto 1", cantidad: 2, precio: 10 },
    { descripcion: "Producto 2", cantidad: 1, precio: 20 }
];

// Creación de una nueva factura
const factura = new Factura(cliente, elementosFactura);

// Configuración de la propiedad empresa con datos de ejemplo
factura.empresa = {
    nombre: "Nombre de la Empresa",
    direccion: "Dirección de la Empresa",
    telefono: "987654321",
    cif: "CIF123456789"
};

// Cálculo y muestra del total de la factura
factura.calcularTotal();
factura.mostrarTotal();
