import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import {
  connectedRouterRedirect,
  connectedReduxRedirect,
} from "redux-auth-wrapper/history4/redirect";
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper";
import StatusLoader from "./view/component/Status/StatusLoader";
import { createBrowserHistory } from "history";
import { snackbarOperations } from "./state/ducks/snackbar";
import constants from "./constants/SnackbarConstants";

const locationHelper = locationHelperBuilder({});
const browserHistory = createBrowserHistory();

export const UserIsAdmin = connectedReduxRedirect({
  wrapperDisplayName: "UserIsAdmin",
  AuthenticatingComponent: StatusLoader,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/unauthorized",
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || !profile.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { profile, auth } }) =>
    profile.role === "admin",
  redirectAction: (newLoc) => (dispatch) => {
    browserHistory.replace(newLoc);
    dispatch(
      snackbarOperations.requestSnack({
        message: "Sorry, you are not authorized to access this app.",
        severity: constants.ERROR_SNACKBAR_TYPE,
      })
    );
  },
});

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  AuthenticatingComponent: StatusLoader,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/signin",
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
});

export const VisibleOnlyAdmin = (Component, FailureComponent) =>
  connectedAuthWrapper({
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
      !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { profile } }) =>
      profile.role === "admin",
    wrapperDisplayName: "VisibleOnlyAdmin",
    FailureComponent,
  })(Component);

export const VisibleForLoadedAuthentication = (Component, FailureComponent) =>
  connectedAuthWrapper({
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
      !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) => auth.isLoaded,
    wrapperDisplayName: "VisibleForLoadedAuthentication",
    FailureComponent,
  })(Component);

export const VisibleForAuthenticatedUser = (Component, FailureComponent) =>
  connectedAuthWrapper({
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
      !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
      auth.isLoaded && !auth.isEmpty,
    wrapperDisplayName: "VisibleForAuthenticatedUser",
    FailureComponent,
  })(Component);
