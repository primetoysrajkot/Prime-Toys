import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-12 font-nunito md:px-8">
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Welcome to the world of endless fun!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our wide range of toys and find the perfect one for your
            child.
          </p>
          <div className="mt-8">
            <Link to="/toys">
              <button className="rounded-md bg-blue-500 px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-600">
                Explore Toys
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/images/hero.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
}
