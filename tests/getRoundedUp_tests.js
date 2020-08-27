import { getRoundedUp } from '../index.js';
// Test 1
let result = getRoundedUp(0);
if (result === 0) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
result = getRoundedUp(0.000001);
if (result === 1) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
result = getRoundedUp(-0.000001);
if (result === 0) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
result = getRoundedUp(-2);
if (result === -2) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
result = getRoundedUp(2);
if (result === 2) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6
result = getRoundedUp(2.1);
if (result === 3) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
result = getRoundedUp(-2.1);
if (result === -2) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 7
result = getRoundedUp(-2.99999);
if (result === -2) console.log('test 7A passed');
else console.log('test 7A FAILED');

result = getRoundedUp(2.99999);
if (result === 3) console.log('test 7B passed');
else console.log('test 7B FAILED');


// Test 8
let errorTriggered = false;
try {
    result = getRoundedUp('2.2');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
errorTriggered = false;
try {
    result = getRoundedUp(false);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');
