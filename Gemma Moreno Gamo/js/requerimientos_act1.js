//Creamos un array con 10 numeros aleatorios de 0 a 100
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
let array = [];

for (let i = 0; i < 10; i++) {
    array.push(getRandomInt(0, 100));
}

console.log(array);

//Media
//Obtenemos la suma total y luego dividimos entre la longitud del array
let suma = 0;

for (let i in array) {
    suma = suma + array[i];
}
console.log("La suma es: " + suma);

console.log("La longitud es: " + array.length);

var media = suma / array.length;
console.log("La media es: " + media);

//Ordenamos numericamente y mostramos

let orden = array.sort(function (a, b) {
    return a - b
});
console.log("Array ordenado: " + orden);

//
//Mediana
//Obtenemos la posicion central del array

if (orden.length % 2 == 0) {
    var pos4 = orden.length / 2
    var pos5 = pos4 - 1
    var num1 = orden[pos4]
    var num2 = orden[pos5]
    var mediana = (num1 + num2) / 2
} else {
    var pos_central = (orden.length - 1) / 2
    var mediana = orden[pos_central]
}
console.log("La mediana es: " + mediana);

//Moda 
//Esta funcion nos dice cuantas veces aparece un número

function calcularFrecuencia(num, array) {
    var num_veces = 0
    for (var pos in array) {
        if (array[pos] == num) {
            num_veces++
        }
    }
    return num_veces
}

//Esta funcion nos facilita la posición del número mayor

function obtenerPosMayor(valores) {
    var posMayor = 0
    var numMayor = valores[0]
    for (var pos in valores) {
        if (valores[pos] > numMayor) {
            numMayor = valores[pos]
            posMayor = pos
        }
    }
    return posMayor
}
//Nos devuelve el resultado de la Moda
//en caso de repetirse varios números 
//nos dara como resultado el repetido de menor valor.

function obtenerModa(numeros) {
    var frecuencias = new Array(numeros.length)
    for (var pos in numeros) {
        var numero = numeros[pos]
        frecuencias[pos] = calcularFrecuencia(numero, numeros)
    }
    var posModa = obtenerPosMayor(frecuencias)
    return numeros[posModa]
}
var moda = obtenerModa(array);
console.log("La moda es: " + moda);