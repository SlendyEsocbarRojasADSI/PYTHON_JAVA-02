let pago= document.querySelector("#pago").value;
    if (pago>130000){
        let total= pago-(pago*0.15);
        document.querySelector("#total").innerHTML= 'El total a pagar es de${total} y se le palica un descuento del 15%';
    } else{
        document.querySelector("#total").innerHTML= 'El total a pagar es de ${pagar}';
    }