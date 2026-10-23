import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteSEO {
  title: string;
  description: string;
}

const ROUTE_SEO: Record<string, RouteSEO> = {
  '/': {
    title: 'Style Hub Ladies Beauty Salon | Tirunelveli (5.0 ★)',
    description:
      'Premier ladies beauty salon in Tirunelveli. 5.0 ★ Google rated. Specializing in South Indian Bridal Makeovers, 24K Gold Facials, Haircut & Keratin, Pedicure, and Make-up at Mah Plaza, KTC Nagar.',
  },
  '/services': {
    title: 'Services & Pricing | Style Hub Ladies Beauty Salon Tirunelveli',
    description:
      'Explore all 18 dedicated categories and 78 beauty services including Hair Straightening, Keratin, 24K Gold Facials, Waxing, Threading, Pedicure & Manicure in Tirunelveli.',
  },
  '/bridal': {
    title: 'Bridal Studio & Makeover | Style Hub Ladies Beauty Salon Tirunelveli',
    description:
      'Exclusive South Indian bridal lounge in Tirunelveli. 4K HD & Airbrush camera-ready makeup, authentic Muhurtham jasmine floral jada braiding, and silk saree draping at Mah Plaza.',
  },
  '/gallery': {
    title: 'Makeover & Studio Gallery | Style Hub Ladies Beauty Salon Tirunelveli',
    description:
      'Visual gallery of real client transformations, South Indian bridal looks, haircut styles, and our serene salon ambience in Tirunelveli.',
  },
  '/about': {
    title: 'About Us | Style Hub Ladies Beauty Salon Tirunelveli (5.0 ★)',
    description:
      'Learn about Style Hub in Tirunelveli. 100% certified female stylists, hospital-grade sterilization, and authentic global brands including L’Oréal, MAC, and Cheryl’s.',
  },
  '/contact': {
    title: 'Contact & Location | Style Hub Ladies Beauty Salon Tirunelveli',
    description:
      'Contact Style Hub Ladies Beauty Salon located at Mah Plaza, Pothys Nagar, Nagercoil Road, KTC Nagar, Tirunelveli. Call 094886 76151 or WhatsApp for appointments.',
  },
};

export const SEOHead: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] || {
      title: 'Style Hub Ladies Beauty Salon | Tirunelveli (5.0 ★)',
      description:
        'Premier ladies beauty salon in Tirunelveli. 5.0 ★ rated on Google. Specializing in Bridal Services, Skin Care, Facials, Haircut & Styling at Mah Plaza, KTC Nagar.',
    };

    document.title = seo.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }

    // Update og:title and og:description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }
  }, [pathname]);

  return null;
};
