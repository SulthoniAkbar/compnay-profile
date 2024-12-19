import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  summary?: string;
  slug: string; 
}

export default function CardComponent({
  image,
  title,
  summary,
  slug,
}: CardProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">

      <div className="flex-1 text-center lg:text-left">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-green-600">{title}</h3>
        </div>
        <p className="text-gray-600 text-lg mb-6">{summary}</p>
        <Link href={`service/${slug}`}>
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition">
            Learn More
          </button>
        </Link>
      </div>


      <div className="flex-1">
        <div className="relative w-full h-64 lg:h-80 bg-blue-100 rounded-lg flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
