import { describe, it, expect } from 'vitest';
import { generatePastelColor } from './colorGenerator';

describe('generatePastelColor', () => {
  it('generates valid hex color', () => {
    const color = generatePastelColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/i);
  });

  it('generates pastel colors consistently', () => {
    for (let i = 0; i < 10; i++) {
      const color = generatePastelColor();
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    }
  });
});
