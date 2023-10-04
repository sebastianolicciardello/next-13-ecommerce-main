import Product from "@/components/product";
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "@/prisma/generated/client";


export default async function Home() {
  const products: ProductType[] = await prisma.product.findMany(
    {
      select: {
        id: true,
        name: true,
        image: true,
        price: true,
        description: true,
      },
    }
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.slice(0, 20).map((item) => (
          <Product
            key={item.id}
            product = {item}
          />
        ))}
      </div>
    </main>
  );
}
