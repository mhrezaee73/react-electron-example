import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Immutable from "seamless-immutable";

import createReducer from "../../../redux/createReducer";
import initialState from "./store";

const page2Reducer = persistReducer(
  { storage, key: "page2", whitelist: [""] },
  createReducer(initialState, {
    SET_TEST_PAGE_2: (state, { payload }) =>
      Immutable({
        ...state,
        test: payload,
      }),
  })
);

export default page2Reducer;
