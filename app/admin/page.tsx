

import React, { useEffect, useState } from 'react'
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "@/prisma/generated/client";
import AdminProduct from "@/app/admin/(components)/product";
import { deleteProduct } from './(components)/actions';
import { AiFillPlusSquare } from 'react-icons/ai';



export const getProducts = async () => {
    return await prisma.product.findMany();
}




async function Admin() {

    const products: ProductType[] = await getProducts();


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className='text-5xl font-bold mb-5'>Admin Page</h1>
            <a
            href={`/admin/create`}
            className="flex items-center justify-center bg-transparent border border-transparent rounded-full p-3 ml-2 mb-5"
          >
            <AiFillPlusSquare className="text-gray-500 text-3xl" />
          </a>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.slice(0, 20).map((item) => (
                    <AdminProduct
                        key={item.id}
                        product={item}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </div>
        </main>
    )
}

export default Admin