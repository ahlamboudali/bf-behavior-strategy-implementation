import { middleCharacter } from './middle-character.js';

import { middleCharacter } from './yourFilePath';

describe('middleCharacter function', () => {
  it('returns middle character for odd-length string', () => {
    expect(middleCharacter('hello')).toBe('l');
  });

  it('returns middle two characters for even-length string', () => {
    expect(middleCharacter('abcd')).toBe('bc');
  });

  it('returns empty string for empty input string', () => {
    expect(middleCharacter('')).toBe('');
  });

  it('returns single character for single-character input string', () => {
    expect(middleCharacter('a')).toBe('a');
  });

  it('returns middle character for odd-length string with whitespace', () => {
    expect(middleCharacter(' hello ')).toBe('l');
  });

  it('returns middle two characters for even-length string with whitespace', () => {
    expect(middleCharacter(' abcd ')).toBe(' bc');
  });

  it('returns middle two characters for even-length string with special characters', () => {
    expect(middleCharacter('ab@cd')).toBe('@c');
  });
});