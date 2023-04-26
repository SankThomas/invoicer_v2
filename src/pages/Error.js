import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="flex items-center justify-center flex-col mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-gray-800 lg:mb-8">
          Error 404
        </h1>
        <p className="text-xl mb-10">
          Oops. The page you are looking for does not exist or may have moved.
        </p>
        <button className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
          <Link to="/">Back to Homepage</Link>
        </button>
      </section>
    </>
  );
}
