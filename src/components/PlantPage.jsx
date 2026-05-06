import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList,setNewPlant, newPlant, setPlantList}) {
  const[searchPlant, setSearchPlant] = useState("")

  const filteredPlants = plantList.filter((plant) => 
  plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  )
  return (
    <main>
      <NewPlantForm setPlantList={setPlantList} newPlant={newPlant} setNewPlant={setNewPlant}/>
      <Search searchPlant = {searchPlant} setSearchPlant = {setSearchPlant}/>
      <PlantList plantList = {filteredPlants} />
    </main>
  );
}

export default PlantPage;
