import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    //  sitemap return example :
    // {
    //   url: 'https://domain-name.com',
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 1,
    // },
  ];
}
