import * as models from "../models/chat_api";

var users = {};

export var connect = (socket, data) => {
    users[socket.id] = data.name;
    var m = models.enterMsg(data.name);
    return socket.broadcast.emit('entered', m);
}

export var sendMsg = (socket, data) => {
    var m = models.normalMsg(data);
    return socket.broadcast.emit('received', m);
}

export var disconnect = (socket, data) => {
    var m = models.leaveMsg(users[socket.id]);
    console.log(data);
    delete users[socket.id];
    return socket.broadcast.emit('leaved', m);
}