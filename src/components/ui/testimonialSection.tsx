import CardTestiComponent from "@/components/data/card.testi";
import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeTestiCompanySkeleton,
  IContentfulAsset,
} from "@/contentful/types/companyBlog.types";

const getTesti = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeTestiCompanySkeleton>({
      content_type: "testiCompany",
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function TestimonialsSection() {
  const testi = await getTesti();
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-center text-5xl font-bold text-black mb-8">
        Testimonial
      </h2>
      <div className="w-16 h-1 bg-white mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testi &&
          testi.items?.map((item, idx) => (
            <CardTestiComponent
              key={item.sys.id}
              clientName={item.fields.name || "No Name"}
              clientPhoto={`https:${
                (item.fields.image as IContentfulAsset)?.fields?.file?.url || ""
              }`}
              testimonial={item.fields.description || ""}
            />
          ))}
      </div>
    </section>
  );
}
