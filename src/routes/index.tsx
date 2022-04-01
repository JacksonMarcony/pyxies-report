import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import CreateReport from "../pages/Report/Create";

const Home = React.lazy(() => import("../pages/Home"));

export default function Router() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report/create" element={<CreateReport />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
