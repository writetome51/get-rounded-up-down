// Rounds num using the method taught in school.
export function getRounded(num) {
	return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}


export function getRoundedDown(num) {
	return num < 0 ? (num - 1) >> 0: num >> 0;
	// return num >> 0;
}


export function getRoundedUp(num) {
	return (getRoundedDown(num) + 1);
}
