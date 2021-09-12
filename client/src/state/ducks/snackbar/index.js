/* INDEX FILE
This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import snackbarReducer from "./reducers";

export { default as snackbarSelectors } from "./selectors";
export { default as snackbarOperations } from "./operations";
export { default as snackbarTypes } from "./types";
export { default as snackbarActions } from "./actions";

export default snackbarReducer;
