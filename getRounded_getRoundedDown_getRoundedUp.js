"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var get_left_of_decimal_1 = require("@writetome51/get-left-of-decimal");
// Rounds num using the method taught in school.
function getRounded(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRounded = getRounded;
function getRoundedDown(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    if (isInteger_isFloat_1.isFloat(num))
        return num < 0 ? get_left_of_decimal_1.getLeftOfDecimal(num - 1) : get_left_of_decimal_1.getLeftOfDecimal(num);
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
