import React, { useState } from "react";

import Item from "./Item";
import styles from "./Items.module.css";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
];

const Items = () => {
  const [products, setProducts] = useState(productsArr);
  return (
    <div className={styles.itemsContainer}>
      <h1>New Products</h1>
      <div className={styles.items}>
        {products.map((item) => (
          <div className={styles.item}>
            <Item
              key={item.id}
              title={item.title}
              image={item.imageUrl}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
