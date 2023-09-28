import Product from "@/components/product";
import { Product as ProductType} from "@/types/Product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.slice(0, 20).map((product) => (
          <Product
            key={product.id}
            product = {product}
          />
        ))}
      </div>
    </main>
  );
}
