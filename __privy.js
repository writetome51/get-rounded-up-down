import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';


export function validateNumber_andGetResult(num, uniqueCode) {
	errorIfNotFiniteNumber(num);
	return uniqueCode();
}
