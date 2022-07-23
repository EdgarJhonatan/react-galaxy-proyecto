import { PAGO_ACTION } from "./action";

const initialState = {
   importe: 500,
};

const pagoReducer = (state = initialState, action) => {
   switch (action.type) {
      case PAGO_ACTION.CARGAR_DEUDA:
         return {
            ...state,
            importe: state.importe + action.importe.value,
         };
      case PAGO_ACTION.PAGAR_DEUDA:
         return {
            ...state,
            importe: state.importe - action.importe.value,
         };

      default:
         return {
            ...state,
         };
   }
};

export default pagoReducer;
