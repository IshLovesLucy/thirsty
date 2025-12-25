'use client';

import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import type { Drink } from '@/types/drink';
import styles from './DrinkCard.module.css';

interface DrinkCardProps {
  drink: Drink;
}

export function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <Link href={`/drink/${drink.idDrink}`} className={styles.drinkCardLink}>
      <Flex className={styles.drinkCard}>
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          width={40}
          height={40}
          className={`${styles.drinkCard__image} image__circle`}
          priority={false}
        />

        <div className={styles.drinkCard__name}>{drink.strDrink}</div>

        {/* Simple chevron using CSS */}
        <span className={styles.drinkCard__chevron}>›</span>
      </Flex>
    </Link>
  );
}
