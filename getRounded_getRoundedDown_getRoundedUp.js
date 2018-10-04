"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotFloat_1 = require("basic-data-handling/errorIfNotFloat");
// Rounds num using the method taught in school.
function getRounded(num) {
    errorIfNotFloat_1.errorIfNotFloat(num);
    return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRounded = getRounded;
function getRoundedDown(num) {
    errorIfNotFloat_1.errorIfNotFloat(num);
    return num < 0 ? (num - 1) >> 0 : num >> 0;
}
exports.getRoundedDown = getRoundedDown;
function getRoundedUp(num) {
    errorIfNotFloat_1.errorIfNotFloat(num);
    return (getRoundedDown(num) + 1);
}
exports.getRoundedUp = getRoundedUp;
return num;
