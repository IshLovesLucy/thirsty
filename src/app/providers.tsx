'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { theme } from './theme';

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
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SWRConfig>
  );
}
