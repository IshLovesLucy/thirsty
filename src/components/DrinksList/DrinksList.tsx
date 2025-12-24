'use client';

import { DrinkCard } from './DrinkCard';
import { Drink } from '@/types/drink';
import styles from './DrinksList.module.css';

interface DrinksListProps {
  drinks: Drink[];
}

export function DrinksList({ drinks }: DrinksListProps) {
  return (
    <ul className={styles.drinksList}>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <DrinkCard drink={drink} />
        </li>
      ))}
    </ul>
  );
}
