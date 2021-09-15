import React, {useState} from "react";

function NewPlantForm({onFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleSubmit(e) {
    e.preventDefault()
    onFormSubmit(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value
            })
          }}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={(e) => {
            setFormData({
              ...formData,
              image: e.target.value
            })
          }}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={(e) => {
            setFormData({
              ...formData,
              price: e.target.value
            })
          }}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
