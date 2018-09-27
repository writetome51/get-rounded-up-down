// Rounds num using the method taught in school.
export function getRounded(num) {
	return Math.round(num) + 0; // the plus-zero fixes strange -0 bug.
}


export function getRoundedDown(num) {
	return Math.floor(num) + 0; // the plus-zero fixes strange -0 bug.
}


export function getRoundedUp(num) {
	return Math.ceil(num) + 0; // the plus-zero fixes strange -0 bug.
}
