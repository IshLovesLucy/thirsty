import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/app/theme';
import { DrinkCard } from './DrinkCard';
import type { Drink } from '@/types/drink';

const mockDrink: Drink = {
  idDrink: '11007',
  strDrink: 'Margarita',
  strDrinkThumb: 'https://example.com/image.jpg',
  strInstructions: 'Mix well',
  strIngredient1: null,
  strIngredient2: null,
  strIngredient3: null,
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: null,
  strMeasure2: null,
  strMeasure3: null,
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
};

const renderWithChakra = (component: React.ReactElement) => {
  return render(<ChakraProvider value={system}>{component}</ChakraProvider>);
};

describe('DrinkCard', () => {
  it('renders drink name', () => {
    renderWithChakra(<DrinkCard drink={mockDrink} />);
    expect(screen.getByText('Margarita')).toBeInTheDocument();
  });

  it('renders drink image', () => {
    renderWithChakra(<DrinkCard drink={mockDrink} />);
    const img = screen.getByAltText('Margarita') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    // Next.js Image transforms src to optimized URL
    expect(img.src).toContain('_next/image');
  });

  it('has correct link href', () => {
    renderWithChakra(<DrinkCard drink={mockDrink} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/drink/11007');
  });
});
