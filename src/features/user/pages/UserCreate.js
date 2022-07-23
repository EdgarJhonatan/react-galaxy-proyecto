import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import UserHtpp from "../http/userHttp";

const UserCreate = () => {
   const navigate = useNavigate();

   const { getFieldProps, handleSubmit } = useFormik({
      initialValues: {
         name: "",
         email: "",
         active: false,
      },
      onSubmit: (values) => {
         UserHtpp.create(values).then(() => {
            navigate("../");
         });
      },
   });

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Nombre" {...getFieldProps("name")} />
         <input type="text" placeholder="email" {...getFieldProps("email")} />
         <label htmlFor="">
            <input type="checkbox" {...getFieldProps("active")} />
            Activo
         </label>
         <button type="submit">Guardar</button>
      </form>
   );
};

export default UserCreate;
