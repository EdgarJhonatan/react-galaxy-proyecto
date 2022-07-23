import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import PagoAction from "../../../core/store/pagos/action";
import usePago from "../../../core/store/pagos/usePago";

const PagoList = () => {
   const { importe } = usePago();
   const dispatch = useDispatch();

   const { getFieldProps, handleSubmit } = useFormik({
      initialValues: {
         importe: 0,
      },
      onSubmit: (values) => {
         const tieneImporte = values.importe > 0;
         // eslint-disable-next-line no-restricted-globals
         if (!tieneImporte) return confirm("Ingrese monto a procesar.");
         console.log("values", values);
      },
   });

   return (
      <form onSubmit={handleSubmit}>
         <label>Deuda Actual: {importe}</label>
         <br />
         <input type="number" placeholder="Ingrese monto" {...getFieldProps("importe")} />
         <br />
         <button
            type="submit"
            onClick={() => {
               dispatch(PagoAction.cargarDeuda({ ...getFieldProps("importe") }));
            }}>
            Cargar Deuda
         </button>
         <button
            type="submit"
            onClick={() => {
               dispatch(PagoAction.pagarDeuda({ ...getFieldProps("importe") }));
            }}>
            Pagar Deuda
         </button>
      </form>
   );
};

export default PagoList;
