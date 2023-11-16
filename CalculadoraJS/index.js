function agregarAPantalla(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    try {
        document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}