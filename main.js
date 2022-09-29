let x=0;
let nums= Number(prompt("Ingresar el total de numeros:"));
let suma= 0;
let multi= 1;
for (var i = 0; i < nums; i++){
    let num= Number(prompt("Ingresar un numero:"));
    if (num % 2 === 0){
        suma += num;
    } else{
        multi *= num;
    }
    alert("La suma de los numeros pares es de:" +suma);
    alert("La multiplicacion de los numeros impares es de:" +multi);
}