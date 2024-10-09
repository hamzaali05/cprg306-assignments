"use client"

import { useState } from 'react';

export default function NewItem () {
  const [quantity, setQuantity] = useState(1)
  const increment = () => setQuantity(prev => Math.min(prev + 1, 20));
  const decrement = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <main className='flex flex-col items-center'>
      <div className='flex items-center bg-black space-x-10 p-2 rounded-md'>
        <p className='text xl text-white'>{quantity}</p>
          <button
          onClick={increment}
          disabled={quantity === 20}
          className={`font-bold py-2 px-4 rounded ${quantity === 20 ? 'bg-gray-600' : 'bg-blue-400 hover:bg-blue-900'}`}>+
          </button>
          <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`font-bold py-2 px-4 rounded ${quantity === 1 ? 'bg-gray-600' : 'bg-blue-400 hover:bg-blue-900'}`}>-
          </button>
      </div>
    </main>
  )
}
