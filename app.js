let amigos = [];
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let li = document.createElement("li");
    li.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong> `;
    resultadoLista.appendChild(li);
}
