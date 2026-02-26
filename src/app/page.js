import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}