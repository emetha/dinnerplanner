/* INDEX FILE
This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import sidebarReducer from "./reducers";

export { default as sidebarSelectors } from "./selectors";
export { default as sidebarOperations } from "./operations";
export { default as sidebarTypes } from "./types";
export { default as sidebarActions } from "./actions";

export default sidebarReducer;
