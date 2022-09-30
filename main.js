let estus= 5;
let promedi= 0;
for (var i=1; i<=estus; i++){
    let name= prompt("Ingresar su nombre:");
    let apelli= prompt("Ingresar su apellido:");
    let edad= prompt("Ingresar su edad:");
    let nota= Number(prompt("Ingresar su nota:"));
    promedi += nota/estus;
}
alert("La nota promedio en la rama de computacion es de:" +promedi);