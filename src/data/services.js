import {
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Gauge,
  Wrench,
  Cable,
} from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites that build credibility, strengthen your brand, and turn visitors into customers.",
    icon: Globe,
    features: [
      "Custom Design",
      "Mobile-First",
      "SEO Optimized",
      "SSL & Hosting Setup",
    ],
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored web solutions that automate workflows and solve real business problems.",
    icon: LayoutDashboard,
    features: [
      "Business Logic",
      "User Authentication",
      "Admin Dashboards",
      "Scalable Architecture",
    ],
  },
  {
    title: "E-commerce Websites",
    description:
      "Fast, secure online stores designed to increase sales and provide a seamless shopping experience.",
    icon: ShoppingBag,
    features: [
      "Product Catalog",
      "Cart & Checkout",
      "Payment Gateway",
      "Order Management",
    ]
  },
  {
    title: "Performance & SEO",
    description:
      "Optimized websites that load quickly, rank better on search engines, and deliver a smooth user experience.",
    icon: Gauge,
    features: [
      "Core Web Vitals",
      "Image Optimization",
      "On-page SEO",
      "Speed Audit & Fix",
    ],
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable updates, monitoring, backups, and ongoing improvements to keep your website running smoothly.",
    icon: Wrench,
    features: [
      "Security Updates",
      "Content Updates",
      "Bug Fixes",
      "Monthly Reporting",
    ],
  },
  {
    title: "API & Payment Integration",
    description:
      "Connect your website with third-party services, payment gateways, and custom APIs securely.",
    icon: Cable,
    features: [
      "Paystack / Flutterwave",
      "WhatsApp API",
      "SMS Notifications",
      "CRM Integrations",
    ],
  }, 
];

export default services;