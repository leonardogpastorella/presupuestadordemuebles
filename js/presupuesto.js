function guardarPresupuesto(mueble, metros, cajones, total) {
    const presupuesto = { 
        mueble: mueble, 
        metros: metros, 
        cajones: cajones, 
        total: total
    }

localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
}

function mostrarPresupuesto(){
    const contenedor = document.getElementById("contenidoPresupuesto")
    const presupuestoGuardado = JSON.parse(localStorage.getItem("presupuesto"));

    if (!presupuestoGuardado)    {
        contenedor.innerHTML = "<p>No hay presupuesto guardado.</p>";
        return;
    }

    contenedor.innerHTML = `
        <p><strong>Mueble:</strong> ${presupuestoGuardado.mueble}</p>
        <p><strong>Metros:</strong> ${presupuestoGuardado.metros}</p>
        <p><strong>Cajones:</strong> ${presupuestoGuardado.cajones}</p>
        <p><strong>Total:</strong> $${presupuestoGuardado.total}</p>
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

