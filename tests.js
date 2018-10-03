"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRounded_getRoundedDown_getRoundedUp_1 = require("./getRounded_getRoundedDown_getRoundedUp");
var arr = [];
var i = -1;
while (++i < 5000000) {
    arr.push(i + 0.5678);
}
i = -1;
while (++i < 5000000) {
    arr[i] = getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(arr[i]);
}
console.log(arr.length);
