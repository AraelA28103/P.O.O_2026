console.log("Conectado");

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
}

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
}

// 3. El Filtro de Duplicados
function filtroDuplicados() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = parseFloat(prompt("Ingresa un producto: "));
    if (productos.includes(nuevoProducto)) {
        productos.push(nuevoProducto);
        alert(`Inventario actualizado: \n${productos.join(", ")}`);
    } else {
        alert("El producto ya está en el inventario");
    }
}

// 4. Control de Stock Máximo