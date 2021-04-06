import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Immutable from "seamless-immutable";

import createReducer from "../../../redux/createReducer";
import initialState from "./store";

const commonReducer = persistReducer(
  { storage, key: "common", whitelist: [] },
  createReducer(initialState, {
    SET_SAMPLE: (state, payload) =>
      Immutable({
        ...state,
        sample: payload,
      }),
  })
);

export default commonReducer;
