import classes from "./favoriteItem.module.css";

const FavoriteItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["favorite-item"]}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src={props.imgSrc} alt="" />
        </div>
        <div className={classes.details}>
          <h2 className={classes.name}>{props.name}</h2>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>X</button>
      </div>
    </li>
  );
};

export default FavoriteItem;
