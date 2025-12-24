import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/app/theme';
import { IngredientLegend } from './IngredientLegend';

const meta = {
  title: 'Components/IngredientLegend',
  component: IngredientLegend,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <Story />
      </ChakraProvider>
    ),
  ],
} satisfies Meta<typeof IngredientLegend>;

export default meta;
type Story = StoryObj<typeof IngredientLegend>;

export const Default: Story = {
  args: {
    ingredients: [
      {
        name: 'Tequila',
        measure: '1 1/2 oz',
        amount: 1.5,
        color: '#E8C5E5',
      },
      {
        name: 'Triple sec',
        measure: '1/2 oz',
        amount: 0.5,
        color: '#B8E6D5',
      },
      {
        name: 'Lime juice',
        measure: '1 oz',
        amount: 1,
        color: '#F5E6B8',
      },
      {
        name: 'Salt',
        measure: '',
        amount: 0,
        color: '#E5D4C1',
      },
    ],
  },
};

export const ManyIngredients: Story = {
  args: {
    ingredients: [
      {
        name: 'Vodka',
        measure: '1 oz',
        amount: 1,
        color: '#E8C5E5',
      },
      {
        name: 'Rum',
        measure: '1 oz',
        amount: 1,
        color: '#B8E6D5',
      },
      {
        name: 'Tequila',
        measure: '1 oz',
        amount: 1,
        color: '#F5E6B8',
      },
      {
        name: 'Gin',
        measure: '1 oz',
        amount: 1,
        color: '#E5D4C1',
      },
      {
        name: 'Triple sec',
        measure: '1/2 oz',
        amount: 0.5,
        color: '#D5C5E8',
      },
      {
        name: 'Sweet and sour mix',
        measure: '2 oz',
        amount: 2,
        color: '#C5E8D5',
      },
      {
        name: 'Coca-Cola',
        measure: '1 splash',
        amount: 0,
        color: '#E6B8C5',
      },
    ],
  },
};
