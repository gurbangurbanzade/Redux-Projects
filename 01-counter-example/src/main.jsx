import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { reducerCount } from "./components/02-counter/redux/reducers";
const store = createStore(reducerCount);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
