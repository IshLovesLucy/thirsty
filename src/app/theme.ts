import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        // We're using CSS variables instead, so minimal theme config
      },
    },
  },
})