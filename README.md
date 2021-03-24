# getRounded(num): number

Avoids cumulative rounding errors only by changing rounding rules when  
the fraction part of `num` is `.5` :  
<ul>  
    <li>If <code>num</code>'s whole number is even, <code>num</code> is rounded toward zero.</li>
    <li>If <code>num</code>'s whole number is odd, <code>num</code> is rounded away from zero.</li>
 </ul>

# getRoundedDown(num): number

Behaves same as `Math.floor()` .
 
# getRoundedUp(num): number

Behaves same as `Math.ceil()` .

For all 3 functions, `num` must be a finite number of type 'number'.


## Installation

`npm i  @writetome51/get-rounded-up-down`

## Loading
```js
import { getRounded, getRoundedDown, getRoundedUp } 
    from '@writetome51/get-rounded-up-down';
```
