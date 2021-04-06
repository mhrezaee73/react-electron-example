

import React from "react";
import Routes from "./router/Routes";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const App = ({ store, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;