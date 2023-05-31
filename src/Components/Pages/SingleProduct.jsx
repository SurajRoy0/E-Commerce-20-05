import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useContext,
} from "react";
import axios from "axios";
import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../../Store/cart-context";

const minAmount = 1;
const stateReducer = (state, action) => {
  if (action.type === "INCREASE") {
    return state + 1;
  }

  if (action.type === "DECREASE") {
    if (state === 1) {
      return 1;
    }
    return state - 1;
  }

  return minAmount;
};

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [amount, dispatchAmount] = useReducer(stateReducer, minAmount);
  const [changeImage, setChangeImage] = useState(false);
  const { productId } = useParams();
  const { inImage, outImage, cardDetails, price, gender, category, quantity } =
    product;

  const { addItem } = useContext(CartContext);

  const onIncreaseAmount = () => {
    dispatchAmount({ type: "INCREASE" });
  };

  const onDecreaseAmount = () => {
    dispatchAmount({ type: "DECREASE" });
  };

  const singleProductFetchHandler = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://server-2ezz.onrender.com/Male/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    singleProductFetchHandler();
  }, [singleProductFetchHandler]);
  const changeImageHandler = () => {
    setChangeImage(!changeImage);
  };

  const addToCartHandler = () => {
    addItem({
      id: productId,
      title: cardDetails,
      amount: amount,
      price: price,
      image: outImage,
    });
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        <img
          onClick={changeImageHandler}
          src={changeImage ? outImage : inImage}
          alt="Inner View"
          className={styles.inImage}
        />
        <img
          src={changeImage ? inImage : outImage}
          alt="Outer View"
          className={styles.outImage}
        />
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.cardDetails}>{cardDetails}</h2>
        <div className={styles.price}>{`$${price}`}</div>
        <div className={styles.productInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Gender:</span>
            <span className={styles.infoValue}>{gender}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Category:</span>
            <span className={styles.infoValue}>{category}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Quantity:</span>
            <span className={styles.infoValue}>{quantity}</span>
          </div>
        </div>
        <div className={styles["add-to-cart__amount"]}>
          <button onClick={onDecreaseAmount}>-</button>
          <span>{amount}</span>
          <button onClick={onIncreaseAmount}>+</button>
        </div>
        <button onClick={addToCartHandler} className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
