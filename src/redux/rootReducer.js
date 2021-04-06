import { combineReducers } from "redux";

import commonReducer from "../pages/Common/redux/reducer";
import page1Reducer from "../pages/Page1/redux/reducer";
import page2Reducer from "../pages/Page2/redux/reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  page1: page1Reducer,
  page2: page2Reducer,
});

export default rootReducer;
