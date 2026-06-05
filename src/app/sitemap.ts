import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.chiropractornearme.in';
  
  const pages = [
    '',
    '/chiropractor-hyderabad',
    '/back-pain-treatment-hyderabad',
    '/neck-pain-treatment-hyderabad',
    '/sciatica-treatment-hyderabad',
    '/frozen-shoulder-treatment-hyderabad',
    '/slipped-disc-treatment-hyderabad',
    '/posture-correction-hyderabad',
    '/sports-injury-treatment-hyderabad',
    '/chiropractic-adjustment-hyderabad'
  ];

  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
