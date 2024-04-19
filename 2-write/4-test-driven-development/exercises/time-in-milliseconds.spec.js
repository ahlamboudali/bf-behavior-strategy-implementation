import { timeInMilliseconds } from './time-in-milliseconds.js';

describe('timeInMilliseconds function', () => {
    it('returns 0 milliseconds for midnight', () => {
      expect(timeInMilliseconds(0, 0, 0)).toBe(0);
    });
  
    it('returns correct milliseconds for 1 second past midnight', () => {
      expect(timeInMilliseconds(0, 0, 1)).toBe(1000);
    });
  
    it('returns correct milliseconds for 1 minute and 1 second past midnight', () => {
      expect(timeInMilliseconds(0, 1, 1)).toBe(61000);
    });
  
    it('returns correct milliseconds for 23:59:59', () => {
      expect(timeInMilliseconds(23, 59, 59)).toBe(86399000);
    });
  
    it('throws an error for invalid hours', () => {
      expect(() => timeInMilliseconds(24, 0, 0)).toThrow('Invalid time format');
    });
  
    it('throws an error for invalid minutes', () => {
      expect(() => timeInMilliseconds(12, 60, 0)).toThrow('Invalid time format');
    });
  
    it('throws an error for invalid seconds', () => {
      expect(() => timeInMilliseconds(12, 0, 60)).toThrow('Invalid time format');
    });
  });
  
