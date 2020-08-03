import { getRounded } from '../index';
// Test 1
let result = getRounded(0);
if (result === 0)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
result = getRounded(0.000001);
if (result === 0)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
result = getRounded(-0.000001);
if (result === 0)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
result = getRounded(-2);
if (result === -2)
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
result = getRounded(2);
if (result === 2)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6
result = getRounded(21.5);
if (result === 22)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7
result = getRounded(22.5);
if (result === 23)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8
result = getRounded(-21.5);
if (result === -21)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9
result = getRounded(-22.5);
if (result === -22)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10
result = getRounded(-22.499);
if (result === -22)
    console.log('test 10 passed');
else
    console.log('test 10 failed');
// Test 11
result = getRounded(22.499);
if (result === 22)
    console.log('test 11 passed');
else
    console.log('test 11 failed');
// Test 12
let errorTriggered = false;
try {
    result = getRounded('2');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 failed');
// Test 13
errorTriggered = false;
try {
    result = getRounded(false);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 failed');
