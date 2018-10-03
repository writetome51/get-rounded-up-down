import {
	getRounded, getRoundedDown, getRoundedUp
} from './getRounded_getRoundedDown_getRoundedUp';


let arr = [];
let i = -1;
while (++i < 5000000) {
	arr.push(i + 0.5678);
}

i=-1;
while (++i < 5000000){
	arr[i] = getRoundedDown(arr[i]);
}

console.log(arr.length);