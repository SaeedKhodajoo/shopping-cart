import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";
import Modal from "../UI/Modal";
import FavoriteItem from "./FavoriteItem";
import classes from "./favoriteList.module.css";

const FavoriteList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorite.items);

  const favoriteItemRemoveHandler = (id) => {
    dispatch(favoriteActions.removeFromFavoriteList(id));
  };

  const clearFavoriteList = () => {
    dispatch(favoriteActions.clearFavoriteList());
  };

  const cartItems = (
    <ul className={classes["favorite-items"]}>
      {items.map((item) => (
        <FavoriteItem
          key={item.id}
          name={item.name}
          price={item.price}
          imgSrc={item.imgSrc}
          onRemove={favoriteItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <Fragment>
      {items.length > 0 ? (
        cartItems
      ) : (
        <>
          <p>Favorite list is empty.</p> <hr />
        </>
      )}
      <div className={classes["clear-btn_container"]}>
        <button
          disabled={items.length === 0}
          className={classes["clear-btn"]}
          onClick={clearFavoriteList}
        >
          Remove All
        </button>
      </div>
    </Fragment>
  );

  return <Modal onClick={props.onHideFavoriteList}>{cartModalContent}</Modal>;
};

export default FavoriteList;
