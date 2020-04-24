import express from "express";
import http from "http";
import path from "path";
import socket from "socket.io";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("public"));

const httpServer = http.createServer(app);
const io = socket(httpServer);

let viewers = 0;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

io.on("connection", socket => {
  viewers += 1;
  io.emit("viewers_count", viewers);
  socket.on("disconnect", () => {
    viewers -= 1;
    io.emit("viewers_count", viewers);
  });
});

httpServer.listen(PORT, () => console.log(`Port is listening @${PORT}`));
