import { useState } from "react";
import Cart from "./component/Cart/Cart";
import FavoriteList from "./component/favorite/FavoriteList";
import Header from "./component/Layout/Header";
import Products from "./component/products/Products";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [favoriteListIsShown, setFavoriteListIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const ShowFavoriteListHandler = () => {
    setFavoriteListIsShown(true);
  };

  const hideFavoriteListHandler = () => {
    setFavoriteListIsShown(false)
  }

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      {favoriteListIsShown && <FavoriteList onHideFavoriteList={hideFavoriteListHandler} />}
      <Header
        onShowCart={showCartHandler}
        onShowFavoriteList={ShowFavoriteListHandler}
      />
      <main>
        <Products />
      </main>
    </>
  );
}

export default App;
