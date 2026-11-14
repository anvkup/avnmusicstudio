const SITE_CONFIG = {
  name: 'AVN Music',
  description: 'AVN Music connects music production services, original beats, and a producer portfolio in one premium creative platform.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://avnmusic.shop',
  email: 'info@avnmusic.shop',
  phone: '+91 90607 93927',
  socialLinks: {
    instagram: 'https://www.instagram.com/avn.music1/',
    facebook: 'https://www.facebook.com/profile.php?id=61566925568567',
    linkedin: 'https://www.linkedin.com/company/avn-productions1',
    whatsapp: 'https://wa.link/vcj8tv',
  },
};

export const defaultMetadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: ['music studio', 'recording', 'mixing', 'production', 'mastering'],
  authors: [{ name: 'AVN Music Studio' }],
  creator: 'AVN Music Studio',
  metadataBase: new URL(SITE_CONFIG.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/twitter-image.jpg`],
    creator: '@avnmusicstudio',
  },
};

/**
 * Generate metadata for a specific page
 */
export function generatePageMetadata(pageData = {}) {
  return {
    ...defaultMetadata,
    title: pageData.title || defaultMetadata.title,
    description: pageData.description || defaultMetadata.description,
    keywords: [...(defaultMetadata.keywords || []), ...(pageData.keywords || [])],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: pageData.title || defaultMetadata.openGraph.title,
      description: pageData.description || defaultMetadata.openGraph.description,
      url: pageData.url || defaultMetadata.openGraph.url,
      images: pageData.ogImage ? [{ url: pageData.ogImage }] : defaultMetadata.openGraph.images,
    },
  };
}

/**
 * JSON-LD Schema helpers
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicRecordingStudio',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    sameAs: Object.values(SITE_CONFIG.socialLinks),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      // Add your address details
    },
  };
}

export function generateBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'MusicRecordingStudio',
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}${service.url}`,
    image: service.image,
  };
}

export default SITE_CONFIG;