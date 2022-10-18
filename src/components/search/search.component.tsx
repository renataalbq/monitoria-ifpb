import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {styles} from "./search.style"

interface SearchProps {
    placeholder: string;
}

export const Search = (props: SearchProps) => {
    const [search, setSearch] = useState('')

    return (
      <Searchbar
        placeholder={props.placeholder}
        onChangeText={query => { setSearch(query); }}
        value={search}
        style={styles.search}
      />
    );
}