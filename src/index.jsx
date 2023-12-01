import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/main.scss";
import HomeLayout from "./pages/Home/HomeLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HomeLayout />
  </BrowserRouter>
);