import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface IContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      filename?: string;
      contentType?: string;
    };
  };
}
export interface TypeAboutcompanyFields {
  name: EntryFieldTypes.Symbol;
}

export type TypeAboutcompanySkeleton = EntrySkeletonType<
  TypeAboutcompanyFields,
  "aboutcompany"
>;
export type TypeAboutcompany<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeAboutcompanySkeleton, Modifiers, Locales>;

export interface TypeHeroFields {
  title: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
}
export interface TypeHeroFields {
  title: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Text;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>;
export interface TypeServiceFields {
  title: EntryFieldTypes.Symbol;
  summary?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
  slug?: EntryFieldTypes.Symbol;
}

export type TypeServiceSkeleton = EntrySkeletonType<
  TypeServiceFields,
  "service"
>;
export type TypeService<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeServiceSkeleton, Modifiers, Locales>;
export interface TypeTestiCompanyFields {
  name: EntryFieldTypes.Symbol;
  company?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Text;
}

export type TypeTestiCompanySkeleton = EntrySkeletonType<
  TypeTestiCompanyFields,
  "testiCompany"
>;
export type TypeTestiCompany<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTestiCompanySkeleton, Modifiers, Locales>;
