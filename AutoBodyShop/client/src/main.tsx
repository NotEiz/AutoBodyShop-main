import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { UserProvider } from "./context/UserContext.tsx";

import "./index.scss";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
