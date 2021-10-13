let listaNumeros = [];
cantN = 10;//aqui dices como quieres que sea de grande el array que vas a generar
b = 0;//Aqui se almacenara la suma de los numeros
for(i = 0; i < cantN; i++){// Un bucle para generar rellenar el array utilizando el tamañano que dices en la linea 2
        a = Math.trunc(Math.random() * 100);//Genera numeros aleatorios entre 0 y 100 redondeandolos
        listaNumeros.push(a);
        if(a >= 0 && a <= 100)//Filtro para que solo sume los numeros que esten dentro de 0 y 100
                b += a;
}
console.log("--Los numeros del array son--");
console.log(listaNumeros);
console.log("------SUMA DE NUMEROS--------");
console.log(b);
console.log("------MEDIA--------");
console.log(b / cantN);//hace la media de la suma de los numeros dividiendolo entre la cantidad de numeros que generamos

numeros = listaNumeros.sort((x, y) => x - y);//ordena toda la lista de los numeros
let mitad = Math.floor(numeros.length / 2);//sacamos la mitad del array redondeando hacia abajo
mediana = numeros.length % 2 == 1 ? numeros[mitad] : (numeros[mitad - 1] + numeros[mitad + 2])/ 2;
//numeros.length % 2 == 1 esto comprueba si la longitud del array es impar
// de ser asi solo optiene como resultado numeros[mitad]
//si no fuera impar optenemos el resultado de (numeros[mitad - 1] + numeros[mitad + 2])/ 2
//eso significa que optenemos el elemento que esta antes de la mitad y despues de la mitad se suman entre ellos y se divide entre 2
console.log("-----MEDIANA------");
console.log(mediana)


listaNumeros.sort();//ponemos la lista en orden ascendente
let cuenta = 1
let x = listaNumeros[0];//le damos a x la posicion 0 del array de la lista de numeros
let numeros = [];//generamos 2 arrays vacios 
let conteo = [];


for(let i = 1; i <= listaNumeros.length;i++){//iniciamos el bucle pero i esta en 1 ya que la pos de x empezaba en 0
        if(x == listaNumeros[i]){//aqui se comprueba si es igual el valor en el que esta x con el valor en el q estara i
                cuenta = cuenta + 1;//de ser asi se contara el numero que se repite
        }else{//de no ser igual entrara y 
                numeros.push(x);//guardara el numero que tenia x
                conteo.push(cuenta);//el que tenia cuenta
                x = listaNumeros[i];//cambiara a la nueva posicon que es en la que se encuentra i que es 1+ que la de x
                cuenta = 1;//y "reseteara" cuenta a 1 para que vuelva a empezar
        }
}
console.log(listaNumeros);
let max = Math.max(...conteo);//obtiene el numero mas repetido del array de conteo
let numeroMasrep = conteo.indexOf(max);
let moda = numeros[numeroMasrep];//le da a moda la el valor de la pos mas repetida de numeros

console.log("--MODA--");
console.log(moda);
