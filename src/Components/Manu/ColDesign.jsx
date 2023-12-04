import React from 'react';

export default function ColDesign({ name, des, price, addToCart }) {
  return (
    <div className='flex flex-col items-center gap-2 group w-64'>
      <div className='rounded-full w-full'>
        <img
          className='object-center object-cover w-full group-hover:scale-[1.03] transition duration-300 ease-in-out'
          src={`/images/${name}.png`}
          alt={name}
        />
      </div>
      <h1 className='font-bold title-font'>{name}</h1>
      <p className='opacity-60 text-sm'>{des}</p>
      <h1 className='text-[#F96442] mt-1 font-bold text-lg title-font'>&#36;{price}</h1>
      <button
        className='bg-[#F96442] text-white px-4 py-2 mt-2 rounded-md hover:bg-[#e65100] transition'
        onClick={() => addToCart({ name, des, price })}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
