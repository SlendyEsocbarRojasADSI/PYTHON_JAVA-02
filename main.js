let iva= 0.20;
let produs= 1;
for (var i=1; i<=produs; i++){
    let produ= Number(prompt("Ingrese el valor de los 5 productos:"));
    let prodi= produ*iva;
    alert("Por sus 5 productos debe pagar este IVA: $" +prodi+ "mil pesos");

    let total= prodi+produ;
    alert("El monto total a pagar por los 5 productos es de: $" +total+ "mil pesos");
}