import { cartSlice } from "@/app/store/slice";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const rootActions = {
  ...cartSlice.actions,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(rootActions, dispatch);
};