import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {isInteger} from '@writetome51/is-integer-is-float';


export function validateNumber_andGetResult(num, uniqueCode) {
	errorIfNotFiniteNumber(num);
	if (isInteger(num)) return num;
	return uniqueCode(num);
}
