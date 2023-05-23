import React, { useState } from "react";

import Item from "./Ticket";
import styles from "./AvailableShows.module.css";
import LayoutToggleButton from "../UI/LayoutToggleButton ";

const concertSchedule = [
  {
    id: 1,
    date: "JUL16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 2,
    date: "JUL19",
    location: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    date: "JUL22",
    location: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 4,
    date: "JUL29",
    location: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 5,
    date: "AUG2",
    location: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 6,
    date: "AUG7",
    location: "CONCORD, CA",
    venue: "CONCORD PAVILION",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
];

const Items = (props) => {
  const [conserts, setConcerts] = useState(concertSchedule);
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
        {conserts.map((concert) => (
          <div key={concert.id} className={styles.item}>
            <Item
              isGrid={isGrid}
              id={concert.id}
              date={concert.date}
              location={concert.location}
              image={concert.imageUrl}
              venue={concert.venue}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
