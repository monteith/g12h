/**
 * Regular expression utilities
 * @module regex
 */

const email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const isEmail = (str) => !!email.exec(str);


const geo = {
  lat: /^-?([0-8]?[0-9]|90)\.[0-9]{1,6}$/,
  long: /^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,6}$/
};

const isLatitude = (obj) => !!geo.lat.exec(obj);
const isLongitude = (obj) => !!geo.long.exec(obj);


const cc = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  master: /^5[1-5][0-9]{14}$/,
  amex: /^3[47][0-9]{13}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/
};

const isVisa = (obj) => !!cc.visa.exec(obj);
const isMasterCard = (obj) => !!cc.master.exec(obj);
const isAmex = (obj) => !!cc.amex.exec(obj);
const isDiners = (obj) => !!cc.diners.exec(obj);
const isDiscover = (obj) => !!cc.discover.exec(obj);
const isJcb = (obj) => !!cc.jcb.exec(obj);


export {email, isEmail, geo, isLatitude, isLongitude, cc, isVisa, isMasterCard, isAmex, isDiners, isDiscover, isJcb}


