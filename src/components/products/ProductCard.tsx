import { pb } from "@/libs/pocketbase";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ producto }: any) {
  return (
    <div className="card card-compact w-auto bg-base-300 shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <figure className="p-2">
          <Image
            src={`${process.env.POCKETBASE_HOST}api/files/${producto.collectionId}/${producto.id}/${producto.imagen}`}
            alt="Product Image"
            width={100}
            height={100}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <div className="card-actions justify-end">
            <Link
              href={`/productos/${producto.id}`}
              className="btn btn-sm btn-primary"
            >
              Comprar {producto.precio}$
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
