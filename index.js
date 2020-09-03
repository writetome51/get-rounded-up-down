import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal';
import {getRightOfDecimal} from '@writetome51/get-right-of-decimal';
import {isOdd, isEven} from '@writetome51/is-odd-is-even';
import {validateNumber_andGetResult, __getRoundedDown} from './__privy.js';


// This function avoids cumulative rounding errors only by changing rounding rules
// when the fraction part of `num` is .5:
//	   If `num`'s whole number is even, `num` is rounded toward zero.
// 	   If `num`'s whole number is odd, `num` is rounded away from zero.

export function getRounded(num) {
	return validateNumber_andGetResult(num, () => {

		// `decimalPart`: string
		let [integerPart, decimalPart] = [getLeftOfDecimal(num), getRightOfDecimal(num)];

		if (decimalPart === '5') {
			if (isOdd(integerPart) && integerPart < 0) return (integerPart - 1);
			else if (isEven(integerPart)) return integerPart;
		}
		return (Math.round(num) + 0); // the plus-zero fixes strange -0 bug.
	});
}


export function getRoundedDown(num) {
	return validateNumber_andGetResult(num, __getRoundedDown);
}


export function getRoundedUp(num) {
	return validateNumber_andGetResult(num, () => __getRoundedDown(num) + 1);
}
