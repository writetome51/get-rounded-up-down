"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
// Rounds num using the method taught in school.
function getRounded(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRounded = getRounded;
function getRoundedDown(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    if (isInteger_isFloat_1.isFloat(num))
        return num < 0 ? (num - 1) >> 0 : num >> 0;
    else
        return num;
}
exports.getRoundedDown = getRoundedDown;
function getRoundedUp(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    if (isInteger_isFloat_1.isFloat(num))
        return (getRoundedDown(num) + 1);
    else
        return num;
}
exports.getRoundedUp = getRoundedUp;
