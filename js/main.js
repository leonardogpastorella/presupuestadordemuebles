
const muebles = ["placard", "cocina", "biblioteca"] 

const precioMetro = 350000;

const precioCajon = 40000;


function elegirMueble(listaMuebles) {
    let tipoMueble = prompt("Elegí un mueble: placard, biblioteca o cocina");
    if (!tipoMueble) {
        return null;
    }
    tipoMueble = tipoMueble.toLowerCase();
    for (let mueble of listaMuebles) {
        if (mueble === tipoMueble) {
            return mueble;
        }
    }
    return null;
}

function pedirMedidas() {

    let metros = parseInt(prompt("Ingresá los metros lineales"));
    let cajones = parseInt(prompt("Cantidad de cajones"));

    if (metros <= 0 || cajones < 0) {
        return null;
    }

    return {
        metros: metros,
        cajones: cajones
    };
}

function calcularPresupuesto(metros, cajones) {
    let precioBase = metros * precioMetro;
    let extraCajones = cajones * precioCajon;
    return precioBase + extraCajones;
}


function mostrarPresupuesto(mueble, metros, cajones, total) {
    alert(
        "Presupuesto final:\n" +
        "Mueble: " + mueble + "\n" +
        "Metros: " + metros + "\n" +
        "Cajones: " + cajones + "\n" +
        "Total: $" + total
    );
}


let continuar = "si";

while (continuar === "si") {

    let mueble = elegirMueble(muebles);

    if (mueble === null) {
        alert("Mueble no válido");
        continuar = prompt("¿Calcular otro presupuesto? si / no");
        continue;
    }

    let datos = pedirMedidas();

    if (datos === null) {
        alert("Datos inválidos");
        continuar = prompt("¿Calcular otro presupuesto? si / no");
        continue;
    }

    let total = calcularPresupuesto(datos.metros, datos.cajones);

    mostrarPresupuesto(mueble, datos.metros, datos.cajones, total);

    continuar = prompt("¿Calcular otro presupuesto? si / no");
}
