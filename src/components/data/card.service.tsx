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
    <div className="glass-panel flex flex-col lg:flex-row items-center gap-8 p-6 rounded-3xl transition-transform hover:-translate-y-1">
      <div className="flex-1 text-center lg:text-left">
        <div className="mb-4">
          <h3 className="font-display text-3xl text-ink">{title}</h3>
        </div>
        <p className="text-ink/70 text-base mb-6">{summary}</p>
        <Link href={`service/${slug}`}>
          <button className="rounded-full bg-[#0f766e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#138577]">
            Learn More
          </button>
        </Link>
      </div>

      <div className="flex-1">
        <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-2xl bg-white/60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
