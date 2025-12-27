import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";

const useRedux = <T>(selector: (state: RootState) => T) => {
  const state = useSelector(selector);
  const dispatch: AppDispatch = useDispatch();

  return { state, dispatch };
};

export default useRedux;
