let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')

function calculadora(operacion, a, b) {
    if (operacion == 'sumar') {
        return sumar(a, b);
    } else if (operacion == 'restar') {
        return restar(a, b);
    } else if (operacion == 'multiplicar') {
        return multiplicar(a, b);
    } else if (operacion == 'dividir') {
        return dividir(a, b);
    } else {
        return 'No es una operación válida';
    }
}

console.log(calculadora('sumar', 50, 5));