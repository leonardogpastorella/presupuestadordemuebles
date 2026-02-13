// // lista de muebles 
// const muebles = [
//     "placard",
//     "cocina",
//     "biblioteca"
// ];

// // precio por metro lineal
// const precioMetro = 350000;

// // precio por cajón
// const precioCajon = 40000;

//-------------------------------------------------------------------

// class Mueble {
//     constructor(nombre, precioMetro, precioCajon) {
//         this.nombre = nombre;
//         this.precioMetro = precioMetro;
//         this.precioCajon = precioCajon;
//     }
// }

// function calcularPresupuesto(mueble, metros, cajones) {
//     let precioBase = metros * mueble.precioMetro;
//     let extraCajones = cajones * mueble.precioCajon;
//     return precioBase + extraCajones;
// }

// //creacion de objetos
// const mueble1 = new Mueble("placard", 320000, 45000);
// const mueble2 = new Mueble("cocina", 400000, 45000);
// const mueble3 = new Mueble("biblioteca", 300000, 40000);

// //array de objetos
// const muebles = [mueble1, mueble2, mueble3];

// let continuar = "si";

// while (continuar === "si") {

//     let tipoMueble = prompt("Elegí un mueble: placard, biblioteca o cocina");

//     if (!tipoMueble) {
//         alert("No ingresaste ningún mueble");
//         continuar = prompt("¿Calcular otro presupuesto? si / no");
//         continue;
//     }

//     tipoMueble = tipoMueble.toLowerCase();

//     let muebleSeleccionado = null;

//     for (let mueble of muebles) {
//         if (mueble.nombre === tipoMueble) {
//             muebleSeleccionado = mueble;
//             break;
//         }
//     }

//     if (muebleSeleccionado === null) {
//         alert("No se encontró el mueble ingresado");
//         continuar = prompt("¿Calcular otro presupuesto? si / no");
//         continue;
//     }

//     let metros = parseInt(prompt("Ingresá los metros lineales"));
//     let cajones = parseInt(prompt("Cantidad de cajones"));

//     if (metros <= 0 || cajones < 0) {
//         alert("Datos inválidos");
//         continuar = prompt("¿Calcular otro presupuesto? si / no");
//         continue;
//     }

//     let total = calcularPresupuesto(muebleSeleccionado, metros, cajones);

//     alert(
//         "Presupuesto final:\n" +
//         "Mueble: " + muebleSeleccionado.nombre + "\n" +
//         "Metros: " + metros + "\n" +
//         "Cajones: " + cajones + "\n" +
//         "Total: $" + total
//     );

//     continuar = prompt("¿Calcular otro presupuesto? si / no");
//     continuar = continuar.toLowerCase();
// }


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
