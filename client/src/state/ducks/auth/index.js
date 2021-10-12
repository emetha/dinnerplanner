/* INDEX FILE
This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import authReducer from "./reducers";

export { default as authSelectors } from "./selectors";
export { default as authOperations } from "./operations";
export { default as authTypes } from "./types";
export { default as authActions } from "./actions";

export default authReducer;
