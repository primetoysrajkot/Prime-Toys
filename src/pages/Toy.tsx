import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToy } from "@/data/toys";
import { Button } from "@/components/ui/button";

function Toy() {
  const { categoryId, toyId } = useParams();
  const [toy, setToy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchToy = async () => {
      setIsLoading(true);
      const fetchedToy = await getToy(categoryId, toyId);
      setToy(fetchedToy);
      setIsLoading(false);
    };
    fetchToy();
  }, [categoryId, toyId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!toy) {
    return <div>Toy not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={toy.images[0]}
              alt={toy.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {toy.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">$10.00</p>

            <form className="mt-10">
              <Button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{toy.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to={`/category/${categoryId}`}>
            <Button>Back to category</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Toy;
