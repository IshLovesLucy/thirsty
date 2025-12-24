'use client';

import { Container, Box, Flex, Image, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
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
    <Container maxW="container.md" className={styles.container}>
      <Flex className={styles.header}>
        <IconButton
          aria-label="Back to search"
          icon={<ArrowBackIcon />}
          onClick={() => router.back()}
          className={styles.backButton}
          variant="ghost"
        />
        <h1 className={styles.headerTitle}>Thirsty</h1>
      </Flex>

      <Box className={styles.imageContainer}>
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className={styles.drinkImage}
        />
      </Box>

      <h2 className={styles.drinkName}>{drink.strDrink}</h2>

      <IngredientLegend ingredients={ingredients} />

      {ingredients.length > 0 && (
        <Box className={styles.pieChartContainer}>
          <IngredientPieChart ingredients={ingredients} />
        </Box>
      )}

      <Box className={styles.instructions}>
        <p>{drink.strInstructions}</p>
      </Box>
    </Container>
  );
}
