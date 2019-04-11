"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
var is_integer_is_float_1 = require("@writetome51/is-integer-is-float");
var get_left_of_decimal_1 = require("@writetome51/get-left-of-decimal");
// Rounds num using the method taught in school.
function getRounded(num) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRounded = getRounded;
function getRoundedDown(num) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    if (is_integer_is_float_1.isFloat(num))
        return num < 0 ? get_left_of_decimal_1.getLeftOfDecimal(num - 1) : get_left_of_decimal_1.getLeftOfDecimal(num);
    else
        return num;
}
exports.getRoundedDown = getRoundedDown;
function getRoundedUp(num) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    if (is_integer_is_float_1.isFloat(num))
        return (getRoundedDown(num) + 1);
    else
        return num;
}
exports.getRoundedUp = getRoundedUp;
