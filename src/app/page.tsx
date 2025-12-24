'use client';

import { Container } from '@chakra-ui/react';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { DrinksList } from '@/components/DrinksList/DrinksList';
import { useDrinkSearch } from '@/hooks/useDrinkSearch';
import styles from './page.module.css';

export default function HomePage() {
  const { drinks, isLoading, error, query, setQuery } = useDrinkSearch();

  return (
    <Container maxW="container.md" className={styles.container}>
      <h1 className={styles.title}>Thirsty</h1>

      <SearchBar onSearch={setQuery} />

      {error && <div className={styles.error}>{error}</div>}

      {isLoading && <div className={styles.loading}>Searching...</div>}

      {!isLoading && !error && drinks.length > 0 && (
        <DrinksList drinks={drinks} />
      )}

      {!isLoading && !error && drinks.length === 0 && query && (
        <div className={styles.empty}>No drinks found for "{query}"</div>
      )}

      {!isLoading && !error && drinks.length === 0 && !query && (
        <div className={styles.empty}>Start typing to search for drinks</div>
      )}
    </Container>
  );
}
