import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/app/theme';
import { DrinkCard } from './DrinkCard';
import type { Drink } from '@/types/drink';

const mockDrink: Drink = {
  idDrink: '11007',
  strDrink: 'Margarita',
  strDrinkThumb:
    'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  strInstructions:
    'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
  strIngredient1: 'Tequila',
  strIngredient2: 'Triple sec',
  strIngredient3: 'Lime juice',
  strIngredient4: 'Salt',
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
  strMeasure1: '1 1/2 oz',
  strMeasure2: '1/2 oz',
  strMeasure3: '1 oz',
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

const meta = {
  title: 'Components/DrinkCard',
  component: DrinkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <div style={{ width: '400px' }}>
          <Story />
        </div>
      </ChakraProvider>
    ),
  ],
} satisfies Meta<typeof DrinkCard>;

export default meta;
type Story = StoryObj<typeof DrinkCard>;

export const Default: Story = {
  args: {
    drink: mockDrink,
  },
};

export const LongName: Story = {
  args: {
    drink: {
      ...mockDrink,
      idDrink: '12345',
      strDrink: 'A1 Surfer Pineapple Margarita with Extra Long Name',
    },
  },
};

export const NoImage: Story = {
  args: {
    drink: {
      ...mockDrink,
      strDrinkThumb: '',
    },
  },
};
