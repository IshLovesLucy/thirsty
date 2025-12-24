import { Drink, ParsedIngredient } from '@/types/drink';
import { parseIngredientAmount } from './unitConversion';
import { generatePastelColor } from './colorGenerator';

export function parseIngredients(drink: Drink): ParsedIngredient[] {
  const ingredients: ParsedIngredient[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Drink;
    const measureKey = `strMeasure${i}` as keyof Drink;

    const ingredientName = drink[ingredientKey];
    const measureText = drink[measureKey];

    if (!ingredientName || ingredientName.trim() === '') {
      continue;
    }

    const amount = measureText
      ? parseIngredientAmount(measureText as string) || 0
      : 0;

    ingredients.push({
      name: ingredientName as string,
      measure: (measureText as string) || '',
      amount,
      color: generatePastelColor(),
    });
  }

  return ingredients;
}
