var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var i = 0;

io.on("connect", function(socket) {
  // уведомить о подключении соккета меня имэйлем
  // зайти в чат и писать сообщения будет бродкастить для всех подключенных
  // уведомить об отключении клиента
  console.log("a user connected " + i);
  console.log(socket.id);
  socket.emit("connect", socket.id);
  socket.emit("id", socket.id);
  socket.on("chat", function(msg) {
    console.log("message: " + msg);
    socket.emit("message", msg);
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
