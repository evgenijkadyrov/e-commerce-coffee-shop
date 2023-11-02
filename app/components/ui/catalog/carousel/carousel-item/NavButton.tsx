import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

export interface INavButton {
  handleItemNavigation: (nav) => void;
  nav: "next" | "prev";
}
const NavButton:FC<INavButton> = ({handleItemNavigation,nav, children}) => {
    return (
        <Button
            onClick={(event) => {
                event.stopPropagation();
                handleItemNavigation(nav);
            }}
        >
            {children}
        </Button>
    );
};

export default NavButton;