

const URL = "./db/data.json";

const inputNombre = document.getElementById("clienteNombre");
const inputTelefono = document.getElementById("clienteTelefono");
const inputEmail = document.getElementById("clienteEmail");
const selectMueble = document.getElementById("muebleSelect");
const inputMetros = document.getElementById("metros");
const inputCajones = document.getElementById("cajones");
const selectMaterial = document.getElementById("selectMaterial");
const selectPago = document.getElementById("formaPago");
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

function mostrarResultado(
    nombreCliente, 
    telefonoCliente, 
    emailCliente, 
    mueble,
    metros, 
    cajones, 
    material, 
    formaPago,
    total    
    
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
        nombreCliente,
        telefonoCliente,
        emailCliente,
        muebleEncontrado,
        metros,
        cajones,
        material,
        formaPago,
        total
    );

    Swal.fire({
    title: "¿Enviar presupuesto?",
    text: "Revisá los datos antes de continuar",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Enviar",
    cancelButtonText: "Seguir editando"
}).then((result) => {

    if (result.isConfirmed) {

        guardarPresupuesto(
            nombreCliente,
            telefonoCliente,
            emailCliente,
            muebleEncontrado.nombre,
            metros,
            cajones,
            material,
            formaPago,
            total
        );

        mostrarPresupuesto();

        Swal.fire({
            title: "¡Enviado!",
            text: "El presupuesto fue enviado y guardado correctamente",
            icon: "success"
        });

    } else {
        Swal.fire({
            title: "Podés seguir editando",
            icon: "info"
        });
    }

});
});
mostrarPresupuesto();
