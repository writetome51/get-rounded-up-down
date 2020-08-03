import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';
import { isFloat } from '@writetome51/is-integer-is-float';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';


// Rounds num using the method taught in school.

export function getRounded(num) {
	errorIfNotFiniteNumber(num);
	return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}


// Faster version of Math.floor()

export function getRoundedDown(num) {
	errorIfNotFiniteNumber(num);
	if (isFloat(num)) return num < 0 ? getLeftOfDecimal(num - 1) : getLeftOfDecimal(num);
	else return num;
}


// Faster version of Math.ceil()

export function getRoundedUp(num) {
	errorIfNotFiniteNumber(num);
	if (isFloat(num)) return (getRoundedDown(num) + 1);
	else return num;
}
