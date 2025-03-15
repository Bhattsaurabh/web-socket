import * as http from 'http'
import express from 'express'
import {Server} from 'socket.io'
import {WebSocketServer} from "ws"
import path from 'path';

const app = express();
const port = 9000

const server = app.listen(port, () => console.log(`Server is listening at: 9000 `))
const wss = new WebSocketServer({server})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve('./public/index.html'))
})

wss.on("connection", (wss)  =>{
        wss.on("message", (data) =>{
            console.log("Data from client: %s", data)
            wss.send("Thanks hero")
    }
    )
})