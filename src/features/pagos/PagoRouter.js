import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PagoList from "./pages/PagoList";

const PagoRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="list" replace />} />
         <Route path="list" element={<PagoList />} />
      </Routes>
   );
};

export default PagoRouter;
