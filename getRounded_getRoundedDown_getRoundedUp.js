"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Rounds num using the method taught in school.
function getRounded(num) {
    return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRounded = getRounded;
function getRoundedDown(num) {
    return Math.floor(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRoundedDown = getRoundedDown;
function getRoundedUp(num) {
    return Math.ceil(num) + 0; // the plus-zero fixes strange -0 bug.
}
exports.getRoundedUp = getRoundedUp;
