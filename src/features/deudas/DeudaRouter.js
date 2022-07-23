import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DeudaList from "./pages/DeudaList";

const deudaRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="list" replace />} />
         <Route path="list" element={<DeudaList />} />
      </Routes>
   );
};

export default deudaRouter;
