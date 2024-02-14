// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Replace this with your React client's origin
    methods: ["GET", "POST"],
  },
});

const cors = require("cors");
app.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("one", (abc) => {
    console.log("Hi there one", abc);
  });

  io.emit("killed", "hiiiiiiiiiiiiiiiiiiii");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
