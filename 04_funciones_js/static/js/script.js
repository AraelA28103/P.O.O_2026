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
        entregas.shift();
    } else if (pedido == "cancelar") {
        entregas.pop();
    } else {
        alert("Ingresa un valor válido");
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`;
};

function gestionarPedidos() {
    const container = document.getElementById("resultadoContainer3");
    const result = document.getElementById("resultado3");
    const input = document.getElementById("input3");
    let pedido = input.value;
    let resultado = actualizarPedidos(pedido);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

// Ejercicio 4: Validador de Códigos de Descuento (for e if)
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
function validadorCodigo(codigoIngresado) {
    let msg = "Código inválido o expirado";
    for (let i = 0; i < codigosValidos.length; i++) {
        if (codigoIngresado == codigosValidos[i]) {
            return "¡Éxito! Código aceptado";
        } else {
            msg;
        }
    }
    return msg;
};

function verificarCodigo() {
    const container = document.getElementById("resultadoContainer4");
    const result = document.getElementById("resultado4");
    const input = document.getElementById("input4");
    let codigoIngresado = input.value.toUpperCase();
    let resultado = validadorCodigo(codigoIngresado);
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

// Ejercicio 5: Simulador de Cuotas (for)
function calcularCuotas(valor, cuota) {
    let registroPagos = "";
    for (let i = 0; i <= 3; i++) {
        registroPagos += ` | Cuota ${i} de ${cuota}; ${parseInt(valor / 3)} |`;
    }
    return registroPagos;
};

function simularCuotas() {
    const producto = document.getElementById("input5-1");
    let valorProducto = parseInt(producto.value);
    const cuota = document.getElementById("input5-2");
    let valorCuota = parseInt(cuota.value);
    const result = document.getElementById("resultado5");
    const container = document.getElementById("resultadoContainer5");
    let resultado = calcularCuotas(valorProducto, valorCuota);
    result.textContent = resultado;
    producto.value = "";
    cuota.value = "";
    container.classList.remove("d-none");
};

// Ejercicio 6: Filtro de Presupuesto (for e if)
let vitrina = [2500, 15000, 8000, 30000, 5000];
let opciones = [];
function comprobarPresupuesto(presupuesto) {
    for (let i = 0; i <= vitrina.length; i++) {
        if (presupuesto >= vitrina[i]) {
            opciones.push(vitrina[i]);
        }
    }
    if (opciones == "") {
        return `No te alcanza para nada`;
    } else {
        return `Te alcanza para los precios ${opciones.join(", ")}`;
    }
};

function filtrarPrecios() {
    const container = document.getElementById("resultadoContainer6");
    const result = document.getElementById("resultado6");
    const input = document.getElementById("input6");
    let dinero = parseInt(input.value);
    if (isNaN(dinero)) {
        alert("Ingresa valores válidos");
    } else {
        let resultado = comprobarPresupuesto(dinero);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
        opciones = [];
    }
};
