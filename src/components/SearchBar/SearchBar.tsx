'use client';

import { Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.searchIcon} />
      <Input
        placeholder="Find a drink"
        onChange={(e) => onSearch(e.target.value)}
        className={`${styles.searchInput} border__focus`}
        id="id"
      />
    </div>
  );
}
