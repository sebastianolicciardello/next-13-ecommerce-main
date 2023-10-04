"use client"

import {BsFillTrashFill} from "react-icons/bs";
import { Product as ProductType } from "@/prisma/generated/client";

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { name, image, price} = product;

  async function deleteProduct(){
    await fetch("/backend?id="+product.id);
  }

  return (
    <div className="max-w-xs">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <div className="flex justify-center mb-2">
        <img src={image} alt={name} className="h-64 object-contain" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <p className="text-2xl font-semibold">${price.toString()}</p>

        </div>
        <div className="flex items-center">
          <p className="text-xl mr-1"></p>
        </div>  
                <button
            onClick={deleteProduct}
            className="flex items-center justify-center bg-transparent border border-transparent rounded-full p-3 ml-2"
          >
            <BsFillTrashFill className="text-red-500 text-3xl" />
          </button>
      </div>
    </div>
  );
}