import * as http from 'http'
import express from 'express'

const app = express();
const server = http.createServer(app)


server.listen(9000, () => console.log(`Server started at POST: 9000 `))
