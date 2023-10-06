import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <Fragment>
      <section>
        <h2>Your Order is placed!</h2>
        <p>Do visit us again. </p>
        <p>
          
          <b>THANKYOU🙏</b>
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderDelivered;
