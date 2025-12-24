'use client';
import { ProductCard } from "../../components/molecules/ProductCard";
import { mapProductResponse } from "../../services/productMapper";

const rawProducts = [
  { id: 1, name: "Meşhur Baklava", price: 500, image: "https://picsum.photos/seed/1/400/300" },
  { id: 2, name: "Antep Fıstığı", price: 350, image: "https://picsum.photos/seed/2/400/300" },
  { id: 3, name: "Ege Zeytini", price: 150, image: "https://picsum.photos/seed/3/400/300" },
];

export default function Home() {
  const products = mapProductResponse(rawProducts);

  return (
    <main className="p-10 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-600 dark:text-blue-400">
        Meşhur Pazaryeri
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}