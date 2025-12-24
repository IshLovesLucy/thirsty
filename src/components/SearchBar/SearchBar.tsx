'use client'

import { Input } from '@chakra-ui/react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <Input
        placeholder="Find a drink"
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  )
}