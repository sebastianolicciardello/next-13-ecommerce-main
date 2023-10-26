"use server";

import { revalidatePath } from 'next/cache';
import { prisma } from "@/lib/prisma";

export const deleteProduct = async (id: number) => {
    const res = await prisma.product.delete({
        where: {
            id
        },
    })
    revalidatePath('/admin')
};
