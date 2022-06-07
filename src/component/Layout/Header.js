import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import furnitureBg from "../../assets/images/furniture-bg.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Furniture Project</h1>
        <div className={classes.right}>
          <HeaderCartButton onClick={props.onShowCart} />
          <div
            className={classes["favorite-btn"]}
            onClick={props.onShowFavoriteList}
          >
            Favorite List
          </div>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={furnitureBg} alt="a table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
