import {EnumSorting} from "@/ui/catalog/sorting/enumSorting";


export interface ISortingData {
    label: 'Newest'| 'Oldest'| 'Price from low to high'| 'Price from high to low',
    value: EnumSorting
}