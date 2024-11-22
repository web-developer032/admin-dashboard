import { useSelector } from "react-redux";

function useReduxState(stateKey) {
  return useSelector((state) => state[stateKey]);
}

export default useReduxState;
