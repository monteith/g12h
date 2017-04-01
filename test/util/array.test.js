import * as arrUtil from '../../src/js/util/array';
import {isEven} from '../../src/js/util/num';


let arrTest = [1,2,3,4,5,6];

/**
 * @function arr.chunk(array, size)
 */
describe('tests for array#chunk', () => {

  test('should output 3 arrays with length of 2', () => {
    let x = arrUtil.chunk(arrTest, 2);
    x.forEach((arr) => {
      expect(arr.length).toBe(2);
    });
    expect(x.length).toBe(3);
  });

  test('should output 2 arrays with length of 3 and 1 array of 1', () => {
    let x = arrUtil.chunk(arrTest, 4);
    expect(x[0].length).toBe(4);
    expect(x[1].length).toBe(2);
    expect(x.length).toBe(2);
  });
});


/**
 * @function arr.weave
 */
describe('tests for array#weave', () => {

  test('array weave basic', () => {
    let x = arrUtil.weave(arrTest, 'wot');

    x.forEach((obj,i) => {
      if (!isEven(i)) expect(obj).toBe('wot');
    });

    expect(x.length).toBe(arrTest.length * 2 - 1);
  });

  test('array weave using before = true', () => {
    let x = arrUtil.weave(arrTest, 'wot', true);

    x.forEach((obj, i) => {
      if (isEven(i)) expect(obj).toBe('wot');
    });

    expect(x.length).toBe(arrTest.length * 2);
  });

  test('array weave using function', () => {
    let func = () => 'wot';
    let x = arrUtil.weave(arrTest, func);

    x.forEach((obj,i) => {
      if (!isEven(i)) expect(obj).toBe('wot');
    });

    expect(x.length).toBe(arrTest.length * 2 - 1);
  });

  test('array weave using array', () => {
    let x = arrUtil.weave(arrTest, arrTest);

    x.forEach((obj, i) => {
      if (!isEven(i))
        expect(x[i]).toBe(x[i-1]);
    });
  });
});