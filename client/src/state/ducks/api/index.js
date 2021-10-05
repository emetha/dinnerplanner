/* INDEX FILE
This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import apiReducer from "./reducers";

export { default as apiSelectors } from "./selectors";
export { default as apiOperations } from "./operations";
export { default as apiTypes } from "./types";
export { default as apiActions } from "./actions";

export default apiReducer;
