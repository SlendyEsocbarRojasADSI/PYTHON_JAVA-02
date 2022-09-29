function comprobar(seleccionado){
    if (seleccionado == "trian"){
        document.querySelector("#formTrian").style.display= 'block';
    } else{
        document.querySelector("#formCircu").style.display= 'block';
    }
    let seleccionado;
    addEventListener("DOMContentLoaded", (e)=>{
        let dato= document.querySelector("#dato");
        dato.addEventListener("change", (e)=>{
            document.querySelector("#formTrian").style.display= 'none';
            document.querySelector("#formCircu").style.display= 'none';
            seleccionado = dato.value;
            comprobar(seleccionado);
        })
    })
    addEventListener("DOMContentLoaded", (e)=>{
        let area= document.querySelector("#area");
        area.addEventListener("submit", (e)=>{
            e.preventDefault();

            if (seleccionado=="trian"){
                let base= document.querySelector("#base").value;
                let altu= document.querySelector("#altu").value;
                let area= (base*altura)/2;

                document.querySelector("#res").innerHTML= area;
            } else{
                alert("Debes seleccionar una figura!!")
            }
        })
    })
}