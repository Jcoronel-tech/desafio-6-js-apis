const btn = document.querySelector(".btn");
let result = document.getElementById("result");

btn.addEventListener('click',() => {
    let clp = document.getElementById('clp').value;
    let cod = document.getElementById('selector').value

    getMonedas(clp, cod)
})


async function getMonedas(clp, cod) {

        const res = await fetch(`https://api.gael.cloud/general/public/monedas/${cod}`,)
        const data = await res.json()

        switch (cod){
            case 'USD':
                if(data.Codigo === cod){
                    result.innerHTML = `$${(clp/parseFloat(data.Valor)).toFixed(5)} dólares`;
                }
            break;
            case 'EUR':
                if(data.Codigo === cod){
                    result.innerHTML = `$${(clp/parseFloat(data.Valor)).toFixed(5)} pesos`;
                }
            break;
            case 'UF':
                if(data.Codigo === cod){
                    result.innerHTML = `€${(clp/parseFloat(data.Valor)).toFixed(5)} euros`;
                }
            break;
        }

    var speedCanvas = document.getElementById("speedChart");
    var speedData = {
        labels: ["2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            data: [parseFloat(data.Valor)*0.92, parseFloat(data.Valor)*0.94, parseFloat(data.Valor)*0.91, parseFloat(data.Valor)*0.99, parseFloat(data.Valor)*0.99],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ],
            label: 'Calculo de Moneda por Año',
            fill: false,
            pointRadius: 5,
            borderColor: 'rgb(245, 40, 145)',

        }],
    };

    let lineChart = new Chart(speedCanvas, {
        type: "polarArea",
        data: speedData
    })
}
    



//Variables Globales//

























//JS del antiguo desafio:

/*
const ingresarTareas = document.querySelector("#tareas")
const btnAgregar = document.querySelector("#agregarTareas")
const listaTareas = document.querySelector("#tablaTareas")
const finalizar = document.querySelector("#tareasFinalizadas")

const tablaTareas = []

btnAgregar.addEventListener("click", () => {
    if(ingresarTareas.value == ""){
        Swal.fire({
            icon: 'error',
            title: '¡Espera!',
            text: 'Agrega una tarea para continuar'
        })
    }else{
    const tareas = {id: Date.now(), nombre: ingresarTareas.value}
        tablaTareas.push(tareas)
        ingresarTareas.value = ""
    render()
    }
})


function render(){
    
    let html = ""
    for (let invitado of tablaTareas) {
    html += `
            <tr>
                <th scope="row">${invitado.id}</th>
                <td >${invitado.nombre}</td>
                <td>
                    <input class="form-check-input" type="checkbox" onclick="clickCheck(${invitado.id})" ${invitado.estado ? "checked" : ""} id="inputCheck">
                </td>
                <td>
                    <button type="button" onclick="borrar(${invitado.id})" class="btn-close btn-danger" aria-label="Close"></button>
                </td> 
            </tr>  
            `;
    }
    listaTareas.innerHTML = html;

    const totalTareas = document.getElementById("tareasCreadas");
    totalTareas.innerHTML = tablaTareas.length;
}

function clickCheck(id){
    tablaTareas.map((e) => {
        if(e.id == id) {
            e.estado = ! e.estado
        }
    })
    const printcheck = document.getElementById("tareasFinalizadas");
    const total = tablaTareas.filter((invitado) => invitado.estado == true);
    printcheck.innerHTML = total.length
    render()
}

function borrar(id){
    const index = tablaTareas.findIndex((ele) => ele.id == id)
    tablaTareas.splice(index, 1)
    render()
    clickCheck()
}
*/
