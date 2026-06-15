import { WebSocketServer } from "ws";
import { client } from '@repo/db/client';

const server = new WebSocketServer({
    port: 8080
});

server.on("connection", async (socket) => {
    const user = await client.user.create({
        data:{
            username: Math.random().toString(36),
            password: Math.random().toString(36)
        }
    })
    console.log(user.username);
    socket.send("Welcome to the WebSocket sasdsdvzsvsdzfv");
});

