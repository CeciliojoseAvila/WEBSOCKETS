const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);


app.use(express.static("public"));

io.on("connection", function (socket) {
    console.log("Nuevo cliente conectado");    
  socket.emit("mensaje", "Bienvenido!");
 
});
/*    socket.on("my other event", (data) => {
     console.log("se recibio data del cliente");
     console.log(data);
   }); */
setInterval(function () { 
    io.emit('mensaje', 'Hola os escribo a todos');
} ,3000);

server.listen(8080, function () { 
    console.log('Servidor iniciado en http://localhost:8080');
})
