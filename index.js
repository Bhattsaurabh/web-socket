import * as http from 'http'
import express from 'express'
import {Server} from 'socket.io'
import { Socket } from 'dgram';
import {WebSocketServer} from "ws"

const app = express();
const port = 9000

const server = app.listen(port, () => console.log(`Server is listening at: 9000 `))
const wss = new WebSocketServer({server})

wss.on("connection", (wss)  =>{
        wss.on("message", (data) =>{
            console.log("Data from client: %s", data)
            wss.send("Thanks hero")
    }
    )
})