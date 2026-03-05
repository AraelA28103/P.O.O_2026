console.log("Conectado");

// Ejercicio 1: El Mensaje Desordenado (Push y Pop)
function construirFrase() {
    let palabras = ["programar", "es"];
    palabras.push("increíble");
    palabras.push("borrar");
    palabras.pop("borrar");
    alert(palabras.join(" "));
}

// Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
function filaEspera() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("Luis");
    let salon = [alumnos.shift()];
    alert(`Entró ${salon[0]} y la fila ahora es: ${alumnos.join(", ")}`);
}

// Ejercicio 3: Reordenando Números (Lógica de Índices)
function oredenNum() {
    let datos = [3, "gatos", "negros", "duermen"];
    datos[0] += 2;
    alert(datos.join(" "));
}

// Ejercicio 4: Coordenadas en la Matriz (Suma Simple)
function coordMatriz() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];
    let suma = matriz[0][0] + matriz[1][1];
    alert(`Suma de [0][0] y [1][1]: ${suma}`);
}

// Ejercicio 5: El Intruso en la Tercera Dimensión
function intruso3eraD() {
    let datos = [1, [2, [3, 4]]];
    let suma = datos[1][1];
    suma.push(5);
    alert(`Matriz completa: ${JSON.stringify(datos)}`);
}

// Ejercicio 6: Traductor de Acciones (Matriz + Arreglo
function traductorAcciones() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    let frase = `${sujetos[0]} ${verbos[0][1]}`;
    alert(frase);
}

// Ejercicio 7: Limpieza de Datos (Pop y Unshift)
function limpiezaDatos() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("Monitor");
    alert(`Inventario final: ${inventario.join(", ")}`);
}

// Ejercicio 8: La Matriz de Identidad Modificada
function matrizIdModificada() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1;
    alert(tablero);
}

// Ejercicio 9: El Consultorio Médico (Complejo)
function consultorioMedico() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos", "Diana");
    pacientes.shift();
    pacientes.unshift("Sonia");
    alert(`Pacientes restantes: ${pacientes.length} \nSiguiente en la lista: ${pacientes[0]}`);
}

// Ejercicio 10: Extracción de Profundidad (Matriz 3x3x3)
function extraccionProfundidad() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    let canasta = [caja[1][0][1], caja[1][1][1]];
    alert(`En la canasta hay ${canasta[0]} y ${canasta[1]}`);
}


