import express from 'express';
import socketio from 'socket.io';
import * as controllers from "./controllers/chat_api";

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

//socket routing
export function listen(server) {
  const io = socketio.listen(server);
  io.on('connect', (socket) => {
    console.log("connect");
    socket.on('connected', (data) => {
      console.log("connected");
      controllers.connect(socket, data);
    });
    socket.on('sendMsg', (data) => {
      console.log("sendMsg");
      controllers.sendMsg(socket, data);
    });
    socket.on('disconnect', (data) => {
      console.log("disconnect");
      controllers.disconnect(socket, data);
    });
    return io;
  });
}

export default router;