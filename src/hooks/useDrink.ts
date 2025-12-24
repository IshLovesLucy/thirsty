'use client';

import useSWR from 'swr';
import { cocktailApi } from '@/services/cocktailApi';
import { Drink, CocktailApiResponse } from '@/types/drink';

export function useDrink(id: string) {
  const { data, error, isLoading } = useSWR<CocktailApiResponse>(
    cocktailApi.drinkKey(id)
  );

  return {
    drink: data?.drinks?.[0] || null,
    isLoading,
    error: error ? 'Failed to fetch drink details' : null,
  };
}
