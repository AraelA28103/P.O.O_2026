console.log("Conectado");

// Bloque 1: Calentamiento (Lógica Básica)

// 1. El Portero Digital
function porteroDiital() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad >= 18) {
        alert("Acceso permitido a la App");
    } else if (edad < 18) {
        alert("Acceso denegado: necesitas ser mayor de edad");
    } else {
        alert("No puede estar en blanco");
    }
};

// 2. Validador de Nombres
function validarNombre() {
    let nombre = prompt("Ingresa tu nombre: ");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }
};

// Bloque 2: Gestión de Inventarios y Listas

// 3. El Filtro de Duplicados
function filtroDuplicados() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = prompt("Ingrese un nuevo producto: ");
    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario");
    }
};

// 4. Control de Stock Máximo
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
function controlSmaximo() {
    if (bodega.length <= 5) {
        alert("Espacio disponible");
    } else {
        alert(`Bodega llena, eliminando último ingreso`);
        bodega.pop()
    }
};

// Bloque 3: Prioridades y Turnos (Inicio de la Lista)

// 5. Limpieza de Datos
function limpiezaDatos() {
    let colaEspera = ["error_404", "Juan", "Sofía"];
    if (colaEspera[0] == "error_404") {
        colaEspera.shift();
        alert(`Cola de espera limpia: \n${colaEspera.join(", ")}`);
    } else {
        alert("La lista de espera está correcta");
    }
};

// 6. Acceso VIP
function accesoVip() {
    let foro = ["User1", "User2"];
    let rol = prompt("Ingrese su rol:");
    let nombre = "";
    if (rol.toLowerCase() == "admin") {
        nombre = prompt("Ingrese su nombre de usuario");
        foro.unshift(nombre);
        alert(`Bienvenido admin ${nombre} \nLista actualizada: \n${foro.join(", ")}`);
    } else {
        nombre = prompt("Ingrese su nombre de usuario");
        foro.push(nombre);
        alert(`Bienvenido usuario ${nombre} \nLista actualizada: \n${foro.join(", ")}`);
    }
};

// Bloque 4: Lógica Avanzada y Matrices (Dificultad Alta)

// 7. Sistema de Calificaciones Chile (Escala 1 a 7)
function sistemaCalificaciones() {
    let nota = parseInt(prompt("Ingrese su nota del 1.0 al 7.0: "));
    if (nota >= 5 && nota <= 7) {
        alert("Excelente, eximido");
    } else if (nota >= 4 && nota <= 5.9) {
        alert("Aprobado, vas a examen");
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado");
    } else {
        alert("Ingrese un valor valido");
    }
};

// 8. Buscador de Invitados
function buscadorInvitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let nombre = prompt("Ingresa tu nombre: ")
    if (invitados.includes(nombre)) {
        alert(`¡Bienvenido/a ${nombre}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, no estás en la lista de invitados");
    }
};

// 9. El Almacén de Matrices (2D Arrays)
function almacenMatrices() {
    let estanteria = [["manzanas", "peras"], ["leche", "yogur"]];
    let seccion = prompt("Ingrese una sección (0 - 1): ");
    productos = prompt("Producto solicitado: ")
    if (seccion !== 0 || seccion !== 1) {
        alert("No tenemos esa sección");
    } else if (estanteria[seccion].includes(productos.toLowerCase())) {
        alert("Producto encontrado en el estante");
    } else {
        alert("No tenemos ese producto en esa sección");
    }
};

// 10. Registro Maestro de Visitas
let bitacora = [];
function registroVisitas() {
    let nombreVisita = prompt("Ingrese su nombre: ").trim();
    let esVip = prompt("Eres usuario VIP? (0 = No / 1 = Si): ");
    if (nombreVisita == "") {
        alert("El nombre n puede estar vacío");
    } else if (bitacora.includes(nombreVisita)) {
        alert("Esta persona ya está en la lista");
    } else if (esVip == 1) {
        bitacora.unshift(nombreVisita)
        alert(`Agregado correctamente a la lista \n${bitacora.join(", ")} \nPersonas en total: ${bitacora.length}`);
    } else if (esVip == 0) {
        bitacora.push(nombreVisita)
        alert(`Agregado correctamente a la lista \n${bitacora.join(", ")} \nPersonas en total: ${bitacora.length}`);
    } else {
        alert("Ingrese valores válidos");
    }
};
