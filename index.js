import {isFloat} from '@writetome51/is-integer-is-float';
import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal';
import {validateNumber_andGetResult} from './__privy.js';


// Rounds num using the method taught in school.

export function getRounded(num) { // the plus-zero fixes strange -0 bug.
	return validateNumber_andGetResult(num, () => Math.round(num) + 0);
}


// Faster version of Math.floor()

export function getRoundedDown(num) {
	return validateNumber_andGetResult(num, () => {
		if (isFloat(num)) return (num < 0 ? getLeftOfDecimal(num - 1) : getLeftOfDecimal(num));
		else return num;
	});
}


// Faster version of Math.ceil()

export function getRoundedUp(num) {
	return validateNumber_andGetResult(
		num,
		() => isFloat(num) ? (getRoundedDown(num) + 1) : num
	);
}
