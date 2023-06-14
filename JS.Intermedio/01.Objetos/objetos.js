var persona = {
    nombre: 'Carlos',
    edad: 21,
    saludar: function () {
        console.log("Hola " + this.nombre);
    }
};

persona.saludar();