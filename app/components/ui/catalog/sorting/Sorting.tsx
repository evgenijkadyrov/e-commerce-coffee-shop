"use client";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { sortingData } from "@/ui/catalog/sorting/sorting.data";
import { EnumSorting } from "@/ui/catalog/sorting/enumSorting";
import React, { Dispatch, FC, SetStateAction } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export interface ISorting {
  sortType: EnumSorting;
  setSortType: Dispatch<SetStateAction<EnumSorting>>;
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {sortType}
      </MenuButton>
      <MenuList>
        {sortingData.map((item, key = item.value) => (
          <MenuItem
            onClick={() => {
              setSortType(item.value);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Sorting;