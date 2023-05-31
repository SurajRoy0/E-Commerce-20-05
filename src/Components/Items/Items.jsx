import React, { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./Items.module.css";
import LayoutToggleButton from "../UI/LayoutToggleButton ";

const Items = (props) => {
  const [isGrid, setIsGrid] = useState();
  const layoutHandler = (toggle) => {
    setIsGrid(toggle);
  };
  const layout = isGrid ? styles.itemsList : styles.itemsGrid;

  return (
    <>
      <div className={styles.itemContainer}>
        <h1>{props.title}</h1>
        <LayoutToggleButton layoutHandler={layoutHandler} />
      </div>
      <div className={layout}>
        {props.products.map((item) => (
          <Item
            key={item.id}
            isGrid={isGrid}
            id={item.id}
            details={item.cardDetails}
            image={item.outImage}
            gender={item.gender}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Items;
