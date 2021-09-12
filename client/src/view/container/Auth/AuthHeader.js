import { isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { sidebarSelectors } from "../../../state/ducks/sidebar";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

const AuthHeader = () => {
  const state = useSelector((state) => state);
  const auth = sidebarSelectors.getAuth(state);

  return isEmpty(auth) ? <LogIn /> : <LogOut />;
};

export default AuthHeader;
