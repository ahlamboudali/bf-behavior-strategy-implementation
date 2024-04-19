import { uniqueEntries } from './unique-entries.js';

describe('uniqueEntries function', () => {
    it('returns unique numbers in ascending order by default', () => {
      expect(uniqueEntries([3, 1, 3, 2])).toEqual([1, 2, 3]);
    });
  
    it('returns unique numbers in ascending order', () => {
      expect(uniqueEntries([3, 1, 3, 2], true)).toEqual([1, 2, 3]);
    });
  
    it('returns unique numbers in descending order', () => {
      expect(uniqueEntries([3, 1, 3, 2], false)).toEqual([3, 2, 1]);
    });
  
    it('handles empty array', () => {
      expect(uniqueEntries([])).toEqual([]);
    });
  
    it('handles array with one element', () => {
      expect(uniqueEntries([5])).toEqual([5]);
    });
  
    it('preserves order when all elements are unique', () => {
      expect(uniqueEntries([1, 2, 3])).toEqual([1, 2, 3]);
    });
  
    it('preserves order when all elements are unique and sorted in descending order', () => {
      expect(uniqueEntries([3, 2, 1], false)).toEqual([3, 2, 1]);
    });
  
    it('handles negative numbers correctly', () => {
      expect(uniqueEntries([-1, -2, -3])).toEqual([-3, -2, -1]);
    });
  
    it('handles mixed positive and negative numbers correctly', () => {
      expect(uniqueEntries([-3, 1, -2, 3, 2])).toEqual([-3, -2, 1, 2, 3]);
    });
  });
