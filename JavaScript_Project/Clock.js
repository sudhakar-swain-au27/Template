const { get } = require("express/lib/response");

var date =new Date();
var hour =date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();


document.getElementById("DigitalClock").innerHTML= hour+ ":" +minute+":"+ second;

