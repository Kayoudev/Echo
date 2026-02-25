const express = require("express");
const http = require("http");
const WebSocket = require("ws");   

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("public"));

wss.on("connection", (ws) => {
    console.log("Un utilisateur connecté");

    ws.on("message", (data) => {
        const parsedData = JSON.parse(data);
        console.log(`Message reçu de ${parsedData.username}: ${parsedData.message}`);

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(parsedData));
            }
        });
    });
});

wss.on("error", (error) => {
    console.error("Erreur WebSocket côté serveur :", error);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Serveur démarré sur http://localhost:3000");
})