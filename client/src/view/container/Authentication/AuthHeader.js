import { VisibleOnlyAdmin, VisibleForAuthenticatedUser } from "../../../auth";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

const AuthVisibleForAdmin = VisibleForAuthenticatedUser(
  // VisibleOnlyAdmin(LogOut, LogIn),
  LogOut,
  LogIn
);

const AuthHeader = () => {
  return <AuthVisibleForAdmin />;
};

export default AuthHeader;
