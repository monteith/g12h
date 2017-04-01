import * as numUtil from '../../src/js/util/num';


describe('number utilities', () => {

  /**
   * @function random(min,max)
   */
  describe('num#random()', () => {

    test('generatees random number between 0 and 10', () => {
      let x = numUtil.random(0, 10);
      expect(x).toBeGreaterThan(0);
      expect(x).toBeLessThan(10);
    });

    test('generatees random number between 0 and 1', () => {
      let x = numUtil.random(0, 1);
      expect(x).toBeGreaterThan(0);
      expect(x).toBeLessThan(1);
    });

  });


  /**
   * @function randomInt(min,max)
   */
  describe('num#randomInt()', () => {
    test('generatees random integer between 0 and 10', () => {
      let x = numUtil.randomInt(0, 10);
      expect(x).toBeGreaterThan(-1);
      expect(x).toBeLessThan(10);
      expect(Math.floor(x)).toEqual(x);
    });

    test('generatees random integer between 0 and 100', () => {
      let x = numUtil.randomInt(0, 100);
      expect(x).toBeGreaterThan(0);
      expect(x).toBeLessThan(100);
      expect(Math.floor(x)).toEqual(x);
    });

  });


  /**
   * @function isEven(n)
   */
  describe('num#isEven', () => {
    it('should handle integers', () => {
      expect(numUtil.isEven(2)).toBeTruthy();
    });

    it('should handle zero', () => {
      expect(numUtil.isEven(0)).toBeTruthy();
    });

    it('should handle strings', () => {
      expect(numUtil.isEven('2')).toBeTruthy();
    });

    it('should handle falsy strings', () => {
      expect(numUtil.isEven('1')).toBeFalsy();
    });
  });


  /**
   * @function isEvenStrict(n)
   */
  describe('num#isEvenStrict', () => {
    it('should handle integers', () => {
      expect(numUtil.isEvenStrict(2)).toBeTruthy();
    });

    it('should handle zero', () => {
      expect(numUtil.isEvenStrict(0)).toBeTruthy();
    });

    it('should handle strings', () => {
      expect(numUtil.isEvenStrict('2')).toBeFalsy();
    });

    it('should handle falsy strings', () => {
      expect(numUtil.isEvenStrict('1')).toBeFalsy();
    });
  });

});