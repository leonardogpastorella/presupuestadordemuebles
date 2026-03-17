
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
    presupuestos.push(presupuesto);
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
            <p>Total: $${presupuesto.total}</p>

            
                <button onclick="eliminarPresupuesto(${index})">Eliminar</button>
    <button onclick="editarPresupuesto(${index})">Editar</button>

        `

        contenedor.appendChild(div)

    })

}


function eliminarPresupuesto(index){

    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || []

    presupuestos.splice(index,1)

    localStorage.setItem("presupuestos", JSON.stringify(presupuestos))

    mostrarPresupuesto()

}
function enviarPresupuesto() {
    alert("presupuesto enviado correctamente.")
    
    mostrarPresupuesto();
}



