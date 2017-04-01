import {StrUtil} from '../global/util';

/**
 * Module to store data as json in a single cookie.
 * @requires Cookies
 * @requires StrUtil from Util
 */

class Cookie {
  constructor(Cookies) {
    this._c = Cookies;
    this._name = 'g12h';
    this._max = 4093
  }

  /**
   * Retrieve value from JSON object store in the cookie.
   * scope and persistId are concatinated to form the property name of
   * the value to retrieve.
   * @param {string} scope - Scope of the value.
   * @param {string} persistId - Id of the value.
   * @param {string} defaultValue - Returned value if the requested property is not found.
   */
  get(scope, persistId, defaultValue) {
    let c = this._c.getJSON(this._name), value;
    if (!c) return defaultValue;

    value = c[`${scope}-${persistId}`] || defaultValue;

    return value;
  }

  set(scope, persistId, value) {
    let c = this._c.getJSON(this._name) || {};
    c[`${scope}-${persistId}`] = value;
    let stringified = JSON.stringify(c);
    let bytes = StrUtil.bytes(stringified);
    if (bytes >= this._max)
      console.error(`Cookie set failed: cookie length (${bytes} bytes) exceeds max (${_max} bytes) `)
    else
      this._c.set(this._name, c, { expires: 365 });
  }

  static get name() { return this._name; }
}

export default {Cookie};