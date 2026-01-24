// lista de muebles 
const muebles = [
    "placard",
    "cocina",
    "biblioteca"
];

// precio por metro lineal
const precioMetro = 350000;

// precio por cajón
const precioCajon = 40000;


// funcion para el presupuesto
function calcularPresupuesto(mueble, metros, cajones) {
    let precioBase = metros * precioMetro;
    let extraCajones = cajones * precioCajon;
    return precioBase + extraCajones;
}

// menu para el usuario
let continuar = "si";

while (continuar === "si") {

    let tipoMueble = prompt("Elegí un mueble: placard, biblioteca o cocina");

    if (!tipoMueble) {
        alert("No ingresaste ningún mueble");
        
    }
    //evitar problemas con mayusculas
    tipoMueble = tipoMueble.toLowerCase();

    let muebleSeleccionado = null;

    for (let mueble of muebles) {
        if (mueble === tipoMueble) {
            muebleSeleccionado = mueble;
            break;    }
        }
    
    //si el mueble no se encuentra en la lista
    if (muebleSeleccionado === null) {
        alert("No se encontró el mueble ingresado");
        continuar = prompt("¿Calcular otro presupuesto? si / no");
        continue;
    }

    let metros = parseInt(prompt("Ingresá los metros lineales"));
    let cajones = parseInt(prompt("Cantidad de cajones"));

    //si el usuario ingresa datos invalidos
    if (metros <= 0 || cajones < 0) {
        alert("Datos inválidos");
        continuar = prompt("¿Calcular otro presupuesto? si / no");
        continue;
    }

    let total = calcularPresupuesto(muebleSeleccionado, metros, cajones);
    
    //mostrar el presupuesto final
    alert(
        "Presupuesto final:\n" +
        "Mueble: " + tipoMueble + "\n" +
        "Metros: " + metros + "\n" +
        "Cajones: " + cajones + "\n" +
        "Total: $" + total
    );

    continuar = prompt("¿Calcular otro presupuesto? si / no");
}
