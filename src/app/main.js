"use strict";
exports.__esModule = true;
var Point_1 = require("./Point");
function print(mess) {
    console.log(mess);
}
var message = 'Zdravo Ivke !';
print(message);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var log = function (point) { return console.log(point.x * point.y); };
var point = new Point_1.Point();
point.draw();
