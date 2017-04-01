/**
 * Arrays!
 * @module array
 */


/**
 * Break an array into smaller arrays
 * */
const chunk = (arr, chunkSize) => {
  let groups = [],
    i = 0;

  for (i; i < arr.length; i += chunkSize)
    groups.push(arr.slice(i, i + chunkSize));

  return groups;
};


/**
 * Add an item or array of items in between every item in the array.
 * @param {Array} arr - The array to weave things into.
 * @param {*} o - The item to weave into the array.
 *        If `o` is an Array then the items of `o` are woven into `arr` sequentially.
 *        If `o` is a function, then the result of o(i) is woven into `arr` sequentially.
 * @param {boolean} before -
 */
const weave = (arr, o, before = false) => {
  let next = (i) => {
    if (Array.isArray(o)) return o[i];
    if (typeof o === 'function') return o(i);
    return o;
  };

  return arr.reduce((prev, curr, i) => {
    if (before) prev.push(next(i));
    prev.push(curr);
    if (!before && i !== arr.length - 1) prev.push(next(i));
    return prev;
  }, []);
};


/**
 * Returns true if two arrays have strictly equal (not equivalent) items.
 * Does NOT account for objects or nested arrays.
 * Order does not matter.
 * @see http://stackoverflow.com/a/16436975
 *
 * USAGE:
 * sn.arrays.equalish([1, 2], [1, 2])           // true
 * sn.arrays.equalish([1, "2"], [1, 2])         // false
 * sn.arrays.equalish(["2", 1], [1, "2"])       // true
 * sn.arrays.equalish([1, [2, 3]], [1, [2, 3]]) // false (The nested arrays are different instances.)
 * sn.arrays.equalish([1, {}], [1, {}])         // false (The nested objects are different instances.)
 */
const equalish = (a, b) => {

  if (a && !b) return false;
  if (!a && b) return false;
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();
  for (let i = a.length; i--;) if (a[i] !== b[i]) return false;

  return true;
};

/**
 * Move element at index `from` to index `to` in the `array` provided.
 * @param {Array} arr - The array to modify.
 * @param {Number} from - The index of the item to move.
 * @param {Number} to - The index to move the item to.
 */
const move = (arr, from, to) => arr.splice(to, 0, arr.splice(from, 1)[0]);


/**
 * Move element at index `from`, `by` a certain amount (negative or positive),
 * in the `array` provided.
 * @param {Array} arr - The array to modify.
 * @param {Number} from - The index of the item to move.
 * @param {Number} by - The number of space to move the element.
 *
 * USAGE:
 * let arr = ['a', 'b', 'c'];
 * sn.arrays.moveBy(arr, 0, 2);  // ['b', 'c', 'a']
 * sn.arrays.moveBy(arr, 2, -2); // ['a', 'b', 'c']
 */
const moveBy = (arr, from, by = 1) => {
  let newPos = (+from) + (+by);
  let value = arr[from];

  if (newPos < 0) newPos = 0;

  arr.splice(from, 1);
  arr.splice(newPos, 0, value);
};


export {chunk, weave, equalish};