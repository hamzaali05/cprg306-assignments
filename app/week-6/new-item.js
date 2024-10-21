"use client"

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg ml-10 p-5 rounded shadow">
      <div className="mb-4">
        <label className="block text-stone-950 text-sm font-bold mb-2">Item Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required 
        />
      </div>

      <div className="mb-4">
        <label className="block text-stone-950 text-sm font-bold mb-2">Quantity</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-950 leading-tight focus:outline-none focus:shadow-outline"
          min="1" 
          max="20" 
          required/>
      </div>

      <div className="mb-4">
        <label className="block text-stone-950 text-sm font-bold mb-2">Category</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-red-950 leading-tight focus:outline-none focus:shadow-outline">
        </select>
      </div>

      <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Item</button>
    </form>
  );
};

export default NewItem;