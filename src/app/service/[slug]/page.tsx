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
    <div className="w-full px-4 py-8">
      {service && (
        <div className="bg-white shadow-lg rounded-lg">
          <div className="relative w-full h-[500px] rounded-t-lg overflow-hidden">
            <Image
              src={`https:${
                (service.image as IContentfulAsset)?.fields.file.url
              }`}
              fill
              className="object-cover"
              alt={service.name || "Article Image"}
            />
          </div>

          <div className="p-3 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
              {service.title}
            </h1>

            <div className="text-justify prose max-w-none text-gray-700 mb-8 mx-auto">
              <RichText document={service.description} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
