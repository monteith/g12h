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

export {random, randomInt};