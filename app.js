// Lista de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada y eliminar espacios innecesarios con .trim()
    var nombreAmigo = document.getElementById("amigo").value.trim();
    
    // Agregar un console.log para verificar que estamos capturando correctamente el valor del input
    console.log("Valor capturado:", nombreAmigo);

    // Verificar si el nombre es vacío después de quitar espacios
    if (nombreAmigo === "") {
        // Si está vacío, mostrar un mensaje de alerta
        alert("Por favor, inserte un nombre.");
    } else {
        // Si el valor no está vacío, agregarlo al arreglo de amigos
        amigos.push(nombreAmigo);

        // Mostrar el arreglo actualizado en la consola
        console.log("Lista de amigos:", amigos);

        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";

        // Mostrar la lista de amigos en el HTML
        mostrarAmigos();
    }
}

// Función para mostrar la lista de amigos en HTML
function mostrarAmigos() {
    // Obtener el elemento <ul> o <ol> donde se mostrará la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");

        // Asignar el texto del <li> al nombre del amigo
        li.textContent = amigos[i];

        // Agregar el <li> al <ul> o <ol> de la lista de amigos
        listaAmigos.appendChild(li);
    }
}


// Vincular la función agregarAmigo al botón
document.querySelector(".button-add").addEventListener("click", agregarAmigo);

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles en el array
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;  // Salir de la función si no hay amigos en el array
    }

    // Generar un índice aleatorio entre 0 y la longitud del array menos 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
