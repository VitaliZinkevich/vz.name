var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var i = 0;

io.on("connect", function(socket) {
  console.log("a user connected " + i);
  console.log(socket.id);
  socket.emit("connect", socket.id);
  socket.emit("id", socket.id);
  io.on("chat", function(msg) {
    console.log("message: " + msg);
  });
  i++;
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

app.get("/", function(req, res) {
  res.send("<h1>Hello world</h1>");
});

http.listen(3008, function() {
  console.log("listening on *:3008");
});
