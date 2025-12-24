'use client';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <InputGroup className={styles.searchBar}>
      <InputLeftElement>
        <SearchIcon className={styles.searchIcon} />
      </InputLeftElement>
      <Input
        placeholder="Find a drink"
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchInput}
        variant="unstyled"
      />
    </InputGroup>
  );
}
