import { reverseWords } from './reverse-words.js';

describe('reverseWords function', () => {
    it('reverses a single word', () => {
      expect(reverseWords('hello')).toBe('olleh');
    });
  
    it('reverses each word in a sentence', () => {
      expect(reverseWords('hello world!')).toBe('olleh !dlrow');
    });
  
    it('returns an empty string for empty input', () => {
      expect(reverseWords('')).toBe('');
    });
  
    it('returns the same string for a single word with whitespace', () => {
      expect(reverseWords('  hello  ')).toBe('  olleh  ');
    });
  
    it('preserves punctuation while reversing words', () => {
      expect(reverseWords('hello, world!')).toBe('olleh, !dlrow');
    });
  });
