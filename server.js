require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-Parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const router = require("./app/routes");

const server = http.createServer(app);
// app.use("/", router);
app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  router,
]);

const io = (module.exports.io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
}));
const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
