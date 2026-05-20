import { useParams } from "react-router-dom";
import { getCategory } from "@/data/toys";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Category() {
  const { id } = useParams();
  const category = getCategory(id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {category.name}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {category.toys.map((toy) => (
            <div key={toy.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={toy.images[0]}
                  alt={toy.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/category/${id}/toy/${toy.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {toy.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
