var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var i = 0;

io.on("connection", function(socket) {
  console.log("a user connected " + i);
  i++;
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("chat", function(msg) {
    console.log("message: " + msg);
  });
  socket.on("my", function(msg) {
    console.log("my: " + msg);
  });
});

app.get("/", function(req, res) {
  res.send("<h1>Hello world</h1>");
});

http.listen(3008, function() {
  console.log("listening on *:3008");
});
