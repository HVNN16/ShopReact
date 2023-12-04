import React from "react";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function ColDesign({ price, name, des, variants }) {
  return (
    <>
    <motion.div variants={variants} className="group relative flex flex-col items-center justify-center">
      <div className="relative w-[300px] h-24">
        <div className="absolute right-12 bg-black p-3 rounded-[40%6px] z-10">
          <ShoppingCartIcon className="w-5 text-white group-hover:text-yellow-600" />
        </div>
        <div className="absolute inset-0 left-[4rem] -top-6 rounded w-full">
          <motion.img
            src={`/images/${name}.png`}
            className="object-cover object-center w-44 group-hover:scale-105 duration-300 transition-gpu"
          />
        </div>
      </div>
      <div className="absolute left-[4rem] -top-6 w-[12rem] ">
        <p className="text-lg font-bold mb-2">${price}</p>
      </div>
    </motion.div>
  </>
  );
}
