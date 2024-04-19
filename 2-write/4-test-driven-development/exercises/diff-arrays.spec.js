import { diffArrays } from './diff-arrays.js';

describe('', () => {});
describe('diffArrays function', () => {
    it('returns items not in both arrays', () => {
      expect(diffArrays([2], [1, 3])).toEqual([1, 3]);
    });
  
    it('correctly handles arrays with NaN', () => {
      expect(diffArrays([2, NaN], [3, 1])).toEqual([2, NaN, 3]);
    });
  
    it('returns an empty array when both arrays are equal', () => {
      expect(diffArrays([2, 1], [2, 1])).toEqual([]);
    });
  
    it('returns items from both arrays when they have no common elements', () => {
      expect(diffArrays([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('returns items not in both arrays when arrays have duplicate elements', () => {
      expect(diffArrays([1, 1, 2, 3], [3, 4, 4])).toEqual([1, 2, 4]);
    });
  });