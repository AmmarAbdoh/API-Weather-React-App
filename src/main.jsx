import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import weatherReducer from "./Reducers/weatherReducer.jsx";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const store = configureStore({
  reducer: weatherReducer,
  middleware: [thunk],
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
