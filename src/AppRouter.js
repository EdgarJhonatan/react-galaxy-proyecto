import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./core/Layout/Layout";
import HomePage from "./core/pages/home/HomePage";

const Auth = lazy(() => import("./features/auth/AuthRouter"));
const User = lazy(() => import("./features/user/UserRouter"));

const AppRouter = () => {
   return (
      <Suspense fallback={<p>Cargando ...</p>}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Navigate to="/auth/login" replace />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="/user/*" element={<User />}></Route>
               </Route>

               <Route path="/auth/*" element={<Auth />}></Route>
               <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
         </BrowserRouter>
      </Suspense>
   );
};

export default AppRouter;
