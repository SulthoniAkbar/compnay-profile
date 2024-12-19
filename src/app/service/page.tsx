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
    <div className="container mx-auto px-6 py-12">
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
    </div>
  );
}
