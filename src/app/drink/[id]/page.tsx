'use client';

import { Container, Flex, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { useDrink } from '@/hooks/useDrink';
import { IngredientLegend } from '@/components/DrinkDetails/IngredientLegend';
import { IngredientPieChart } from '@/components/DrinkDetails/IngredientPieChart';
import { parseIngredients } from '@/utils/parseIngredients';
import styles from './page.module.css';

export default function DrinkDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { drink, isLoading, error } = useDrink(params.id as string);

  const ingredients = drink ? parseIngredients(drink) : [];

  if (isLoading) {
    return (
      <Container maxW="container.md">
        <div className={styles.loading}>Loading...</div>
      </Container>
    );
  }

  if (error || !drink) {
    return (
      <Container maxW="container.md">
        <div className={styles.error}>{error || 'Drink not found'}</div>
      </Container>
    );
  }

  return (
    <Container as="main" maxW="container.md" className={styles.container}>
      <header className={styles.header}>
        <Flex className={styles.headerTop}>
          <IconButton
            aria-label="Back to search"
            onClick={() => router.back()}
            className={`${styles.backButton} border__focus`}
            variant="ghost"
          >
            ←
          </IconButton>
          <h1 className={styles.headerTitle}>Thirsty</h1>
        </Flex>
        <h2 className={`${styles.drinkName} ${styles.center__header}`}>
          {drink.strDrink}
        </h2>
      </header>

      <article className={styles.article}>
        <div className={styles.imageContainer}>
          <Image
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={200}
            height={200}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
            priority={true}
          />
        </div>

        <h2 className={`${styles.drinkName} ${styles.center__article}`}>
          {drink.strDrink}
        </h2>

        <Flex className={styles.ingredientsSection}>
          <div className={styles.ingredientsColumn}>
            <IngredientLegend ingredients={ingredients} />
          </div>
          {ingredients.length > 0 && (
            <div className={styles.chartColumn}>
              <IngredientPieChart ingredients={ingredients} />
            </div>
          )}
        </Flex>

        <div className={styles.instructions}>
          <p>{drink.strInstructions}</p>
        </div>
      </article>
    </Container>
  );
}
