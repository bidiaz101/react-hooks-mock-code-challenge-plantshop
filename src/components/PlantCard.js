import React, {useState} from "react";

function PlantCard({image, name, price}) {
  const [stocked, setStocked] = useState(true)

  function handleStockChange() {
    setStocked(!stocked)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
