import classes from "./products.module.css";
import table1 from "../../assets/images/table1.jpeg";
import table2 from "../../assets/images/table2.jpeg";
import sofa1 from "../../assets/images/sofa1.jpeg";
import sofa2 from "../../assets/images/sofa2.jpeg";
import chair1 from "../../assets/images/chair1.jpeg";
import chair2 from "../../assets/images/chair2.jpeg";
import chair3 from "../../assets/images/chair3.jpeg";
import bed1 from "../../assets/images/bed1.jpeg";
import bed2 from "../../assets/images/bed2.jpeg";
import ProductItem from "./productItem/ProductItem";


const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Supreme Table",
    description: "Metallic and glass table",
    price: 22.99,
    img: table1,
  },
  {
    id: "p2",
    name: "Wooden Table",
    description: "Wooden Table. Best Quality",
    price: 16.5,
    img: table2,
  },
  {
    id: "p3",
    name: "EL Sofa",
    description: "Made by best Leather",
    price: 22.99,
    img: sofa1,
  },
  {
    id: "p4",
    name: "Cousy Sofa",
    description: "Best choice for your apartmant!",
    price: 16.5,
    img: sofa2,
  },
  {
    id: "p5",
    name: "Wooden Chair",
    description: "For your balcony",
    price: 22.99,
    img: chair1,
  },
  {
    id: "p6",
    name: "Nice Chair",
    description: "A Minimalist Chair!",
    price: 16.5,
    img: chair2,
  },
  {
    id: "p7",
    name: "Summer Chair",
    description: "Colorfull chair. Very stylish",
    price: 22.99,
    img: chair3,
  },
  {
    id: "p8",
    name: "Comfy Bed",
    description: "A place to have a good dream!",
    price: 16.5,
    img: bed1,
  },
  {
    id: "p9",
    name: "Royal Bed",
    description: "Expensive but worth it!",
    price: 22.99,
    img: bed2,
  },
];

const Products = () => {

  const productsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      img={product.img}
    />
  ));

  return (
    <section className={classes.products}>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
