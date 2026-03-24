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
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(30,138,122,0.14),_transparent_55%)]"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#0f766e]">
              What Clients Say
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mt-3">
              Testimonial
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink/70">
            Trusted by teams who value clarity, craftsmanship, and measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testi &&
          testi.items?.map((item, idx) => (
            <CardTestiComponent
              key={item.sys.id}
              clientName={item.fields.name || "No Name"}
              clientPhoto={`https:${
                (item.fields.image as IContentfulAsset)?.fields?.file?.url || ""
              }`}
              testimonial={item.fields.description || ""}
              highlighted={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
