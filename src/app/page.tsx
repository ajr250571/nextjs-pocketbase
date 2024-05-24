import ProductCard from "@/components/products/ProductCard";
import { pb } from "@/libs/pocketbase";
import { cache } from "react";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const productos = await pb.collection("productos").getList(1, 50, {
    filter: "activo=true",
    sort: "-created",
    cache: "no-store",
  });
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.items.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
