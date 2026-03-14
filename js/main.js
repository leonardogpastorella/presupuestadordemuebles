

const URL = "./db/data.json";


const selectMueble = document.getElementById("muebleSelect");
const inputMetros = document.getElementById("metros");
const inputCajones = document.getElementById("cajones");
const botonCalcular = document.getElementById("calcularBtn");
const resultadoDiv = document.getElementById("resultado");

let muebles = [];

function obtenerMuebles() {

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            muebles = data
            cargarMuebles(data)
        })
        .catch(error => {
            resultadoDiv.textContent = "Error al cargar los muebles."
        })

}

function cargarMuebles(listaMuebles) {

    listaMuebles.forEach(mueble => {

        const option = document.createElement("option")

        option.value = mueble.nombre
        option.textContent = mueble.nombre

        selectMueble.appendChild(option)

    })

}

obtenerMuebles()




function calcularTotal(mueble, metros, cajones) {
    return (metros * mueble.precioMetro) +
           (cajones * mueble.precioCajon);
}

function mostrarResultado(mueble, metros, cajones, total) {
    resultadoDiv.innerHTML = `
        <p>Mueble: ${mueble.nombre}</p>
        <p>Metros: ${metros}</p>
        <p>Cajones: ${cajones}</p>
        <p>Total: $${total}</p>
    `;
}


botonCalcular.addEventListener("click", () => {

    const nombreSeleccionado = selectMueble.value;
    const metros = parseInt(inputMetros.value);
    const cajones = parseInt(inputCajones.value);

    if (metros <= 0 || cajones < 0 || isNaN(metros) || isNaN(cajones)) {
        resultadoDiv.textContent = "Datos inválidos";
        return;
    }

    const muebleEncontrado = muebles.find(m => m.nombre === nombreSeleccionado);

    const total = calcularTotal(muebleEncontrado, metros, cajones);

    mostrarResultado(muebleEncontrado, metros, cajones, total);

    guardarPresupuesto(muebleEncontrado.nombre, metros, cajones, total);
    mostrarPresupuesto();
});




