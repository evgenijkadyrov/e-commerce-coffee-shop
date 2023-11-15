"use client";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import ButtonResetSearch from "@/components/buttonResetSearch/ButtonResetSearch";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { useActions } from "@/app/hooks/useActions";
import React, { FC, useState } from "react";

const Search: FC = () => {
  const [search, setSearch] = useState("");
  const { searchProducts } = useActions();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      searchProducts(search);
    }
  };

  return (
    <div className={"flex justify-center items-center w-2/6"}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          variant={"flushed"}
          placeholder="Search"
          focusBorderColor="grey"
          onChange={(e) => setSearch(e.target.value)}
          on
          value={search}
          _focusVisible={{ borderColor: "#008D64" }}
          _focus={{
            boxShadow: "none",
          }}
          color={"grey"}
          onKeyDown={(event) => handleSearch(event)}
        />
        <InputRightElement>
          <ButtonResetSearch setSearch={setSearch}>
            <CloseIcon color="gray.300" />
          </ButtonResetSearch>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default Search;