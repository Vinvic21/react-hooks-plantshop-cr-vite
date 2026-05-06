import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const BASE_URL = "http://localhost:6001"
  const [newPlant, setNewPlant] = useState("");
  const [plantList, setPlantList] = useState([]);

useEffect(() => {
  async function fetchPlants() {
    try {
      const response = await fetch (`${BASE_URL}/plants`)

      if (!response.ok){
        throw new Error("Error fetching plants")
      }
      const data = await response.json()
      setPlantList(data)
    } catch (error) {
      console.error("error", error.message)
    }
  }
  fetchPlants()
}, [])
  return (
    <div className="app">
      <Header />
      <PlantPage  plantList = {plantList} setNewPlant = {setNewPlant} newPlant ={newPlant} setPlantList={setPlantList}/>
    </div>
  );
}

export default App;
