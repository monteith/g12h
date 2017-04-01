import * as arrUtil from '../../src/js/util/array';
import {isEven} from '../../src/js/util/num';


let arrTest = [1,2,3,4,5,6];

describe('array utilities', () => {

  /**
   * @function arr.chunk(array, size)
   */
  describe('tests for array#chunk', () => {

    it('should output 3 arrays with length of 2', () => {
      let x = arrUtil.chunk(arrTest, 2);
      x.forEach((arr) => {
        expect(arr.length).toBe(2);
      });
      expect(x.length).toBe(3);
    });

    it('should output 2 arrays with length of 3 and 1 array of 1', () => {
      let x = arrUtil.chunk(arrTest, 4);
      expect(x[0].length).toBe(4);
      expect(x[1].length).toBe(2);
      expect(x.length).toBe(2);
    });
  });


  /**
   * @function arr.weave
   */
  describe('array#weave', () => {

    it('should weave "wot" into every other index', () => {
      let x = arrUtil.weave(arrTest, 'wot');

      x.forEach((obj, i) => {
        if (!isEven(i)) expect(obj).toBe('wot');
      });

      expect(x.length).toBe(arrTest.length * 2 - 1);
    });

    it('should weave every other, starting with 0', () => {
      let x = arrUtil.weave(arrTest, 'wot', true);

      x.forEach((obj, i) => {
        if (isEven(i)) expect(obj).toBe('wot');
      });

      expect(x.length).toBe(arrTest.length * 2);
    });

    it('should weave the output of a function into alternating indeces', () => {
      let func = () => 'wot';
      let x = arrUtil.weave(arrTest, func);

      x.forEach((obj, i) => {
        if (!isEven(i)) expect(obj).toBe('wot');
      });

      expect(x.length).toBe(arrTest.length * 2 - 1);
    });

    it('should weave an array into alternating indeces', () => {
      let x = arrUtil.weave(arrTest, arrTest);

      x.forEach((obj, i) => {
        if (!isEven(i))
          expect(x[i]).toBe(x[i - 1]);
      });
    });

  });

  describe('array#equalish', () => {

    // equalish([1, 2], [1, 2])
    // equalish([1, "2"], [1, 2])
    // equalish(["2", 1], [1, "2"])

    it('[1,2] should equalish [1,2]', () => {
      let x = [1, 2],
        y = [1, 2];

      expect(arrUtil.equalish(x, y)).toBeTruthy();
    });

    it('[1,"2"] should not equalish [1,2]', () => {
      let x = [1, '2'],
        y = [1, 2];

      expect(arrUtil.equalish(x, y)).toBeFalsy();
    });

    it('["2",1] should equal [1,"2"]', () => {
      let x = ["2", 1],
        y = [1, "2"];

      expect(arrUtil.equalish).toBeTruthy();
    });

  });

  describe('array#move', () => {

    it('should return [1,3,2]', () => {
      let x = [1,2,3];
      arrUtil.move(x, 1, 2);

      expect(arrUtil.equalish(x, [1,3,2])).toBeTruthy();
    });

  });

  describe('array#moveBy', () => {

    it('should return [2,3,1]', () => {
      let x = [1,2,3];
      arrUtil.moveBy(x, 0, 2);

      expect(arrUtil.equalish(x, [2,3,1])).toBeTruthy();
    });

    it('should return [1,2,3]', () => {
      let x = [1,2,3];
      arrUtil.moveBy(x, 2, -2);

      expect(arrUtil.equalish(x, [1,2,3])).toBeTruthy();
    });
  });
});