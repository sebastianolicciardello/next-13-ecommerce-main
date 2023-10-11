import React, { useState } from 'react'
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "@/prisma/generated/client";
import AdminProduct from "@/components/adminProduct";
import AdminForm from '@/components/adminForm';

async function Admin() {

    const products: ProductType[] = await prisma.product.findMany();


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className='text-5xl font-bold mb-5'>Admin Page</h1>
            <AdminForm />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.slice(0, 20).map((item) => (
                    <AdminProduct
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
        </main>
    )
}

export default Admin