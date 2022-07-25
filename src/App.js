import React from "react";
import { Routes, Route } from "react-router";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}
