/* INDEX FILE
This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import dishesReducer from "./reducers";

export { default as dishesSelectors } from "./selectors";
export { default as dishesOperations } from "./operations";
export { default as dishesTypes } from "./types";
export { default as dishesActions } from "./actions";

export default dishesReducer;
