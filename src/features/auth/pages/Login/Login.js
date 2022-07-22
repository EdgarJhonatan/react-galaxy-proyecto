import { Field, Formik, ErrorMessage, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import style from "./Login.module.scss";

const initialValues = {
   email: "jdm@gmail.com",
   password: "1234567889",
};

const Login = () => {
   const navigate = useNavigate();

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={Yup.object().shape({
            email: Yup.string()
               .email("Ingrese un correo valido")
               .required("Este campo es obligatorio"),
            password: Yup.string()
               .min(6, "Mínimo 6 caracteres")
               .required("Este campo es obligatio"),
         })}
         onSubmit={(formValues) => {
            console.log("llamada a enpoint", formValues);
            navigate("/home");
         }}>
         {() => (
            <Form autoComplete="off" className={style.container}>
               <Field type="text" placeholder="Email" name="email" />
               <ErrorMessage name="email" className={style.error} />
               <Field type="password" placeholder="Password" name="password" />
               <ErrorMessage name="password" />
               <button type="submit">Ingresar</button>
            </Form>
         )}
      </Formik>
   );
};

export default Login;
