import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Immutable from "seamless-immutable";

import createReducer from "../../../redux/createReducer";
import initialState from "./store";

const page1Reducer = persistReducer(
  { storage, key: "page1", whitelist: [""] },
  createReducer(initialState, {
    SET_TEST_PAGE_1: (state, payload) =>
      Immutable({
        ...state,
        test: payload,
      }),
  })
);

export default page1Reducer;
