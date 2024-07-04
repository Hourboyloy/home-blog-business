import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StockMarker from "./pages/StockMarker";
import Technologys from "./pages/Technologys";
import Politics from "./pages/Politics";
import Automobiles from "./pages/Automobiles";
import Health from "./pages/Health";
import InteractiveSessions from "./pages/InteractiveSessions";
import Details1 from "./pages/Details1";
import Details2 from "./pages/Details2";
import Details3 from "./pages/Details3";
import Details4 from "./pages/Details4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>

          <Route path="/stock-marker" element={<StockMarker />} />
          <Route path="/technology" element={<Technologys />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/automobiles" element={<Automobiles />} />
          <Route path="/health" element={<Health />} />
          <Route
            path="/interactive-sessions"
            element={<InteractiveSessions />}
          />

          <Route
            path="/want-a-career-in-technology-make-this-your-secret-weapon"
            element={<Details1 />}
          />
          <Route
            path="/the-health-industry-is-changing-fast-heres-how-to-keep-pace"
            element={<Details2 />}
          />
          <Route
            path="/everything-you-ever-wanted-to-know-about-technology"
            element={<Details3 />}
          />
          <Route
            path="/15-shocking-elon-musk-tweets-about-stock-market"
            element={<Details4 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
