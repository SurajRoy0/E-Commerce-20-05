import React, { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";

const LayoutToggleButton = (props) => {
  const [isGrid, setIsGrid] = useState(true);

  const handleToggle = () => {
    setIsGrid(!isGrid);
    props.layoutHandler(isGrid);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isGrid ? <FaTh /> : <FaList />}</button>
    </div>
  );
};

export default LayoutToggleButton;
