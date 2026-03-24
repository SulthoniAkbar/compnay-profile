import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeServiceSkeleton,
  IContentfulAsset,
} from "@/contentful/types/companyBlog.types";
import CardService from "@/components/data/card.service";

const getService = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeServiceSkeleton>({
      content_type: "service",
    });
    return data.items.map((item) => item.fields);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default async function Home() {
  const services = await getService();

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10 flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[#0f766e]">
          What We Do
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          Services Built for Momentum
        </h1>
        <p className="max-w-2xl text-sm text-ink/70">
          Strategy, design, and engineering wrapped in one delivery team.
        </p>
      </div>
      {services.map((service, idx) => (
        <div key={idx} className="mb-8">
          <CardService
            image={`https:${
              (service.image as IContentfulAsset).fields.file.url
            }`}
            title={service.title}
            summary={service.summary ?? "No summary available"}
            slug={service.slug ?? "default-slug"}
          />
        </div>
      ))}
    </section>
  );
}
