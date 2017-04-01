/**
 * Numbers!
 * @module num
 */


/**
 * Return random float
 * @param min
 * @param max
 */
const random = (min, max) => Math.random() * (max - min) + min;


/**
 * Return random integer
 * @param min
 * @param max
 */
const randomInt = (min, max) => Math.floor(random(min, max));


/**
 * Is an even number?
 * @param n
 */
const isEven = (n) => n == parseFloat(n) ? !(n%2) : void 0;


/**
 * Is an even number, using strict equality to prevent coercion
 * @param n
 */
const isEvenStrict = (n) => n === parseFloat(n) ? !(n%2): void 0;

export {random, randomInt, isEven, isEvenStrict};