import {getRoundedDown} from '../index.js';
let result;

// Test 1
result = getRoundedDown(0);
if (result === 0)
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');


// Test 2
result = getRoundedDown(0.000001);
if (result === 0)
	console.log('test 2 passed');
else
	console.log('test 2 FAILED');


// Test 3
result = getRoundedDown(-0.000001);
if (result === -1)
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');


// Test 4
result = getRoundedDown(-2);
if (result === -2)
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');


// Test 5
result = getRoundedDown(2);
if (result === 2)
	console.log('test 5 passed');
else
	console.log('test 5 FAILED');


// Test 6
result = getRoundedDown(-2.000001);
if (result === -3) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
result = getRoundedDown(2.9999);
if (result === 2) console.log('test 7 passed');
else console.log('test 7 FAILED');

// Test 7A
result = getRoundedDown(2.001);
if (result === 2) console.log('test 7A passed');
else console.log('test 7A FAILED');


// Test 8
let errorTriggered = false;
try {
	result = getRoundedDown('2');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
errorTriggered = false;
try {
	result = getRoundedDown(false);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');
