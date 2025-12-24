import { describe, it, expect } from 'vitest';
import { parseIngredientAmount } from './unitConversion';

describe('parseIngredientAmount', () => {
  it('converts oz correctly', () => {
    expect(parseIngredientAmount('3 oz')).toBe(3);
  });

  it('converts tsp to oz', () => {
    expect(parseIngredientAmount('1 tsp')).toBeCloseTo(0.166667, 5);
  });

  it('converts tbsp to oz', () => {
    expect(parseIngredientAmount('2 tbsp')).toBe(1);
  });

  it('converts cup to oz', () => {
    expect(parseIngredientAmount('1 cup')).toBe(8);
  });

  it('converts cl to oz', () => {
    expect(parseIngredientAmount('3 cl')).toBeCloseTo(1.01442, 5);
  });

  it('handles fractions', () => {
    expect(parseIngredientAmount('1/2 oz')).toBe(0.5);
  });

  it('handles mixed numbers', () => {
    expect(parseIngredientAmount('1 1/2 oz')).toBe(1.5);
  });

  it('returns null for unsupported units', () => {
    expect(parseIngredientAmount('5 grams')).toBeNull();
  });

  it('returns null for invalid input', () => {
    expect(parseIngredientAmount('abc')).toBeNull();
  });
});
