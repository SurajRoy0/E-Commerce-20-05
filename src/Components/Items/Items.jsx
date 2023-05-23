import React, { useState } from "react";

import Item from "./Item";
import styles from "./Items.module.css";
import LayoutToggleButton from "../UI/LayoutToggleButton ";

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

const Items = (props) => {
  const [products, setProducts] = useState(productsArr);
  const [isGrid, setIsGrid] = useState();
  const layoutHandler = (toggle) => {
    setIsGrid(toggle);
  };
  const layout = isGrid ? styles.itemsList : styles.itemsGrid;
  console.log(layout);
  return (
    <>
      <div className={styles.itemContainer}>
        <h1>{props.title}</h1>
        <LayoutToggleButton layoutHandler={layoutHandler} />
      </div>
      <div className={layout}>
        {products.map((item) => (
          <div key={item.id} className={styles.item}>
            <Item
              isGrid={isGrid}
              id={item.id}
              title={item.title}
              image={item.imageUrl}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
