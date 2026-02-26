const socket = new WebSocket(`ws://${window.location.hostname}:3000`);
const messageDiv = document.getElementById('messages');
const input = document.getElementById('input');

let username = prompt("Entrez votre nom d'utilisateur :") || "Anonyme";

socket.onopen = () => {
    console.log('Connexion au serveur WebSocket établie');
}

socket.onerror = (error) => {
    console.error("Erreur WebSocket :", error);
};

socket.onmessage = (event) => {
    console.log(`Message reçu du serveur: ${event.data}`);
    const data = JSON.parse(event.data);
    const message = document.createElement("p");
    message.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
    messageDiv.appendChild(message);
};

function sendMessage() {
    const message = input.value;
    if (message.trim() !== '') {
        const data = {
            username: username,
            message: message
        };
        socket.send(JSON.stringify(data));
        input.value = '';
    } 
}