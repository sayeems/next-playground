import Image from "next/image";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

export default async function ProductPage({ params }) {
    const { id } = await params;   // 👈 NEW in Next 16

    const product = products.find(
        (p) => p.id.toString() === id
    );

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-2xl font-bold">Product not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <Image
                        src={`${product.image}?auto=format&fit=crop&w=1000&q=80`}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-semibold text-primary">
                        ${product.price}
                    </p>
                    <p className="text-muted-foreground">
                        This is a premium quality product.
                    </p>
                    <Button size="lg" className="rounded-xl">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}