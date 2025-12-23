export type SubService = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  subServices: SubService[];
};

export const services: Service[] = [
  {
    slug: "website-engineering",
    icon: "language",
    title: "Website Engineering",
    description:
      "Custom-coded websites built with structured frontend and backend architecture, optimised for performance, security, and long-term scalability.",
    longDescription:
      "We design and develop custom-coded websites built for performance, security, and scalability. No templates, no page builders—just engineered web development.",
    subServices: [
      {
        title: "Custom Website Development",
        description:
          "No templates, no page builders. Clean, custom-coded solutions.",
      },
      {
        title: "Frontend & Backend Architecture",
        description: "Structured development for both client and server side.",
      },
      {
        title: "Performance & Security",
        description:
          "Optimised for speed and built with security-first principles.",
      },
      {
        title: "Scalable Web Builds",
        description:
          "Business and corporate sites designed for long-term growth.",
      },
    ],
  },
  {
    slug: "application-development",
    icon: "devices_other",
    title: "Application Development",
    description:
      "Web and mobile applications developed with modular logic, clean data flow, and systems that scale as features and users grow.",
    longDescription:
      "We build web and mobile applications that function as real software systems. Everything is modular, maintainable, and production-ready.",
    subServices: [
      {
        title: "Custom Web, Android and IOS Applications",
        description:
          "Bespoke applications tailored to your specific business needs.",
      },
      {
        title: "Scalable Backend Logic",
        description: "Robust server-side systems with structured data flow.",
      },
      {
        title: "API-Based Systems",
        description: "Feature-driven architecture built around resilient APIs.",
      },
      {
        title: "Modular Architecture",
        description: "Applications designed to grow in users and complexity.",
      },
    ],
  },
  {
    slug: "custom-software-systems",
    icon: "home_repair_service",
    title: "Custom Software Systems",
    description:
      "Business software, dashboards, and internal tools engineered around workflows, integrations, and maintainable codebases.",
    longDescription:
      "We engineer internal tools and business software around how organisations actually work. This is where business logic meets clean code.",
    subServices: [
      {
        title: "Internal Platforms",
        description:
          "Dashboards and admin panels designed for operational efficiency.",
      },
      {
        title: "Workflow Automation",
        description:
          "Reduce manual effort with custom-built automation systems.",
      },
      {
        title: "System Integrations",
        description: "Seamlessly connect your business tools and data sources.",
      },
      {
        title: "Maintainable Codebases",
        description:
          "Software designed to reduce technical debt and last long-term.",
      },
    ],
  },
  {
    slug: "digital-marketing-growth",
    icon: "campaign",
    title: "Digital Marketing & Growth",
    description:
      "Performance-focused digital marketing is built on data, tracking systems, and platforms designed to convert traffic into measurable growth.",
    longDescription:
      "Our marketing work is tightly connected to the systems we build—never disconnected from data or technology. Marketing at Ramesys is treated as a system.",
    subServices: [
      {
        title: "Performance Marketing",
        description: "Data-driven campaigns focused on measurable growth.",
      },
      {
        title: "SEO Engineering",
        description:
          "Search optimization built around site structure and code quality.",
      },
      {
        title: "Conversion Tracking",
        description: "Advanced tracking systems to measure every touchpoint.",
      },
      {
        title: "Analytics-Driven Strategy",
        description:
          "Marketing decisions driven by hard data, not assumptions.",
      },
    ],
  },
];

const decodeSlug = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");

export const getServiceBySlug = (slug: string) => {
  const normalizedSlug = normalizeSlug(decodeSlug(slug));

  return services.find(
    (service) =>
      normalizeSlug(service.slug) === normalizedSlug ||
      normalizeSlug(service.title) === normalizedSlug
  );
};
