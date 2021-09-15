import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [search, setSearch] = useState("")

  function onFormSubmit(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(data => {
      setPlantData([...plantData, data])
    })
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search setSearch={setSearch}/>
      <PlantList 
        plantData={plantData} 
        setPlantData={setPlantData} 
        search={search} 
      />
    </main>
  );
}

export default PlantPage;
