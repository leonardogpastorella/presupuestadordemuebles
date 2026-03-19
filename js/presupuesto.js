
    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
    
    function guardarPresupuesto(
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
    const presupuesto = {
    nombreCliente,
    telefonoCliente,
    emailCliente,
    mueble,
    metros,
    cajones,
    material,
    formaPago,
    total
    }
    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
    
    if (indiceEditando !== null) {
        presupuestos[indiceEditando] = presupuesto;
        indiceEditando = null;
    } else {
        presupuestos.push(presupuesto);
    }

localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
}


function mostrarPresupuesto(){

    const contenedor = document.getElementById("contenidoPresupuesto")

    const presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || []

    if (presupuestos.length === 0){
        contenedor.innerHTML = "<p>No hay presupuestos guardados</p>"
        return
    }

    contenedor.innerHTML = ""

    presupuestos.forEach((presupuesto, index) => {

        const div = document.createElement("div")

        div.innerHTML = `
            <p><strong>Cliente:</strong> ${presupuesto.nombreCliente}</p>
            <p>Mueble: ${presupuesto.mueble}</p>
            <p>metros: ${presupuesto.metros}</p>
            <p>cajones: ${presupuesto.cajones}</p>
            <p>material: ${presupuesto.material}</p>
            <p>forma de pago: ${presupuesto.formaPago}</p>
            <p>Total: $${presupuesto.total}</p>

            <button onclick="eliminarPresupuesto(${index})">Eliminar</button>
            <button onclick="editarPresupuesto(${index})">Editar</button>

        `

        contenedor.appendChild(div)

    })

}

function editarPresupuesto(index) {

    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];

    const presupuesto = presupuestos[index];

    indiceEditando = index;

    document.getElementById("clienteNombre").value = presupuesto.nombreCliente;
    document.getElementById("clienteTelefono").value = presupuesto.telefonoCliente;
    document.getElementById("clienteEmail").value = presupuesto.emailCliente;

    document.getElementById("muebleSelect").value = presupuesto.mueble;
    document.getElementById("metros").value = presupuesto.metros;
    document.getElementById("cajones").value = presupuesto.cajones;
    document.getElementById("selectMaterial").value = presupuesto.material;
    document.getElementById("formaPago").value = presupuesto.formaPago;
    
    
    Swal.fire({
    title: "Editando",
    text: "Modificá los datos y recalculá el presupuesto",
    icon: "info"
});
}

function eliminarPresupuesto(index){

    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || []

    presupuestos.splice(index,1)

    localStorage.setItem("presupuestos", JSON.stringify(presupuestos))

    mostrarPresupuesto()

}
function enviarPresupuesto() {
    Swal.fire({
    title: "¡Enviado!",
    text: "El presupuesto fue enviado correctamente",
    icon: "success",
    confirmButtonText: "OK"
});
    
    mostrarPresupuesto();
}



