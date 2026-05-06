import React from "react";

function NewPlantForm({setPlantList}) {
  const BASE_URL = "http://localhost:6001"
  async function addPlants (e) {
    e.preventDefault()

    const name = e.target.elements.name.value 
    const image = e.target.elements.image.value
    const price = e.target.elements.price.value

    try{
      const response = await fetch(`${BASE_URL}/plants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, image, price }),
      })
      if(!response.ok) {
        throw new Error ("error adding plants")
      }
    const data = await response.json()
    setPlantList((prev)=> [...prev, data])
    e.target.reset()
    }catch (error) {
    console.error(error.message)
  }
  } 
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlants}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
