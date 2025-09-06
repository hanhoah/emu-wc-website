// Dummy product data for development
export interface ProductVariant {
  type: 'color' | 'model' | 'form';
  name: string;
  value: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductFeature {
  name: string;
  description: string;
  icon?: string;
}

export interface Product {
  id: string;
  modelName: string;
  slug: string;
  category: 'smart-cover' | 'smart-toilet';
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: 'in_stock' | 'out_of_stock' | 'coming_soon';
  featured: boolean;
  features: ProductFeature[];
  specs: Record<string, string | number | boolean>;
  variants: ProductVariant[];
  images: ProductImage[];
}

export const products: Product[] = [
  {
    id: 'e2100',
    modelName: 'E2100',
    slug: 'e2100',
    category: 'smart-cover',
    title: 'E2100 Smart Toilet Cover',
    shortDescription: 'Premium electric bidet seat with multiple color options.',
    fullDescription: `
      The E2100 is a high-quality electric bidet seat that offers excellent comfort and hygiene features.
      Available in multiple colors and models, it fits most standard toilets and provides a range of
      cleaning options for ultimate comfort and cleanliness.
    `,
    status: 'in_stock',
    featured: true,
    features: [
      {
        name: 'Heated Seat',
        description: 'Adjustable temperature settings for maximum comfort',
        icon: 'thermometer'
      },
      {
        name: 'Bidet Functions',
        description: 'Front and rear wash with adjustable water pressure and temperature',
        icon: 'droplet'
      },
      {
        name: 'Warm Air Dryer',
        description: 'Adjustable temperature settings to reduce toilet paper usage',
        icon: 'wind'
      },
      {
        name: 'LED Night Light',
        description: 'Soft illumination for nighttime bathroom visits',
        icon: 'bulb'
      },
      {
        name: 'Self-Cleaning Nozzles',
        description: 'Nozzles automatically clean themselves before and after each use',
        icon: 'sparkles'
      }
    ],
    specs: {
      dimensions: '495mm x 383mm x 150mm',
      weight: '4.5kg',
      powerConsumption: '1200W',
      waterPressure: '0.08~0.75MPa',
      waterTemperature: '31~39°C',
      seatTemperature: '31~39°C',
      dryerTemperature: '40~50°C',
      voltage: '220-240V',
      certification: 'CE, RoHS'
    },
    variants: [
      {
        type: 'color',
        name: 'White',
        value: 'white'
      },
      {
        type: 'color',
        name: 'Gold',
        value: 'gold'
      },
      {
        type: 'color',
        name: 'Silver',
        value: 'silver'
      },
      {
        type: 'model',
        name: 'Classic',
        value: 'classic'
      },
      {
        type: 'model',
        name: 'Economy',
        value: 'economy'
      }
    ],
    images: [
      {
        url: '/images/products/e2100-1.jpg',
        alt: 'E2100 Smart Toilet Cover front view',
        isPrimary: true
      },
      {
        url: '/images/products/e2100-2.jpg',
        alt: 'E2100 Smart Toilet Cover side view',
        isPrimary: false
      },
      {
        url: '/images/products/e2100-3.jpg',
        alt: 'E2100 Smart Toilet Cover control panel',
        isPrimary: false
      }
    ]
  },
  {
    id: 'e2102',
    modelName: 'E2102',
    slug: 'e2102',
    category: 'smart-cover',
    title: 'E2102 Smart Toilet Cover',
    shortDescription: 'Advanced bidet seat with multiple form options.',
    fullDescription: `
      The E2102 is our versatile smart toilet cover that comes in different forms to fit various toilet types.
      Choose between V-form and U-form to ensure perfect compatibility with your toilet. Features multiple
      cleaning modes, temperature settings, and comfortable heated seat.
    `,
    status: 'in_stock',
    featured: true,
    features: [
      {
        name: 'Multiple Forms',
        description: 'Available in V-form and U-form to fit different toilet types',
        icon: 'shapes'
      },
      {
        name: 'Heated Seat',
        description: 'Adjustable temperature settings for maximum comfort',
        icon: 'thermometer'
      },
      {
        name: 'Bidet Functions',
        description: 'Front and rear wash with adjustable water pressure and temperature',
        icon: 'droplet'
      },
      {
        name: 'Warm Air Dryer',
        description: 'Adjustable temperature settings to reduce toilet paper usage',
        icon: 'wind'
      },
      {
        name: 'Child Mode',
        description: 'Special settings for children with gentler pressure and simplified controls',
        icon: 'baby'
      }
    ],
    specs: {
      dimensions: '490mm x 380mm x 145mm',
      weight: '4.3kg',
      powerConsumption: '1150W',
      waterPressure: '0.08~0.75MPa',
      waterTemperature: '31~39°C',
      seatTemperature: '31~39°C',
      dryerTemperature: '40~50°C',
      voltage: '220-240V',
      certification: 'CE, RoHS'
    },
    variants: [
      {
        type: 'model',
        name: 'Classic',
        value: 'classic'
      },
      {
        type: 'model',
        name: 'Economy',
        value: 'economy'
      },
      {
        type: 'form',
        name: 'V Form',
        value: 'v-form'
      },
      {
        type: 'form',
        name: 'U Form',
        value: 'u-form'
      }
    ],
    images: [
      {
        url: '/images/products/e2102-1.jpg',
        alt: 'E2102 Smart Toilet Cover front view',
        isPrimary: true
      },
      {
        url: '/images/products/e2102-2.jpg',
        alt: 'E2102 Smart Toilet Cover side view',
        isPrimary: false
      },
      {
        url: '/images/products/e2102-3.jpg',
        alt: 'E2102 Smart Toilet Cover form comparison',
        isPrimary: false
      }
    ]
  },
  {
    id: 'e8201s',
    modelName: 'E8201S',
    slug: 'e8201s',
    category: 'smart-toilet',
    title: 'E8201S Smart Toilet',
    shortDescription: 'Complete smart toilet with radar-flip or foot-activated lid.',
    fullDescription: `
      The E8201S is a complete smart toilet solution with advanced features for maximum comfort and hygiene.
      This model includes hands-free opening/closing with radar detection or foot activation, heated seats,
      multiple washing modes, and self-cleaning functions. Experience the ultimate bathroom upgrade with our
      flagship smart toilet.
    `,
    status: 'in_stock',
    featured: true,
    features: [
      {
        name: 'Automatic Opening/Closing',
        description: 'Radar detection or foot pedal activation for hands-free operation',
        icon: 'eye'
      },
      {
        name: 'Bidet Functions',
        description: 'Multiple washing modes with adjustable pressure and temperature',
        icon: 'droplet'
      },
      {
        name: 'Heated Seat',
        description: 'Adjustable temperature settings for maximum comfort',
        icon: 'thermometer'
      },
      {
        name: 'Warm Air Dryer',
        description: 'Adjustable temperature settings',
        icon: 'wind'
      },
      {
        name: 'Self-Cleaning',
        description: 'Automatic bowl cleaning and nozzle sterilization',
        icon: 'sparkles'
      },
      {
        name: 'Flushing With/Without Power',
        description: 'Works even during power outages',
        icon: 'power'
      }
    ],
    specs: {
      dimensions: '680mm x 420mm x 500mm',
      weight: '45kg',
      powerConsumption: '1400W',
      waterPressure: '0.1~0.7MPa',
      waterTemperature: '31~39°C',
      seatTemperature: '31~39°C',
      dryerTemperature: '40~50°C',
      voltage: '220-240V',
      certification: 'CE, RoHS, UPC'
    },
    variants: [],
    images: [
      {
        url: '/images/products/e8201s-1.jpg',
        alt: 'E8201S Smart Toilet front view',
        isPrimary: true
      },
      {
        url: '/images/products/e8201s-2.jpg',
        alt: 'E8201S Smart Toilet side view',
        isPrimary: false
      },
      {
        url: '/images/products/e8201s-3.jpg',
        alt: 'E8201S Smart Toilet control panel',
        isPrimary: false
      }
    ]
  },
  {
    id: 'e2600',
    modelName: 'E2600',
    slug: 'e2600',
    category: 'smart-cover',
    title: 'E2600 Mechanical Bidet Cover',
    shortDescription: 'Innovative mechanical bidet function without electricity.',
    fullDescription: `
      Coming soon! The E2600 is our innovative solution for those who want bidet functionality without
      requiring electricity. Using water pressure alone, this mechanical bidet cover provides effective
      cleaning while being eco-friendly and suitable for any bathroom without electrical outlets nearby.
      Sign up to be notified when this product becomes available.
    `,
    status: 'coming_soon',
    featured: true,
    features: [
      {
        name: 'No Electricity Required',
        description: 'Operates using water pressure only',
        icon: 'zap-off'
      },
      {
        name: 'Mechanical Bidet Function',
        description: 'Effective cleaning without electrical components',
        icon: 'droplet'
      },
      {
        name: 'Eco-Friendly',
        description: 'Zero energy consumption for reduced environmental impact',
        icon: 'leaf'
      },
      {
        name: 'Simple Installation',
        description: 'Easy to install without needing an electrical outlet',
        icon: 'tool'
      },
      {
        name: 'Durable Construction',
        description: 'Built to last with fewer components that can fail',
        icon: 'shield'
      }
    ],
    specs: {
      dimensions: '490mm x 375mm x 140mm',
      weight: '3.2kg',
      powerConsumption: '0W',
      waterPressure: '0.1~0.8MPa',
      waterTemperature: 'Ambient',
      material: 'High-quality ABS plastic',
      certification: 'CE, RoHS'
    },
    variants: [],
    images: [
      {
        url: '/images/products/e2600-1.jpg',
        alt: 'E2600 Mechanical Bidet Cover concept image',
        isPrimary: true
      }
    ]
  }
];

// Helper functions to get products
export const getProductsByCategory = (category: 'smart-cover' | 'smart-toilet'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
