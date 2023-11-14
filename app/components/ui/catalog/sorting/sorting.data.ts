import { ISortingData } from "@/ui/catalog/sorting/sorting.interface";
import { EnumSorting } from "@/ui/catalog/sorting/enumSorting";

export const sortingData: ISortingData[] = [
  {
    label: "Newest",
    value: EnumSorting.NEWEST,
  },
  {
    label: "Oldest",
    value: EnumSorting.OLDEST,
  },
  {
    label: "Price from high to low",
    value: EnumSorting.DOWN_PRICE,
  },
  {
    label: "Price from low to high",
    value: EnumSorting.UP_PRICE,
  },
];