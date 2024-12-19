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
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https:${
            (hero.image as IContentfulAsset).fields.file.url
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-lg mb-6">{hero.description}</p>
        </div>
      </section>
    )
  );
}
