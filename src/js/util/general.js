/**
 * General
 * @module general
 */


const identity = (o) => o;


/** Convenient 'do nothing' function that doesn't require an argument like void(0); */
const noop = () => {};


/**
 * Convenient condition helper to abstract ternaries like in jsx.
 * i.e.
 * <ul>
 *   {iffer(user, <li>Hi, {user}</li>}
 * </ul>
 */
const iffer = (condition, then, otherwise = '') => condition ? then : otherwise;
const unless = (condition, then, otherwise) => !condition ? then : otherwise;

export {identity, noop, iffer, unless};