import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          My favourite language is JavaScript
        </h1>

        <p className="text-muted-foreground max-w-xl mx-auto">
          Shop high quality items at unbeatable prices.
        </p>

        <Button size="lg" className="rounded-2xl">
          Shop Now
        </Button>
      </div>
    </section>
  );
}