let dato= document.querySelector('#dato');
dato.addEventListener("change", ()=>{
    let Selection= dato.value;
    let boton= document.querySelector('#form');
    boton.addEventListener('submit', (e)=>{
        e.preventDefault();
        let sueldoEmp= pagar(Selection);
        document.querySelector('#total').innerHTML= sueldoEmp;
    })
})
function pagar(Selection){
    let horas= document.querySelector('#horas').value;
    if (Selection=='planta'){
        const sueldo= 20000;
        let pagaTotal=sueldo*horas;
        return pagaTotal;
    } else{
        alert("Debes seleccionar un cargo")
    }
}