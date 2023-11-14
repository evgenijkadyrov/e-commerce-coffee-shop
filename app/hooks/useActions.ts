import { cartSlice } from "@/app/store/sliceCart";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {productsSlice} from "@/app/store/sliceCatalog";

const rootActions = {
  ...cartSlice.actions,
  ...productsSlice.actions
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(rootActions, dispatch);
};