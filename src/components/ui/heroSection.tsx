import contentfulClient from "@/contentful/contentfulClient";
import {
  IContentfulAsset,
  TypeHeroSkeleton,
} from "@/contentful/types/companyBlog.types";

const getHero = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeHeroSkeleton>({
      content_type: "hero",
    });
    return data.items[0]?.fields || null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default async function HeroSection() {
  const hero = await getHero();

  return (
    hero && (
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center pt-28"
        style={{
          backgroundImage: `url(https:${
            (hero.image as IContentfulAsset).fields.file.url
          })`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#0f766e]/15 blur-3xl"></div>
        <div className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[#0f766e]/15 blur-3xl"></div>

        <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em]">
            <span className="h-2 w-2 rounded-full bg-[#0f766e]"></span>
            Digital Craft & Strategy
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight animate-fade-up">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/90 animate-fade-up">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-full bg-[#0f766e] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#138577]"
            >
              Start a Project
            </a>
            <a
              href="/service"
              className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white/90 transition hover:border-white hover:text-white"
            >
              See Services
            </a>
          </div>
        </div>
      </section>
    )
  );
}
