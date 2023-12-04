
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColDesign from './ColDesign';

const MenuItems = () => {
  const [dataFeaturedFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/featured');
        setDataFromServer(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className='flex items-center flex-col justify-center space-y-5 '>
          <h1 className='font-semibold font-[font-serif] text-5xl'>Our <span className='text-[#FF6600]'>Best Seller</span></h1>
          <p className='w-[35ch] text-gray-600/70 px-3 sm:w-7/12 justify-center text-center'>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, earum. adipisicing elit. Error, similique.</p>
          <hr className='sm:w-14 w-40  border-[#FF6600] border-2 ' />
    </div>
    <br></br>
    <br></br>
    <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 sm:grid-rows-2 rounded-lg p-2 gap-y-16 place-items-center'>
      
      {dataFeaturedFromServer.map((item, i) => (
        <ColDesign key={i} name={item.name} des={item.des} price={item.price} image={item.image} />
      ))}
      {dataFeaturedFromServer.length === 0 && (
        <div className='col-span-4 pt-12 animate-pulse'>
          <h1 className='font-bold text-center text-2xl text-yellow-600'>
            Currently, No items are available in this category!
          </h1>
        </div>
      )}
    </div>
    </>
  );
};

export default MenuItems;