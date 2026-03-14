
    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
    
    function guardarPresupuesto(
    nombreCliente,
    telefonoCliente,
    emailCliente,
    mueble,
    metros,
    cajones,
    material,
    color,
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
        color,
        formaPago,
        total
    }
    presupuestos.push(presupuesto);
localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
}

function mostrarPresupuesto(){
    const contenedor = document.getElementById("contenidoPresupuesto")
    if (presupuestos.length === 0)    {
        contenedor.innerHTML = "<p>No hay presupuestos guardados</p>";
        return;
    }

    contenedor.innerHTML = ""
    presuspuestos.forEach(p => {
        contenedor.innerHTML += `
        div class="presupuesto">
            <p>Cliente: ${p.nombreCliente}</p>
            <p>Mueble: ${p.mueble}</p>
            <p>total: $${p.total}</p>

            <button onclick = "eliminarPresupuesto(${p.id})">Eliminar</button>
        </div>  `
            })
        }

    

   
    document.getElementById("eliminarbtn").addEventListener("click", eliminarPresupuesto)
    document.getElementById("enviarbtn").addEventListener("click", enviarPresupuesto)

function eliminarPresupuesto(id) {
    presupuestos = presupuestos.filter(p => p.id !== id);
    localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    mostrarPresupuesto();
}

function enviarPresupuesto() {
    alert("presupuesto enviado correctamente.")
    localStorage.removeItem("presupuesto");
    mostrarPresupuesto();
}



