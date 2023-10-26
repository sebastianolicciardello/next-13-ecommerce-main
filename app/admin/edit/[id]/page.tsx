
import React from 'react'
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const getProduct = async (id: number) => {
    return await prisma.product.findUnique({
        where: {
            id
        }
    })
}

export default async function EditPage({
    params: {id}
}: { params: { id: string };
}){

    const product = await getProduct(parseInt(id));

    const updateProduct = async (data:FormData) => {
        "use server"

        const productName = data.get('name') as string;
        const productDescription = data.get('description') as string;
        const productImage = data.get('image') as string;
        const productPrice = data.get('price') as string;
        await prisma.product.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: productName,
                description: productDescription,
                image: productImage,
                price: parseInt(productPrice)
            }
        })
        revalidatePath('/admin')
        redirect('/admin', RedirectType.replace)
    };

    if (!product){
        return <div>Product not found</div>
    }
    return (
        <div className="mt-20">
            <div className="my-5">
                <form className="w-1/2 mx-auto "
                action={updateProduct}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={product.name}
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            defaultValue={product.description}
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700">Image</label>
                        <textarea
                            id="image"
                            name="image"
                            defaultValue={product.image}
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            defaultValue={(product.price).toString()}
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>
    
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
                    >
                        Modifica
                    </button>
                </form>
            </div>
        </div>
    );
}