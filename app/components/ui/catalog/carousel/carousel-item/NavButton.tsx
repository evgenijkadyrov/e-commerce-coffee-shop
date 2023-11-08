import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

export interface INavButton {
  handleItemNavigation: (direction) => void;
  direction: "next" | "prev";
}
const NavButton:FC<INavButton> = ({handleItemNavigation,direction, children}) => {
    return (
        <Button bg={'inherit'} fontSize={35}
            onClick={(event) => {
                event.stopPropagation();
                handleItemNavigation(direction);
            }}
        >
            {children}
        </Button>
    );
};

export default NavButton;