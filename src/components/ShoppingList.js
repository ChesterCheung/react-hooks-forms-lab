import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchBar] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
console.log(name)
console.log(category)
  function onSearchChange(event){
    setSearchBar(event.target.value)
  }

  function onAddProduceChange(event){
    setName(event.target.value)
  }
  
  function onCategoryChange(event){
    setCategory(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("test")

    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    return onItemFormSubmit(newItem)
  }




  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

  }).filter((item)=> item.name.includes(search));


  return (
    <div className="ShoppingList">
      <ItemForm name={name} onAddProduceChange={onAddProduceChange} onCategoryChange={onCategoryChange} category={category} onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      <ul>

      </ul>
    </div>
  );
}

export default ShoppingList;
