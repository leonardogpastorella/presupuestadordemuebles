

const URL = "./db/data.json";


const selectMueble = document.getElementById("muebleSelect");
const inputMetros = document.getElementById("metros");
const inputCajones = document.getElementById("cajones");
const selectMaterial = document.getElementById("selectMaterial");
//const inputColor = document.getElementById("color");
const selectPago = document.getElementById("formaPago");
const botonCalcular = document.getElementById("calcularBtn");
const resultadoDiv = document.getElementById("resultado");
const inputNombre = document.getElementById("clienteNombre");
const inputTelefono = document.getElementById("clienteTelefono");
const inputEmail = document.getElementById("clienteEmail");



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

function mostrarResultado(
    mueble,
    metros, 
    cajones, 
    total, 
    nombreCliente, 
    telefonoCliente, 
    emailCliente, 
    material, 
    formaPago
) {
    resultadoDiv.innerHTML = `
        <p>Cliente: ${nombreCliente}</p>
        <p>Teléfono: ${telefonoCliente}</p>
        <p>Email: ${emailCliente}</p>


        <p>Mueble: ${mueble.nombre}</p>
        <p>Metros: ${metros}</p>
        <p>Cajones: ${cajones}</p>
        <p>Material: ${material}</p>
        

        <p>Forma de Pago: ${formaPago}</p>

        <p>Total: $${total}</p>
    `;
}


botonCalcular.addEventListener("click", () => {

    const nombreSeleccionado = selectMueble.value;
    const metros = parseInt(inputMetros.value);
    const cajones = parseInt(inputCajones.value);

    const material = selectMaterial.value;
    // const color = inputColor.value;
    const formaPago = selectPago.value;
    
    const nombreCliente = inputNombre.value;
    const telefonoCliente = inputTelefono.value;
    const emailCliente = inputEmail.value;


    if (metros <= 0 || cajones < 0 || isNaN(metros) || isNaN(cajones)) {
        resultadoDiv.textContent = "Datos inválidos";
        return;
    }

    const muebleEncontrado = muebles.find(m => m.nombre === nombreSeleccionado);

    const total = calcularTotal(muebleEncontrado, metros, cajones);

    mostrarResultado(
        muebleEncontrado,
        metros,
        cajones,
        total,
        nombreCliente,
        telefonoCliente,
        emailCliente,
        material,
        //color,
        formaPago
    );

    guardarPresupuesto(muebleEncontrado.nombre, metros, cajones, total);
    mostrarPresupuesto();
});




