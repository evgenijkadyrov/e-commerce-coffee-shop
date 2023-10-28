'use client'
import React, {FC, useState} from 'react';
import {Input, InputGroup,  InputLeftElement} from "@chakra-ui/input";
import {SearchIcon} from "@chakra-ui/icons";


const Search:FC = () => {
    const[search, setSearch]=useState('')
    return (
        <div className={'flex justify-center items-center w-2/6'}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input type='search' variant={'flushed'} placeholder='Search' focusBorderColor='grey' onChange={e=>setSearch(e.target.value)} value={search} _focusVisible={{borderColor:'#008D64'}} _focus={{
                    boxShadow:'none'}} color={'grey'}/>
            </InputGroup>
        </div>
    );
};

export default Search;