/**
 * EMU-WC Website Configuration
 * Main configuration file for the EMU-WC Next.js website
 */

const config = {
  // Company Information
  company: {
    name: "Xiamen EMU Intelligent Technology Co., Ltd",
    shortName: "EMU WC",
    slogan: "Premium Bathroom & Toilet Solutions",
    foundedYear: 2016,
    
    // Contact Information
    contact: {
      email: "info@emu-wc.com",
      phone: {
        international: "+86 18850581035",
        german: "+49 1629366271",
      },
      address: {
        street: "Zone A, 2/F, Building 1, Jiapin Industry Zone, No. 132 Guankou Middle Road",
        city: "Xiamen",
        district: "Jimei District",
        country: "China",
        postcode: "",
      },
    },
    
    // Social Media
    social: {
      instagram: "https://www.instagram.com/emuwc/",
      youtube: "https://www.youtube.com/@EMUWC",
      tiktok: "https://www.tiktok.com/@emu.wc",
    },
  },
  
  // Website Settings
  site: {
    baseUrl: "https://emu-wc.com",
    defaultLocale: "en",
    locales: ["en", "de", "ru"],
    defaultTitle: "EMU WC – Premium Bathroom & Toilet Solutions",
    defaultDescription: "High-quality smart toilet covers and smart toilets with advanced features for comfort and hygiene.",
    
    // SEO Settings
    seo: {
      titleTemplate: "%s | EMU WC",
      defaultOpenGraphImage: "/images/og-image.jpg",
      twitter: {
        handle: "@emuwc",
        site: "@emuwc",
        cardType: "summary_large_image",
      },
      keywords: [
        "smart toilet",
        "bidet toilet",
        "electronic toilet seat",
        "bathroom technology",
        "premium toilet",
        "heated toilet seat",
        "automatic toilet",
        "luxury bathroom solutions",
      ],
    },
    
    // Analytics
    analytics: {
      googleAnalyticsId: "", // To be added
      googleTagManagerId: "", // To be added
    },
  },
  
  // Branding & Design
  design: {
    colors: {
      // Primary Colors
      primary: {
        main: "#3889be", // Extracted from EMU logo blue
        light: "#59a6d8",
        dark: "#256e9e",
        contrastText: "#ffffff",
      },
      // Secondary Colors - Coral that complements the blue
      secondary: {
        main: "#e67e55", // Coral accent color (from product frames)
        light: "#ff9d75",
        dark: "#c65b39",
        contrastText: "#ffffff",
      },
      // Neutral Colors
      neutral: {
        white: "#ffffff",
        lightest: "#f8f9fa",
        lighter: "#e9ecef",
        light: "#dee2e6",
        medium: "#adb5bd",
        dark: "#495057",
        darker: "#343a40",
        darkest: "#212529",
        black: "#000000",
      },
      // Utility Colors
      utility: {
        success: "#2ecc71",
        info: "#3498db",
        warning: "#f39c12",
        error: "#e74c3c",
      },
      // Background Colors
      background: {
        default: "#ffffff",
        paper: "#f8f9fa",
        light: "#e9ecef",
      },
    },
    
    // Typography
    typography: {
      fontFamily: {
        sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
        mono: "'JetBrains Mono', Consolas, Monaco, monospace",
      },
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    
    // Spacing and Layout
    spacing: {
      unit: 8, // Base spacing unit in pixels
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    
    // Border Radius
    borderRadius: {
      sm: "0.125rem",
      md: "0.25rem",
      lg: "0.5rem",
      xl: "1rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      full: "9999px",
    },
    
    // Shadows
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },
  
  // E-commerce Settings (for future expansion)
  ecommerce: {
    currency: {
      default: "USD",
      supported: ["USD", "EUR", "RUB"],
    },
    shipping: {
      countries: ["worldwide"],
    },
  },
  
  // Navigation Structure
  navigation: {
    header: [
      { label: "Home", path: "/" },
      { 
        label: "Products", 
        path: "/products",
        children: [
          { label: "Smart Cover", path: "/products/smart-cover" },
          { label: "Smart Toilet", path: "/products/smart-toilet" },
        ],
      },
      { label: "About Us", path: "/about-us" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
    footer: {
      categories: [
        {
          title: "Products",
          links: [
            { label: "Smart Cover", path: "/products/smart-cover" },
            { label: "Smart Toilet", path: "/products/smart-toilet" },
          ],
        },
        {
          title: "About EMU",
          links: [
            { label: "Our Company", path: "/about-us" },
            { label: "Terms of Service", path: "/terms-of-service" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Blog", path: "/blog" },
            { label: "Contact Us", path: "/contact" },
            { label: "FAQ", path: "/faq" },
            { label: "Project", path: "/project" },
          ],
        },
      ],
    },
  },
  
  // Feature Flags
  features: {
    darkMode: false,
    newsletter: true,
    multilanguage: true,
    chatbot: true,
    aiProductAdvisor: true,
  },
};

module.exports = config;