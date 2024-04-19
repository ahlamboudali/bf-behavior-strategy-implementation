import { matchingBraces } from './matching-braces.js';

describe('matchingBraces function', () => {
    it('returns false for single opening brace', () => {
      expect(matchingBraces('[')).toBe(false);
    });
  
    it('returns true for correctly matched braces', () => {
      expect(matchingBraces('()')).toBe(true);
      expect(matchingBraces('{[]}')).toBe(true);
      expect(matchingBraces('()[]{}')).toBe(true);
    });
  
    it('returns false for incorrectly matched braces', () => {
      expect(matchingBraces('(]')).toBe(false);
      expect(matchingBraces('([)]')).toBe(false);
    });
  
    it('returns true for empty string', () => {
      expect(matchingBraces('')).toBe(true);
    });
  
    it('handles mixed braces correctly', () => {
      expect(matchingBraces('()[]{}')).toBe(true);
      expect(matchingBraces('([])')).toBe(true);
      expect(matchingBraces('{[()]}')).toBe(true);
    });
  });
