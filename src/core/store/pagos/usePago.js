import { useSelector } from "react-redux";
import PagoSelector from "./selector";
const usePago = () => useSelector(PagoSelector);

export default usePago;
