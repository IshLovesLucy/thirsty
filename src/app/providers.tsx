'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme';
import { SWRConfig } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        dedupingInterval: 2000,
      }}
    >
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </SWRConfig>
  );
}
