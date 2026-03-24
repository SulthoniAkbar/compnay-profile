"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import Link from "next/link";
import contentfulClient from "@/contentful/contentfulClient";
import {
  IContentfulAsset,
  TypeServiceSkeleton,
} from "@/contentful/types/companyBlog.types";
import RichText from "@/components/global/RicText";

const fetchServicecBySlug = async (slug: string) => {
  try {
    const data = await contentfulClient.getEntries<TypeServiceSkeleton>({
      content_type: "service",
      limit: 1,
      "fields.slug": slug,
    });
    return data.items[0]?.fields;
  } catch (err) {
    console.error("Error fetching article:", err);
    return null;
  }
};

export default function ServiceSlug() {
  const params = useParams<{ slug: string }>();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (params?.slug) {
        const serviceData = await fetchServicecBySlug(params.slug);
        setService(serviceData);
      }
    };

    fetchData();
  }, [params]);

  return (
    <section className="container mx-auto px-4 py-16">
      {service && (
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="relative w-full h-72 md:h-[420px]">
            <Image
              src={`https:${
                (service.image as IContentfulAsset)?.fields.file.url
              }`}
              fill
              className="object-cover"
              alt={service.name || "Article Image"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="px-6 py-10 md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
              Service Detail
            </p>
            <h1 className="mt-4 font-display text-3xl md:text-5xl text-ink">
              {service.title}
            </h1>
            <div className="mt-8 max-w-3xl text-ink/70 leading-relaxed">
              <RichText document={service.description} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
