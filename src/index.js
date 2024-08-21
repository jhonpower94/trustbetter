import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { allreducer } from "./redux/reducer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: allreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
store.subscribe(() => console.log(store.getState()));

const container = document.getElementById("root");

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
