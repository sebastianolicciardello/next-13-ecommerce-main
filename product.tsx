"use client"

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { Product } from "../types/Product";

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, image, price, rating } = product;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-xs">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="flex justify-center mb-2">
        <img src={image} alt={title} className="h-64 object-contain" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <p className="text-2xl font-semibold">${price}</p>

        </div>
        <div className="flex items-center">
          <p className="text-xl mr-1"></p>
        </div>  
                <button
            onClick={handleFavoriteClick}
            className="flex items-center justify-center bg-transparent border border-transparent rounded-full p-3 ml-2"
          >
            {isFavorite ? (
              <AiFillHeart className="text-red-500 text-3xl" />
            ) : (
              <AiOutlineHeart className="text-gray-500 text-3xl" />
            )}
          </button>
      </div>
    </div>
  );
}