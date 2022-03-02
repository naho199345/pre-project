const app = require("./app");
const server = require("http").createServer(app);
const { Timer } = require("./models");

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });
