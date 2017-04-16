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
const isEven = (n) => n === parseFloat(n) ? !(n%2) : void 0;


/**
 * Is an even number, using strict equality to prevent coercion
 * @param n
 */
const isEvenStrict = (n) => n === parseFloat(n) ? !(n%2): void 0;


/**
 * Returns true if number is prime
 * @param n
 * @returns {boolean}
 */
const isPrime = (n) => {
  let re = /^.+?|^(..+?)\1+$/
  return !re.test(Array(n+1).join('1'));
};


/**
 * Returns array of prime factors of n
 * @param n
 * @returns {Array}
 */
const primeFactorial = (n) => {
  let i, factors = [];

  for (i = 2; i < n; i++) {
    while ((n % i) === 0) {
      factors.push(i);
      n /= i;
    }
  }

  return factors;
};

export {random, randomInt, isEven, isEvenStrict};