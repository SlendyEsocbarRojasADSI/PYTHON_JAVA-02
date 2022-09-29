function mayor(num1, num2, num3){
    if (num1>=num2 && num2>=num3){
        let resultado= "El numero mayor es:" +num1;
        return resultado;
    }
    else if (num2>=num1 && num1>=num3){
        let resultado= "El numero mayor es:" +num2;
        return resultado;
    }else{
        let resultado= "El numero mayor es:" +num3;
        return resultado;
    }
}

addEventListener("DOMContentLoaded", (e)=>{
    let cal= document.querySelector('#form');
    cal.addEventListener("submit", (e)=>{
        e.preventDefault();

        let num1= document.querySelector("#num1").value;
        let num2= document.querySelector("#num2").value;
        let num3= document.querySelector("#num3").value;

        let resultado= mayor(num1, num2, num3);
        document.querySelector("#res").innerHTML=resultado
    })
})