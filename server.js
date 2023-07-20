const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
require('./connection');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
	cors: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PATCH', 'DELETE'],
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(1035, () => {
	console.log('server running at port', 1060);
});

app.set('socketio', io);
