import Image from "next/image";

interface CardTestiProps {
  clientName: string;
  clientPhoto: string;
  testimonial: string;
  highlighted?: boolean;
}

export default function CardTestiComponent({
  clientName,
  clientPhoto,
  testimonial,
  highlighted,
}: CardTestiProps) {
  return (
    <div
      className={`rounded-3xl p-6 transition-transform duration-300 ${
        highlighted
          ? "bg-gradient-to-br from-[#0f766e]/15 via-white to-[#0f766e]/15 text-ink shadow-xl"
          : "glass-panel text-ink"
      }`}
    >
      <div className="flex items-center mb-4">
        <Image
          src={clientPhoto}
          alt={clientName}
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{clientName}</h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-ink/80">{testimonial}</p>
    </div>
  );
}
