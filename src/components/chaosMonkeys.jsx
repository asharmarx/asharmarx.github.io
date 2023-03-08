import Cinput from "./cityInput";
import Whether from "./whether";
import { CityProvider } from "../hookudh/useCity";

const ChaosMonkeys = () => (
    <CityProvider>
        <Cinput />
        <Whether />
    </CityProvider>
);
export default ChaosMonkeys;