import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const AuthRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="login" replace />} />
         <Route path="/login" element={<Login />} />
      </Routes>
   );
};

export default AuthRouter;
