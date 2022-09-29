function positivo(num){
    if (num>0 && num<100){
        let resul= "El numero es positivo y es menor a 100";
        return resul;
    }
    else{
        let resul= "El numero o es negativo o es mayor a 100";
        return resul;
    }
}

addEventListener("DOMContentLoaded", (e)=>{
    let cal= document.querySelector('#form');
    cal.addEventListener("submit", (e)=>{
        e.preventDefault();

        let num= document.querySelector("#numero").value;
        let resul = positivo(num);

        document.querySelector("#res").innerHTML=resul
    })
})