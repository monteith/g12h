/**
 * Utilities for manipulating strings
 * @module str
 */


/**
 * Build string from repeated string
 * @param str
 * @param times
 */
const repeat = (str, times) => new Array(times + 1).join(str);


/**
 * Pad number with zeros and return as string
 * @param num
 * @param maxLength
 */
const pad = (num, maxLength) => repeat(`0`, maxLength - num.toString().length) + num;


/**
 * Replace a character in a string at an index
 * @param s
 * @param i
 * @param c
 */
const replaceAt = (s, i, c) => s.substr(0, i) + c + s.substr(i + i);


/**
 * Check if string ends in a character
 * @param s
 * @param c
 */
const endsWith = (s, c) => s[s.length - 1] === c;


/**
 * Generate unique identifier string
 * @returns {string}
 */
const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};


/**
 *Return the size of a string in bytes assuming UTF-8 encoding.
 * @param str
 * @returns {*}
 */
const bytes = (str) => {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  let m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
};

export {repeat, pad, replaceAt, endsWith, uuid, bytes};