console.log("Conectado");

// Bloque 1: Calentamiento (Ciclos Básicos y el DOM)

// 1. El Contador en Pantalla
function contadorPantalla() {
    let numeros = [];
    const container = document.getElementById('resultadoContainer1');
    const resultado = document.getElementById('resultado1');
    for (let i = 0; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`;
    container.classList.remove('d-none');
};

// 2. Lista de Asistencia Automática
function listaAsistencia() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    let parrafo = "";
    const container = document.getElementById('resultadoContainer2');
    const resultado = document.getElementById('resultado2');
    for (let i = 0; i < curso.length; i++) {
        parrafo += curso[i] + ", ";
    }
    resultado.textContent = `Párrafo: ${parrafo}`;
    container.classList.remove('d-none');
};

// Bloque 2: Recorriendo y Filtrando (Ciclos + If)

// 3. Buscador de Aprobados (Escala 1 a 7)
function buscadorAprobados() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    console.log(notas[0]);
    let contadorAprobados = 0;
    let contadorReprobados = 0;
    const container = document.getElementById('resultadoContainer3');
    const resultado = document.getElementById('resultado3');
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4) {
            contadorAprobados++
        } else {
            contadorReprobados++
        }
    }
    resultado.textContent = `Total de aprobados: ${contadorAprobados} \nContador reprobados: ${contadorReprobados}`;
    container.classList.remove('d-none');
};

// 4. El Filtro de Inventario
function filtroInventario() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    let parrafo = "";
    let productosAgotados = 0;
    const container = document.getElementById('resultadoContainer4');
    const resultado = document.getElementById('resultado4');
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            parrafo += productos[i] + ", ";
        } else {
            productosAgotados++
        }
    }
    resultado.textContent = `Productos: ${parrafo} \nProductos agotados: ${productosAgotados}`;
    container.classList.remove('d-none');
};

// Bloque 3: Acumuladores y Transformaciones

// 5. Sumando la Colecta
function sumandoColecta() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const container = document.getElementById('resultadoContainer5');
    const resultado = document.getElementById('resultado5');
    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i];
    }
    resultado.textContent = `Total recaudado: $${totalRecaudado}`;
    container.classList.remove('d-none');
};

// 6. Formateador de Nombres VIP
function formateadorVip() {
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    const container = document.getElementById('resultadoContainer6');
    const resultado = document.getElementById('resultado6');
    for (let i = 0; i < asistentes.length; i++) {
        if (i % 2 === 0) {
            asistentes += "[VIP]"
        } else {
            
        }
    }
    resultado.textContent = `Asistentes: ${asistentes}`;
    container.classList.remove('d-none');
};

// Bloque 4: Lógica Avanzada (Dificultad Alta)

// 7. El Buscador de Stock Específico
function buscadorStock() {
    let bodega = ["lápiz", "cuaderno", "goma", "cuaderno", "regla", "cuaderno"];
    let articuloBuscado = prompt("Articulo solicitado: ");
    let vecesEncontrado = 0;
    const container = document.getElementById('resultadoContainer7');
    const resultado = document.getElementById('resultado7');
    for (let i = 0; i < bodega.length; i++) {
        if (articuloBuscado.toLowerCase() == bodega[i]) {
            vecesEncontrado++
        } else {
            console.log("No encontrado");
        }
    }
    resultado.textContent = `El artículo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en la bodega`;
    container.classList.remove('d-none');
};

// 8. Generador de Párrafos de Advertencia
function generadorAdvertencia() {
    let temperaturas = [22, 24, 28, 35, 21, 38];
    let temperaturaCritica = "";
    let parrafo = "";
    const container = document.getElementById('resultadoContainer8');
    const resultado = document.getElementById('resultado8');
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 30) {
            temperaturaCritica = temperaturas[i];
            parrafo += `¡ALERTA! Temperatura crítica de ${temperaturaCritica}`;
        } else {
            
        }
    }
}