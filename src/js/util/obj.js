/**
 * Objects!
 * @module obj
 */

/**
 * Converts a string object notation to actual objects
 *  eg. namespace('object0.object1.object2')
 *        returns object0.object1 = object2
 *
 * See Zakas, Maintainable JavaScript, pp. 72-73, and
 * Stefanov, Javascript Patterns, pp. 89-90
 *
 * @param {string} ns - dot-notation object
 */
const namespace = (ns) => {
  let parts = ns.split('.'),
    object, i, n;

  if (!window[parts[0]])
    window[parts[0]] = {};

  object = window[parts[0]];

  for (i = 1, n = parts.length; i < n; i++) {
    if (!object[parts[i]]) {
      object[parts[i]] = {}
    }
    object = object[parts[i]];
  }

  return object;
};

/**
 * Return the value of a property at the given string path
 * If the path does not exist, {undefined} is returned or
 * an error is thrown if [enforce] is {true}.
 *
 * @param {object} obj - the object in which to look up the property
 * @param {string} path - the dot-notation string
 * @param {boolean} enforce - if `true`, throws an error if path invalid
 * @returns the value at the dot-notation path if not {undefined} or {null}, otherwise {undefined}
 * */
const prop = (obj, path, enforce = false) => {
  let item = obj;

  function handleEnforce() {
    if (enforce)
      throw Error(`Path: "${path} not in object: ${obj}.`);
    else
      return undefined;
  }

  if (!obj)
    handleEnforce();

  let parts = path.split('.');
  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    let value = item[part];

    if (value == null || typeof value === 'undefined')
      handleEnforce();

    if (i === parts.length - 1)
      return value;
    else
      item = value;
  }
};


/**
 * Returns an array of the values of an object.
 * @param {object} obj - object to parse*/
const values = (obj) => Object.keys(obj || {}).map(key => obj[key]);

/**
 * Swaps key/value pairs of a simple object
 * */
const reverse = (obj, callback = identity) => {
  return Object.keys(obj).reduce((prev, curr) => {
    prev[obj[curr]] = callback(curr);
    return prev;
  }, {});
};

export {namespace, prop, values, reverse};