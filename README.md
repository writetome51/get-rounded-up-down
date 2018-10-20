This package has 3 functions:

getRounded(number),  getRoundedDown(number),  getRoundedUp(number)

If you pass anything but a finite number to any of them, you'll get an error.


getRounded() behaves exactly the same as Math.round()

getRoundedDown() is a faster version of Math.floor()

getRoundedUp() is a faster version of Math.ceil()