const CONVERSIONS_TO_OZ = {
  oz: 1,
  tsp: 0.166667,
  tbsp: 0.5,
  cl: 0.33814,
  cup: 8,
};

export function parseIngredientAmount(measure: string): number | null {
  if (!measure) return null;

  const normalized = measure.toLowerCase().trim();

  // Extract fraction pattern (e.g., "1/2", "3/4")
  const fractionMatch = normalized.match(/(\d+)\/(\d+)/);
  // Extract whole number before fraction (e.g., "1 1/2")
  const mixedMatch = normalized.match(/^(\d+)\s+(\d+)\/(\d+)/);
  // Extract decimal or whole number (e.g., "2", "1.5")
  const numberMatch = normalized.match(/^(\d+\.?\d*)/);

  let amount = 0;

  if (mixedMatch) {
    // Handle mixed numbers like "1 1/2"
    const whole = parseFloat(mixedMatch[1]);
    const numerator = parseFloat(mixedMatch[2]);
    const denominator = parseFloat(mixedMatch[3]);
    amount = whole + numerator / denominator;
  } else if (fractionMatch) {
    // Handle fractions like "1/2"
    const numerator = parseFloat(fractionMatch[1]);
    const denominator = parseFloat(fractionMatch[2]);
    amount = numerator / denominator;
  } else if (numberMatch) {
    // Handle whole or decimal numbers
    amount = parseFloat(numberMatch[1]);
  } else {
    return null;
  }

  // Extract unit
  const unitMatch = normalized.match(/\b(oz|tsp|tbsp|cl|cup)\b/);
  if (unitMatch) {
    const unit = unitMatch[1] as keyof typeof CONVERSIONS_TO_OZ;
    return amount * CONVERSIONS_TO_OZ[unit];
  }

  // If no unit found, assume oz
  return amount;
}
