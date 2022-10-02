const userInfo = require('./information');


const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello ${userInfo.userName}, from ${userInfo.location}, ",
    e : "^^",
    T : "U",
}));