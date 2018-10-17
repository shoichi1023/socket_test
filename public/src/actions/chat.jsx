import socket from "../socket";

export const entry = (store, name) => {
    var user = store.get("user");
    user.name = name;
    store.set("user")(user);
    const data = { name: name };
    socket.emit('connected', data);
}

export const sendMsg = (store, msg) => {
    const name = store.get("user").name;
    const data = {
        name: name,
        msg: msg
    };
    var comments = store.get("comments");
    comments.push({ msg: name + " : " + msg });
    store.set("comments")(comments);
    socket.emit('sendMsg', data);
}