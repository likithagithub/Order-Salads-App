import SaladSummary from "./SaladSummary";
import AvailableSalads from "./AvailableSalads";
import { Fragment } from "react";
const Meals = () => {
return(
<Fragment>
    <SaladSummary />
    <AvailableSalads />
</Fragment>
);
};
export default Meals;