/**
 * Formatting utilities
 * @module format
 */

/**
 * Format times as ##:##.###
 * @param time
 * @returns {string}
 */
const time = (time) => {
  return `${mod.pad(time.getHours(), 2)}`
    + `:${mod.pad(time.getMinutes(), 2)}`
    + `:${mod.pad(time.getSeconds(), 2)}`
    + `.${mod.pad(time.getMilliseconds(), 3)}`;
};


/**
 * Return a formatted percent string to the decimal places specified.
 * i.e.
 * sn.format.percent(13, 205, 3) results in "6.341%"
 * sn.format.percent(5, 10, 3) results in "50%"
 * @param {Number} count - The current count of items.
 * @param {Number} total - The total number of items.
 * @param {Number} decimals - The number of decimal places.
 */
const percent = (count, total = 1, decimals = 0) => Number((count / total * 100).toFixed(decimals)).toString() + '%';


/**
 * Return a formatted currency string for the supplied number.
 * i.e.
 * sn.format.currency(123456789.12345) results in "$123,456,789.12"
 * @param {Number} n - The currency amount.
 */
const currency = (n) => {
  let c = 2;
  let d = '.';
  let t = ',';
  let s = n < 0 ? '-$' : '$';
  let i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '';
  let j = (j = i.length) > 3 ? j % 3 : 0;

  return s + (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};


/**
 * Returns a phone number string in the format "(###) ### - ####".
 * @param {string} number - Phone number to format.
 * @param {boolean} [trim] - Optionally trim off underscore place holders. Default: `true`.
 */
const phone = (number, trim = true) => {
  let area = '___', first = '___', second = '____';
  let stripped = number.replace(/[^\d]/g, '');

  let replaceAt = (s,i,c) => s.substr(0, i) + c + s.substr(i + i);

  for (let i = 0; i < 10; i++) {
    let digit = stripped[i];
    if (typeof digit === 'undefined') break;

    if (i < 3)
      area = sreplaceAt(area, i, digit);
    else if (i < 6)
      first = replaceAt(first, i - 3, digit);
    else
      second = replaceAt(second, i - 6, digit);
  }
  let result = `(${area}) ${first} - ${second}`;

  if (trim) result = result.substr(0, result.indexOf('_'));

  return result;
};

export {time, percent, currency, phone};