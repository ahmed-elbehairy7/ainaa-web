import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Static routes
    {
      url: "https://ainaa.mafazaa.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ainaa.mafazaa.com/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://ainaa.mafazaa.com/  ",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://ainaa.mafazaa.com/congratulations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://ainaa.mafazaa.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://ainaa.mafazaa.com/protection-already-applied",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://ainaa.mafazaa.com/setupvalues",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://ainaa.mafazaa.com/support",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ainaa.mafazaa.com/support_us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Dynamic routes (examples, you should generate these dynamically in production)
    {
      url: "https://ainaa.mafazaa.com/blogs/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Example for nested dynamic routes
    {
      url: "https://ainaa.mafazaa.com/gen1/setupguide/windows",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://ainaa.mafazaa.com/gen1/setupguide/router",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://ainaa.mafazaa.com/gen1/setupguide/android",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
