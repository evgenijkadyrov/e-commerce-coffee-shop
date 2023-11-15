import { useActions } from "@/app/hooks/useActions";
import React, { FC } from "react";

interface IButtonResetSearch {
  setSearch?: (string) => void;
}

const ButtonResetSearch: FC<IButtonResetSearch> = ({ setSearch, children }) => {
  const { resetCatalog } = useActions();
  const handleClick = () => {
    resetCatalog();
    if (setSearch) setSearch("");
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default ButtonResetSearch;