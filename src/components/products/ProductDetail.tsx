import Image from "next/image";

export default function ProductDetail({ producto }: any) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div>
        <Image
          className="aspect-[4/5] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          src={`${process.env.POCKETBASE_HOST}api/files/${producto.collectionId}/${producto.id}/${producto.imagen}`}
          alt="Product Image"
          width={900}
          height={900}
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">{producto.nombre}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {producto.estrellas === 0 && (
                <>
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </>
              )}
              {producto.estrellas === 1 && (
                <>
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </>
              )}
              {producto.estrellas === 2 && (
                <>
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </>
              )}
              {producto.estrellas === 3 && (
                <>
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </>
              )}
              {producto.estrellas === 4 && (
                <>
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </>
              )}
              {producto.estrellas === 5 && (
                <>
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                </>
              )}
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {producto.descripcion}
          </p>
        </div>
        <button className="btn btn-primary btn-sm">
          Add to cart {producto.precio}$
        </button>
      </div>
    </div>
  );

  function StarIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
}
