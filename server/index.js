const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.get('/',function(req,res){
  res.send("Server is up and running");
});
app.use(cors());

//create the server
const server = http.createServer(app);

//Giving permission (cors policy)
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5501",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on('message', (evt) => {
    console.log(evt)
    socket.broadcast.emit('message', evt)
})

  socket.on('disconnect',()=>{
      console.log("user disconnected");
  });

 
});

server.listen( 3001 || process.env.PORT, () => {
  console.log("Server is running on the port 3001");
});
