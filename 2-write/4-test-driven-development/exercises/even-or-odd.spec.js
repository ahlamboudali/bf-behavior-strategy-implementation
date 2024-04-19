import { evenOrOdd } from './even-or-odd.js';

describe('evenOrOdd function', () => {
    it('returns correct labels for even and odd numbers', () => {
      expect(evenOrOdd([1, 2])).toEqual(['odd', 'even']);
    });
  
    it('returns "even" for all even numbers', () => {
      expect(evenOrOdd([2, 4, 6, 8])).toEqual(['even', 'even', 'even', 'even']);
    });
  
    it('returns "odd" for all odd numbers', () => {
      expect(evenOrOdd([1, 3, 5, 7])).toEqual(['odd', 'odd', 'odd', 'odd']);
    });
  
    it('returns empty array when given an empty array', () => {
      expect(evenOrOdd([])).toEqual([]);
    });
  
    it('returns correct labels for mixed numbers', () => {
      expect(evenOrOdd([1, 2, 3, 4, 5])).toEqual(['odd', 'even', 'odd', 'even', 'odd']);
    });
  
    it('returns "even" for 0', () => {
      expect(evenOrOdd([0])).toEqual(['even']);
    });
  
    it('handles negative numbers correctly', () => {
      expect(evenOrOdd([-2, -1, 0, 1, 2])).toEqual(['even', 'odd', 'even', 'odd', 'even']);
    });
  });
