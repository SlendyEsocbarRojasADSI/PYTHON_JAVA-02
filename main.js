let A= 0.10;
let B= 0.15;
let C= 0.20;

let membre= prompt("Ingresar su categoria de membresia"+"A, B, C");
    if(membre==="A"){
        let price= Number(prompt("Ingresar el costo de su helado:"));
        let descu= price*A;
        let total= price-descu;

        alert("Por tener una membresia tipo A, recibiste un descuento del" +A+ "%, el precio que tendras que pagar por tu helado es de: $" +total);
    }
    else if (membre===B){
        let price= Number(prompt("Ingresar el costo de su helado:"));
        let descu= price*B;
        let total= price-descu;

        alert("Por tener una membresia tipo B, recibiste un descuento del" +B+ "%, el precio que tendras que pagar por tu helado es de: $" +total);
    }
    else if (membre===C){
        let price= Number(prompt("Ingresar el costo de su helado:"));
        let descu= price*C;
        let total= price-descu;

        alert("Por tener una membresia tipo C, recibiste un descuento del" +C+ "%, el precio que tendras que pagar por tu helado es de: $" +total)
    }