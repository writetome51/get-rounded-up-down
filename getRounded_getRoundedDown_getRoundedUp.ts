import {errorIfNotNumber} from 'basic-data-handling/errorIfNotNumber';
import {isFloat} from 'basic-data-handling/isInteger_isFloat';


// Rounds num using the method taught in school.
export function getRounded(num) {
	errorIfNotNumber(num);
	return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}


export function getRoundedDown(num) {
	errorIfNotNumber(num);
	if (isFloat(num)) return num < 0 ? (num - 1) >> 0: num >> 0;
	else return num;
}


export function getRoundedUp(num) {
	errorIfNotNumber(num);
	if (isFloat(num)) return (getRoundedDown(num) + 1);
	else return num;
}
