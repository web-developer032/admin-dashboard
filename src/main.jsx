import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import reduxStore from "./redux/redux.js";

import "./css/style.css";
import "./css/utils.css";
import "./css/satoshi.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import { getUserDefinedTheme, setDefaultColorTheme } from "./lib/utils.js";
import { Toaster } from "react-hot-toast";

setDefaultColorTheme(getUserDefinedTheme());

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={reduxStore}>
    <Router>
      <Toaster />
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
);
