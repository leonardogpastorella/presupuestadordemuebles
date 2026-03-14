function guardarPresupuesto(
        muebleEncontrado.nombre,
        metros,
        cajones,
        total,
        nombreCliente,
        telefonoCliente,
        emailCliente,
        material,
        color,
        formaPago
    ); {
    const presupuesto = { 
        nombreCliente: nombreCliente,
        telefonoCliente: telefonoCliente,
        emailCliente: emailCliente,
        mueble: muebleEncontrado,
        metros: metros,
        cajones: cajones,
        total: total,
        material: material,
        color: color,
        formaPago: formaPago
    }

localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
}

function mostrarPresupuesto(){
    const contenedor = document.getElementById("contenidoPresupuesto")
    const presupuestoGuardado = JSON.parse(localStorage.getItem("presupuesto"));

    if (!presupuestoGuardado)    {
        contenedor.innerHTML = "<p>No hay presupuesto guardado</p>";
        return;
    }

    contenedor.innerHTML = `
        <p>Mueble: ${presupuestoGuardado.mueble}</p>
        <p>Metros: ${presupuestoGuardado.metros}</p>
        <p>Cajones: ${presupuestoGuardado.cajones}</p>
        <p>Total: $${presupuestoGuardado.total}</p>
        <button id="eliminarbtn">Eliminar Presupuesto</button>
        <button id="enviarbtn">Enviar Presupuesto</button>

    `
    document.getElementById("eliminarbtn").addEventListener("click", eliminarPresupuesto)
    document.getElementById("enviarbtn").addEventListener("click", enviarPresupuesto)
}

function eliminarPresupuesto() {
    localStorage.removeItem("presupuesto");
    mostrarPresupuesto();
}

function enviarPresupuesto() {
    alert("presupuesto enviado correctamente.")
    localStorage.removeItem("presupuesto");
    mostrarPresupuesto();
}

document.addEventListener("DOMContentLoaded", mostrarPresupuesto)

