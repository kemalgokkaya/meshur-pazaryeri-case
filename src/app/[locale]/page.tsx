import { ProductCard } from "../../components/molecules/ProductCard";
import { ThemeToggle } from "../../components/atoms/ThemeToggle";
import { mapProductResponse } from "../../services/productMapper";

const getProducts = async () => {
  const rawData = [
    { id: 1, name: "Meşhur Baklava", price: 500, image: "https://picsum.photos/seed/1/400/300", description: "Gaziantep'in el açması taze baklavası." },
    { id: 2, name: "Antep Fıstığı", price: 350, image: "https://picsum.photos/seed/2/400/300", description: "Yeni mahsul, iri taneli boz fıstık." },
    { id: 3, name: "Ege Zeytini", price: 150, image: "https://picsum.photos/seed/3/400/300", description: "Doğal salamura, düşük asitli sızma zeytin." },
  ];

  return mapProductResponse(rawData);
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-6 md:p-10 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

      <header className="flex justify-between items-center max-w-6xl mx-auto mb-12 border-b pb-6 border-gray-100 dark:border-gray-800">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
            Meşhur Pazaryeri
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
            Yöresel lezzetlerin dijital adresi
          </p>
        </div>
        <ThemeToggle />
      </header>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: { id: any; }) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-400 text-sm border-t pt-8 border-gray-100 dark:border-gray-800">
        <p>&copy; 2025 Meşhur Pazaryeri Case Çalışması. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}