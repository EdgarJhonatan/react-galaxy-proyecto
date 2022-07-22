import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserCreat from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

const UserRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="list" replace />} />
         <Route path="/create" element={<UserCreat />} />
         <Route path="/edit/:id" element={<UserEdit />} />
         <Route path="/list" element={<UserList />} />
      </Routes>
   );
};

export default UserRouter;
