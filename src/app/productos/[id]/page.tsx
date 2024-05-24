import ProductDetail from "@/components/products/ProductDetail";
import { pb } from "@/libs/pocketbase";
import Image from "next/image";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const producto = await pb
    .collection("productos")
    .getOne(params.id, { cache: "no-store" });

  return <ProductDetail key={producto.id} producto={producto} />;
}
