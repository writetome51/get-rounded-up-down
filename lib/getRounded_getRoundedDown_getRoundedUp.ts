import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { isFloat } from 'basic-data-handling/isInteger_isFloat';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';


// Rounds num using the method taught in school.
export function getRounded(num) {
	errorIfNotNumber(num);
	return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}


export function getRoundedDown(num) {
	errorIfNotNumber(num);
	if (isFloat(num)) return num < 0 ? getLeftOfDecimal(num - 1) : getLeftOfDecimal(num);
	else return num;
}


export function getRoundedUp(num) {
	errorIfNotNumber(num);
	if (isFloat(num)) return (getRoundedDown(num) + 1);
	else return num;
}
