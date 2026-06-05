import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Express Care Chiropractic Clinic',
    short_name: 'Express Care',
    description: 'Top-rated chiropractic and wellness clinic in Hyderabad offering non-surgical treatments.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0D6E6E',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
