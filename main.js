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

        document.querySelector("#mayor").innerHTML= "";
        document.querySelector("#menor").innerHTML= "";
        document.querySelector("#iguales").innerHTML= "";

        if (num1>=num2 && num2>=num3){
            document.querySelector("#mayor").innerHTML= "El numero mayor es:" +num1;
            if (num2>=num3){
                document.querySelector("#menor").innerHTML= "El numero menor es:" +num2;
            } else{
                document.querySelector("#menor").innerHTML= "El numero menor es:" +num3;
            }
        } else if (num2>num1 && num2>=num3){
            document.querySelector("#mayor").innerHTML= "El numero mayor es" +num2;
            if (num1>num3){
                document.querySelector("#menor").innerHTML= "El numero menor es:" +num3;
            } else{
                document.querySelector("#menor").innerHTML= "El numero menor es:" +num1;
            }
        } else if (num3>num1 && num3>=num2){
            document.querySelector("#mayor").innerHTML= "El numero mayor es:" +num3;
            if (num1>num2){
                document.querySelector("#menor").innerHTML= "El numero menor es:" +num2;
            } else{
                document.querySelector("#menor").innerHTML= "El numero menor es:" +num1;
            }
        } else{
            document.querySelector("#iguales").innerHTML= "Todos los numeros son iguales" +num1
        }
    }
}

addEventListener("DOMContentLoaded", (e)=>{
    let cal= document.querySelector('#form');
    

    let num1= document.querySelector("#num1").value;
    let num2= document.querySelector("#num2").value;
    let num3= document.querySelector("#num3").value;

    let resultado= mayor(num1, num2, num3);
    document.querySelector("#res").innerHTML=resultado
    mayor(num1, num2, num3);
})