import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, setPlantData, search}) {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlantData(data))
  }, [])

  const plantsToDisplay = plantData.filter(plantObj => {
    if(search === ""){
      return true
    } else {
      return plantObj.name.toLowerCase().includes(search.toLowerCase())
    }
  }).map(plantObj => {
    return (
      <PlantCard 
        image={plantObj.image} 
        name={plantObj.name} 
        price={plantObj.price}
        key={plantObj.id}
      />
    )
  })

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
