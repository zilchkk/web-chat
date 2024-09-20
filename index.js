import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server);

// serve static Files

app.use(express.static("public"));

// create connection
io.on("connection", (socket) => {
  console.log("user connected successfully");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// run the server

server.listen(3000, () => console.log("listening on :3000"));
