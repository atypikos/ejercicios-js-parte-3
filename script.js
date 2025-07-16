// Números:
// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumar (a,b) {
    return a + b;
}

let resultadoSuma = sumar(3,10);
    console.log(resultadoSuma);
    
// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function restar (a,b) {
    return a - b;
}

let resultadoResta = restar(3,10);
    console.log(resultadoResta);

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiplicar (a,b) {
    return a * b;
}

let resultadoMultiplicar = multiplicar(3,3);
    console.log(resultadoMultiplicar);

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.
function division (a,b) {
    return a / b;
}

let resultadoDivision = division(3,3);
    console.log(resultadoDivision);

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function potencia (a,b) {
    return a ** b;
}

let resultadoPotencia = potencia(3,3);
    console.log(resultadoPotencia);

// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function resto (a,b) {
    return a % b;
}

let resultadoResto = resto(4,3);
    console.log(resultadoResto);

// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function raiz (a) {
    return Math.sqrt(a);
}

let resultadoRaiz = raiz(12);
    console.log(resultadoRaiz);


// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function abs (a) {
    return Math.abs(a);
}

let resultadoAbs = abs(12);
    console.log(resultadoAbs);

// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function redondear (a) {
    return Math.round(a);
}

let resultadoRedondear = redondear(33,3);
    console.log(resultadoRedondear);

// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function random () {
    return Math.random();
}

let resultadoRandom = random();
    console.log(resultadoRandom);