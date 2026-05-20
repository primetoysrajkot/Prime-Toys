import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/data/toys";
import { Link } from "react-router-dom";

function Home() {
  const categories = getCategories();

  return (
    <>
      <Hero />
      <div id="categories" className="flex flex-col items-center gap-12 px-4 py-12 font-nunito md:px-8">
        <h2 className="text-center text-4xl font-extrabold">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                <img
                  src={category.toys[0]?.images[0] || 'https://placehold.co/400'}
                  alt={category.name}
                  className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    <Link to={`/category/${category.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/toys">
          <Button>See all toys</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
