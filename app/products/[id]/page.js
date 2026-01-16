import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/mockProducts";

export default async function ProductDetailsPage({ params }) {
  // Unwrap params
  const { id } = await params; // <--- await here

  // Find the bike by ID
  const bike = products.find((p) => p.id === id);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-2xl">Bike not found</h1>
        <Link
          href="/products"
          className="ml-4 text-teal-400 underline hover:text-teal-600"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 lg:px-16">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Bike Image */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={bike.image}
            alt={bike.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Bike Details */}
        <div className="flex flex-col gap-4 lg:w-1/2 text-white">
          <h1 className="text-4xl font-bold">{bike.name}</h1>
          <p className="text-gray-300 text-lg">{bike.tagline}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="font-semibold">Top Speed</h3>
              <p>{bike.speed}</p>
            </div>
            <div>
              <h3 className="font-semibold">Range</h3>
              <p>{bike.range}</p>
            </div>
            <div>
              <h3 className="font-semibold">Battery</h3>
              <p>{bike.battery}</p>
            </div>
            <div>
              <h3 className="font-semibold">Motor</h3>
              <p>{bike.motor}</p>
            </div>
          </div>

          <p className="mt-4 text-teal-400 text-xl font-bold">{bike.price}</p>

          <Link
            href="/products"
            className="mt-6 bg-teal-600 w-fit px-6 py-3 rounded hover:bg-teal-700 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
