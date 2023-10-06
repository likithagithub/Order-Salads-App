import { Fragment } from "react";
import mainheaderImage from "../../assets/HeaderBannerimg.jpg";
import classes from "./Header.module.css";
import HeaderCartbutton from "./HeaderCartButton";
const Header = (props) =>{
    return(
    <Fragment>
    <header className={classes.header}>
      <h1>Salad Hub App</h1>
      <HeaderCartbutton onClick={props.onShowCart} />    
        </header>
      <div className={classes["main-image"]}>
    <img src={mainheaderImage} alt="A table full of delicious food!" />
    
      </div>
      
    </Fragment>
    )
}

export default Header;