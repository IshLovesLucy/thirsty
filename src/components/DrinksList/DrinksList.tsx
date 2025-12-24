'use client';

import { Box } from '@chakra-ui/react';
import { DrinkCard } from './DrinkCard';
import { Drink } from '@/types/drink';
import styles from './DrinksList.module.css';

interface DrinksListProps {
  drinks: Drink[];
}

export function DrinksList({ drinks }: DrinksListProps) {
  return (
    <Box className={styles.drinksList}>
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </Box>
  );
}
