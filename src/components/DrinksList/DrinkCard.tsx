'use client'

import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import type { Drink } from '@/types/drink'
import styles from './DrinkCard.module.css'

interface DrinkCardProps {
  drink: Drink
}

export function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <Link href={`/drink/${drink.idDrink}`} className={styles.drinkCardLink}>
      <Flex className={styles.drinkCard}>
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className={styles.drinkCard__image}
        />

        <Box className={styles.drinkCard__name}>{drink.strDrink}</Box>

        {/* Simple chevron using CSS */}
        <span className={styles.drinkCard__chevron}>›</span>
      </Flex>
    </Link>
  )
}