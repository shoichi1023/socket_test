import io from "socket.io-client";

let socket = io.connect(process.env.SERVER_IP);

export default socket;