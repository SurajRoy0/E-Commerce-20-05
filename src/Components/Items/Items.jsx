import React, { useState } from "react";

import Item from "./Item";
import styles from "./Items.module.css";

const productsArr = [
  {
    id: "i1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "i2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "i3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "i4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: "i5",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
];

const Items = () => {
  const [products, setProducts] = useState(productsArr);
  return (
    <div className={styles.items}>
      {products.map((item) => (
        <div key={item.id} className={styles.item}>
          <Item
            id={item.id}
            title={item.title}
            image={item.imageUrl}
            price={item.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Items;
