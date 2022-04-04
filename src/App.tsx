import React, { FC } from "react";

import { Provider } from "react-redux";
import store from "store/store";

import LoadingModal from "components/LoadingModal/LoadingModal";

import { AppRouter } from "components/AppRouter/AppRouter";
import { Feedback } from "./components/Feedback/Feedback";
import ErrorBoundary from "./components/ErrorBoundary";

import "antd/dist/antd.css";

const App: FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <AppRouter />

      <Feedback />

      <LoadingModal />
    </Provider>
  </ErrorBoundary>
);

export default App;
