"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="relative h-60 w-full">
          <Image
            src={`${product.image}?auto=format&fit=crop&w=800&q=80`}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-muted-foreground">${product.price}</p>

          <Button
            className="w-full rounded-xl"
            onClick={(e) => e.preventDefault()}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}