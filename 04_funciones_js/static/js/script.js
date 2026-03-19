console.log("Conectado");

// Ejercicio 1: Lista de Asistencia (push)
let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");
};

function registrarAlumno() {
    const container = document.getElementById("resultadoContainer1");
    const result = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre); // --> Llamado a la función con envío de parámetros
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

// Ejercicio 2: Fila de Urgencias Médicas (unshift e if)
let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};

function ingresarUrgencia() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacío . . .");
    }
};

// Ejercicio 3: Sistema de Delivery (shift, pop e if)
let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function actualizarPedidos(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("Ingresa un valor válido");
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
};

function gestionarPedidos() {
    const container = document.getElementById("resultadoContainer3");
    const result = document.getElementById("resultado3");
    let input = document.getElementById("input3").value;
    let resultado = actualizarPedidos(input);
    result.textContent = resultado;
    input = "";
    container.classList.remove("d-none");
};

// Ejercicio 4: Validador de Códigos de Descuento (for e if)
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function validadorCodigo(codigoIngresado) {
    let msg = "Código inválido o expirado";
    for (let i = 0; i < codigosValidos.length; i++) {
        if (codigoIngresado == codigosValidos[i]) {
            msg = "¡Éxito! Código aceptado"
        } else {
            alert("Ingresa un código válido");
        }
    }
    return msg
}

function verificarCodigo() {
    const container = document.getElementById("resultadoContainer4");
    const result = document.getElementById("resultado4");
    let input = document.getElementById("input4").value;
    let resultado = validadorCodigo(input);
    result.textContent = resultado;
    input = "";
    container.classList.remove("d-none");
}

/* Ejercicio 5: Simulador de Cuotas (for)
Contexto: Un cliente compra un producto y el sistema le genera automáticamente las etiquetas para sus próximas 3 letras de pago.
Función Principal: Crea simularCuotas().
Captura el nombre del producto desde el input (ej: "Bicicleta").
Crea una variable vacía: registroPagos = "";
Crea un ciclo for que dé exactamente 3 vueltas (del 1 al 3).
En cada vuelta, súmale (+=) a registroPagos el producto y el número de la cuota (Ej: producto + " - Cuota " + i + " | ").
Fuera del ciclo, muestra la variable registroPagos en el textContent del párrafo.
Limpia el input.
 */

function simularCuotas() {
    const container = document.getElementById("resultadoContainer5");
    const result = document.getElementById("resultado5");
    let input = document.getElementById("input5").value;
    let resultado = validadorCodigo(input);
}