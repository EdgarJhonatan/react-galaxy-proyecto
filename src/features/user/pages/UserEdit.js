import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import UserHtpp from "../http/userHttp";

const UserEdit = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [initialValues, setInitialValues] = useState({
      name: "",
      email: "",
      active: false,
   });

   const { values, getFieldProps, handleSubmit } = useFormik({
      initialValues,
      onSubmit: (values) => {
         UserHtpp.update(id, values).then(() => {
            navigate("../");
         });
      },
      enableReinitialize: true,
   });

   useEffect(() => {
      UserHtpp.getOne(id).then((res) => {
         setInitialValues(res);
      });
   }, [id]);

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Nombre" {...getFieldProps("name")} />
         <br />
         <input type="text" placeholder="Email" {...getFieldProps("email")} />
         <br />
         <label>
            <input type="checkbox" {...getFieldProps("active")} checked={values.active} />
            Activo
         </label>
         <br />
         <br />
         <button type="submit">Guardar</button>
      </form>
   );
};

export default UserEdit;
