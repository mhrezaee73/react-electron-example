import { propOr, identity } from 'ramda';

// eslint-disable-next-line max-len
export default (initialState, actionHandlers) => (state = initialState, action) => propOr(identity, action.type, actionHandlers)(state, action);
