import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {isInteger} from '@writetome51/is-integer-is-float';
import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal';


export function validateNumber_andGetResult(num, uniqueCode) {
	errorIfNotFiniteNumber(num);
	if (isInteger(num)) return num;
	return uniqueCode(num);
}


export function __getRoundedDown(num) {
	return (num < 0 ? getLeftOfDecimal(num - 1) : getLeftOfDecimal(num));
}
