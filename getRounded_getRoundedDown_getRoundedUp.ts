import {errorIfNotFloat} from 'basic-data-handling/errorIfNotFloat';


// Rounds num using the method taught in school.
export function getRounded(num) {
	errorIfNotFloat(num);
	return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}


export function getRoundedDown(num) {
	errorIfNotFloat(num);
	return num < 0 ? (num - 1) >> 0: num >> 0;
}


export function getRoundedUp(num) {
	errorIfNotFloat(num);
	return (getRoundedDown(num) + 1);
}
