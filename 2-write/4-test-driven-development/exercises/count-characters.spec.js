import { countCharacters } from './count-characters.js';

describe('countCharacters function', () => {
    it('returns an empty object for an empty string', () => {
      expect(countCharacters('')).toEqual({});
    });
  
    it('correctly counts characters in a string', () => {
      expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });
  });