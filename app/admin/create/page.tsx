import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

export default async function CreatePage(){

    const createProduct = async (data:FormData) => {
        "use server"

        const productName = data.get('name') as string;
        const productDescription = data.get('description') as string;
        const productImage = data.get('image') as string;
        const productPrice = data.get('price') as string;
        const productStripePriceId = data.get('stripePriceId') as string;
        await prisma.product.create({
            data: {
                name: productName,
                description: productDescription,
                image: productImage,
                price: parseInt(productPrice),
                stripePriceId: productStripePriceId
            }
        })
        revalidatePath('/admin')
        redirect('/admin', RedirectType.replace)
    };

    return (
        <div className="mt-20">
            <div className="my-5">
                <form className="w-1/2 mx-auto "
                action={createProduct}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700">Image</label>
                        <textarea
                            id="image"
                            name="image"
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="stripePriceId" className="block text-gray-700">Stripe Price Id</label>
                        <input
                            id="stripePriceId"
                            name="stripePriceId"
                            className="rounded-md border border-gray-300 p-2 w-full"
                        />
                    </div>
    
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
                    >
                        Crea
                    </button>
                </form>
            </div>
        </div>
    );
}