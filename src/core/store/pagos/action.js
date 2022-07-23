export const PAGO_ACTION = {
   CARGAR_DEUDA: "CARGAR_DEUDA",
   PAGAR_DEUDA: "PAGAR_DEUDA",
};

const cargarDeuda = (importe) => ({ type: PAGO_ACTION.CARGAR_DEUDA, importe });
const pagarDeuda = (importe) => ({ type: PAGO_ACTION.PAGAR_DEUDA, importe });

const PagoAction = {
   cargarDeuda,
   pagarDeuda,
};

export default PagoAction;
