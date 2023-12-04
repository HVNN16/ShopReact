// MenuItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColDesign from './ColDesign';

const MenuItems = () => {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setDataFromServer(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 sm:grid-rows-2 rounded-lg p-2 gap-y-16 place-items-center'>
      {dataFromServer.map((item, i) => (
        <ColDesign key={i} name={item.name} des={item.des} price={item.price} image={item.image} />
      ))}
      {dataFromServer.length === 0 && (
        <div className='col-span-4 pt-12 animate-pulse'>
          <h1 className='font-bold text-center text-2xl text-yellow-600'>
            Currently, No items are available in this category!
          </h1>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
