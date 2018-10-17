
export var enterMsg = (name) => {
    var m = name + "さんが入室しました。";
    return { msg: m };
}

export var normalMsg = (data) => {
    var m = data.name + " : " + data.msg;
    return { msg: m };
}

export var leaveMsg = (name) => {
    var m = name + "さんが退室しました。";
    return { msg: m };
}