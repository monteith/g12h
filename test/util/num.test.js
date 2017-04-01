import {random, randomInt} from '../../src/js/util/num';

/**
 * @function random(min,max)
 */
describe('tests for num#random()', () => {

  test('generatees random number between 0 and 10', () => {
    let x = random(0,10);
    expect(x).toBeGreaterThan(0);
    expect(x).toBeLessThan(10);
  });

  test('generatees random number between 0 and 1', () => {
    let x = random(0,1);
    expect(x).toBeGreaterThan(0);
    expect(x).toBeLessThan(1);
  });

});

/**
 * @function randomInt(min,max)
 */
describe('tests for num#randomInt()', () => {
  test('generatees random integer between 0 and 10', () => {
    let x = randomInt(0,10);
    expect(x).toBeGreaterThan(-1);
    expect(x).toBeLessThan(10);
    expect(Math.floor(x)).toEqual(x);
  });

  test('generatees random integer between 0 and 100', () => {
    let x = randomInt(0,100);
    expect(x).toBeGreaterThan(0);
    expect(x).toBeLessThan(100);
    expect(Math.floor(x)).toEqual(x);
  });

});

