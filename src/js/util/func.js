/**
 * Functions!
 * @module func
 * @requires obj.prop
 */

import {prop} from 'obj';


/**
 * Checks whether or not obj is a function
 * @param obj
 * @param path
 */
const isFunc = (obj, path) => typeof prop(obj, path) === 'function';


const required = (name) => { throw new Error(`${name} is a required parameter.`); };


/**
 * Pipe data through a series of functions.
 * @param {[Function]} fns - Array of functions to pipe data through.
 *
 * USAGE:
 * let fn1 = s => s.toLowerCase();
 * let fn2 = s => s.split('').reverse().join('');
 * let fn3 = s => s + '!'
 *
 * let emitter = pipe(fn1, fn2, fn3);
 * console.log(emitter('Time')); // emit!
 */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);


/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to wait between triggering.
 * @param {boolean} [immediate] - Trigger the function on the leading edge, instead of the trailing.
 *
 * USAGE:
 * let myEfficientFn = debounce(() => {
   *   // All the taxing stuff you do
   * }, 250);
 *
 * window.addEventListener('resize', myEfficientFn);
 */
const debounce = function (func, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export {isFunc, required, pipe, debounce}