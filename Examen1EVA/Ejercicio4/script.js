function calcularHorasRestantes(fechaInicio) {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Convertir la fecha de inicio del examen a un objeto Date
    const fechaExamen = new Date(fechaInicio);

    // Calcular la diferencia en milisegundos entre la fecha de inicio y la fecha actual
    const diferenciaMilisegundos = fechaExamen - fechaActual;

    // Verificar si la fecha de inicio es en el futuro
    if (diferenciaMilisegundos > 0) {
        // Calcular las horas restantes redondeando hacia arriba
        const horasRestantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60));

        console.log(`Quedan ${horasRestantes} horas para el inicio del examen.`);
    } else {
        console.log("El examen ya ha finalizado.");
    }
}

// Fecha de inicio del examen (05/12/2023)
const fechaInicioExamen = "2023-12-05T00:00:00";

// Llamar a la función con la fecha de inicio del examen
calcularHorasRestantes(fechaInicioExamen);
