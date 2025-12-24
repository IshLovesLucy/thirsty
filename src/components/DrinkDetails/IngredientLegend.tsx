'use client';

import { Box, Flex, VStack } from '@chakra-ui/react';
import { ParsedIngredient } from '@/types/drink';
import styles from './IngredientLegend.module.css';

interface IngredientLegendProps {
  ingredients: ParsedIngredient[];
}

export function IngredientLegend({ ingredients }: IngredientLegendProps) {
  return (
    <Box className={styles.ingredientLegend}>
      <h3 className={styles.ingredientLegend__title}>Ingredients:</h3>
      <VStack spacing="12px" align="stretch">
        {ingredients.map((ingredient, index) => (
          <Flex key={index} className={styles.ingredientLegend__item}>
            <Box
              className={styles.ingredientLegend__colorSquare}
              style={{ backgroundColor: ingredient.color }}
            />
            <span className={styles.ingredientLegend__text}>
              {ingredient.name} ({ingredient.measure})
            </span>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
