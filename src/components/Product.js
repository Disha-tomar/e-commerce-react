import classes from "./Product.module.scss";

function Product(props) {
  return (
    <>
      <div className={classes["product_card"]}>
        <div className={classes["price_wrapper"]}>
          <h4>{props.title}</h4>
          <div>
            <span>Price</span>
            <span>$ </span>
            <span>{props.price}</span>
          </div>
        </div>
        <div className={classes["image_wrapper"]}>
          <img src={props.image}></img>
        </div>
        <div className={classes["btn_wrapper"]}>
          <button>Buy Now</button>
          <button>Wishlist</button>
        </div>
      </div>
    </>
  );
}

export default Product;
