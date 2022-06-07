import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favoriteActions } from "../../../store/favorite-slice";
import Card from "../../UI/Card";
import classes from "./productItem.module.css";
import { FaHeart } from "react-icons/fa";
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorite.items);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount,
      })
    );
  };

  const addTofavoriteHandler = () => {
    dispatch(
      favoriteActions.addToFavoriteList({
        id: props.id,
        name: props.name,
        price: props.price,
        imgSrc: props.img,
      })
    );
  };

  const removeFromFavoriteHandler = (id) => {
    dispatch(favoriteActions.removeFromFavoriteList(id));
  };

  return (
    <Card>
      <li className={classes.product}>
        <div className={classes.image}>
          <img src={props.img} alt="product" />
        </div>
        <div className={classes.bottom}>
          <div className={classes.details}>
            <div className={classes.title}>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.description}</div>
            </div>
            <div className={classes.price}>{price}</div>
          </div>

          <div>
            <ProductItemForm onAddToCart={addToCartHandler} />
          </div>
          <div className={classes["favorite-btn_container"]}>
            {items.some((item) => item.id === props.id) ? (
              <span
                className={classes["favorite-btn"]}
                onClick={removeFromFavoriteHandler.bind(null, props.id)}
              >
                <FaHeart fill="red" size={26} />
              </span>
            ) : (
              <span
                className={classes["favorite-btn"]}
                onClick={addTofavoriteHandler}
              >
                <FaHeart fill="#fff" size={26} />
              </span>
            )}
          </div>
        </div>
      </li>
    </Card>
  );
};

export default ProductItem;
