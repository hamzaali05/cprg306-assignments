"use client"

import React, { useState } from 'react';

const NewItem = () => {
  const [quantity, setQuantity] = useState(1); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { quantity };
    console.log(item);
    alert(`Item: Quantity: ${quantity}`);
    setQuantity(1);
    };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-5 rounded shadow bg-slate-950">
      <div className="mb-4">
        
      </div>

      <div className="mb-4">
        <label className="block text-slate-50 text-sm font-bold mb-2">Quantity</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1" 
          max="99" 
          required 
        />
      </div>

      

      <button type="submit" className="bg-violet-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Confirm
      </button>
    </form>
  );
};

export default NewItem;