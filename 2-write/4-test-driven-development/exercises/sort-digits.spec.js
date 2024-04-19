import { sortDigits } from './sort-digits.js';

describe('sortDigits function', () => {
    it('sorts digits in ascending order by default', () => {
      expect(sortDigits(2321)).toBe(1223);
    });
  
    it('sorts digits in ascending order', () => {
      expect(sortDigits(2321, true)).toBe(1223);
    });
  
    it('sorts digits in descending order', () => {
      expect(sortDigits(2321, false)).toBe(3221);
    });
  
    it('returns the same number if it has only one digit', () => {
      expect(sortDigits(5)).toBe(5);
    });
  
    it('handles zero correctly', () => {
      expect(sortDigits(0)).toBe(0);
    });
  
    it('sorts digits in descending order when all digits are the same', () => {
      expect(sortDigits(4444, true)).toBe(4444);
      expect(sortDigits(4444, false)).toBe(4444);
    });
  
    it('preserves leading zeros', () => {
      expect(sortDigits(102030)).toBe(123000);
    });
  });