// src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = 'https://avnmusic.shop';
  const currentDate = new Date().toISOString();

  return [
    { url: `${baseUrl}`, lastModified: currentDate, priority: 1.0 },
    { url: `${baseUrl}/studio`, lastModified: currentDate, priority: 0.95 },
    { url: `${baseUrl}/beats`, lastModified: currentDate, priority: 0.95 },
    { url: `${baseUrl}/portfolio`, lastModified: currentDate, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, priority: 0.85 },
    { url: `${baseUrl}/services/production`, lastModified: currentDate, priority: 0.7 },
    { url: `${baseUrl}/services/mixing`, lastModified: currentDate, priority: 0.7 },
    { url: `${baseUrl}/services/recording`, lastModified: currentDate, priority: 0.7 },
    { url: `${baseUrl}/services/jingles`, lastModified: currentDate, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, priority: 0.7 },
    { url: `${baseUrl}/pnp`, lastModified: currentDate, priority: 0.5 },
    { url: `${baseUrl}/tnc`, lastModified: currentDate, priority: 0.5 },
  ];
}