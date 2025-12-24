'use client';

import useSWR from 'swr';
import { useState } from 'react';
import { useDebounce } from './useDebounce';
import { cocktailApi } from '@/services/cocktailApi';
import { CocktailApiResponse } from '@/types/drink';

export function useDrinkSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 300);

  const { data, error, isLoading } = useSWR<CocktailApiResponse>(
    cocktailApi.searchKey(debouncedQuery),
  );

  return {
    drinks: data?.drinks || [],
    isLoading,
    error: error ? 'Failed to fetch drinks' : null,
    query,
    setQuery,
  };
}
