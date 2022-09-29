addEventListener("DOMContentLoaded", (e)=>{
    let total= document.querySelector("#form");
    total.addEventListener("submit", (e)=>{
        e.preventDefault();
        
        let pago= document.querySelector("#pago").value;
        if (pago>130000){
            let total= pago-(pago*0.15);
            document.querySelector("#total").innerHTML= 'El total a pagar es de${total} y se le palica un descuento del 15%';
        } else{
            alert("normal")
            document.querySelector("#total").innerHTML= 'El total a pagar es de ${pagar}';
        }
    })
})