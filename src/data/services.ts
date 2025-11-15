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
    slug: "web-development",
    icon: "language",
    title: "Web Development",
    description:
      "Designing and engineering high-performing, responsive websites that reflect your brand and deliver measurable results.",
    longDescription:
      "We architect full-stack web solutions tailored to your business objectives, pairing modern frameworks with robust infrastructure to ensure speed, security, and scalability.",
    subServices: [
      {
        title: "Custom Website Development",
        description:
          "Build bespoke marketing and corporate websites with pixel-perfect accuracy and optimized performance.",
      },
      {
        title: "Content Management Systems",
        description:
          "Implement flexible CMS solutions like headless CMS or WordPress tailored to your workflows.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "Deliver app-like experiences on the web with offline support, push notifications, and installability.",
      },
      {
        title: "Website Optimization",
        description:
          "Refine existing properties with accessibility audits, performance tuning, and SEO enhancements.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Keep your web presence healthy with proactive monitoring, updates, and feature enhancements.",
      },
    ],
  },
  {
    slug: "app-development",
    icon: "devices_other",
    title: "App Development",
    description:
      "Building secure, scalable applications across web, mobile, and desktop platforms with seamless user experiences.",
    longDescription:
      "From concept validation to post-launch iterations, we develop applications that perform flawlessly and delight users on every device.",
    subServices: [
      {
        title: "Cross-Platform Mobile Apps",
        description:
          "Ship iOS and Android experiences faster with shared codebases powered by React Native or Flutter.",
      },
      {
        title: "Product Prototyping",
        description:
          "Rapidly validate product ideas with clickable prototypes and MVPs that attract users and stakeholders.",
      },
    ],
  },
  {
    slug: "design-and-branding",
    icon: "design_services",
    title: "Design & Branding",
    description:
      "Crafting cohesive visual identities and intuitive interfaces that resonate with your audience and strengthen brand loyalty.",
    longDescription:
      "Our designers translate your vision into compelling visuals and experiences that differentiate your brand in competitive markets.",
    subServices: [
      {
        title: "Brand Identity Systems",
        description:
          "Define logos, typography, color palettes, and visual guidelines that tell a consistent brand story.",
      },
    ],
  },
  {
    slug: "digital-marketing-and-advertising",
    icon: "campaign",
    title: "Digital Marketing and Advertising",
    description:
      "Creating data-driven campaigns that amplify reach, capture qualified leads, and maximize your return on ad spend.",
    longDescription:
      "We connect strategy, content, and paid media to build repeatable growth engines aligned with your revenue goals.",
    subServices: [
      {
        title: "Performance Campaigns",
        description:
          "Plan, launch, and optimize paid campaigns across search, social, and display channels.",
      },
      {
        title: "Content Marketing",
        description:
          "Produce editorial calendars, blog content, and assets that engage and educate your audiences.",
      },
      {
        title: "Email & Lifecycle Marketing",
        description:
          "Nurture leads with segmentation, automation, and personalized messaging flows.",
      },
      {
        title: "SEO & SEM",
        description:
          "Improve discoverability with keyword research, technical optimization, and search ads.",
      },
      {
        title: "Social Media Management",
        description:
          "Grow communities through channel strategy, content creation, and analytics tracking.",
      },
    ],
  },
  {
    slug: "data-and-analytics",
    icon: "query_stats",
    title: "Data and Analytics",
    description:
      "Transforming raw data into actionable insights with modern analytics stacks, dashboards, and performance intelligence.",
    longDescription:
      "We unify fragmented data sources and surface dashboards that empower better, faster decisions across your organization.",
    subServices: [
      {
        title: "Analytics Implementation",
        description:
          "Configure tracking plans and instrumentation across web, mobile, and product touchpoints.",
      },
      {
        title: "Data Warehousing",
        description:
          "Design scalable, secure data pipelines and warehouses for single sources of truth.",
      },
      {
        title: "Business Intelligence Dashboards",
        description:
          "Build interactive dashboards in tools like Looker, Power BI, and Tableau for on-demand insights.",
      },
      {
        title: "Advanced Insights & Forecasting",
        description:
          "Apply statistical modeling and forecasting to reveal growth opportunities and risks.",
      },
    ],
  },
  {
    slug: "ai-automation-and-chatbots",
    icon: "smart_toy",
    title: "AI, Automation & Chatbots",
    description:
      "Implementing intelligent automations and conversational assistants that optimize operations and elevate customer engagement.",
    longDescription:
      "We blend AI, machine learning, and process design to automate repetitive tasks and deliver responsive customer experiences.",
    subServices: [
      {
        title: "AI Strategy & Roadmapping",
        description:
          "Identify the highest-impact AI opportunities and craft realistic implementation plans.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate manual processes with integrations, RPA, and no-code tooling.",
      },
      {
        title: "Conversational Interfaces",
        description:
          "Deploy chatbots and virtual assistants that handle support, onboarding, and lead capture.",
      },
    ],
  },
  {
    slug: "technical-services",
    icon: "home_repair_service",
    title: "Technical Services",
    description:
      "Providing integrations, API development, and ongoing technical support to keep your digital ecosystem running smoothly.",
    longDescription:
      "Our engineers extend and stabilize your technology stack with enterprise-grade integrations, automation, and managed services.",
    subServices: [
      {
        title: "System Integrations",
        description:
          "Connect SaaS platforms, internal tools, and data sources through resilient integrations.",
      },
      {
        title: "API Design & Development",
        description:
          "Design, document, and maintain REST/GraphQL APIs that empower partners and product teams.",
      },
      {
        title: "Legacy Modernization",
        description:
          "Refactor and upgrade legacy applications to modern frameworks and infrastructure.",
      },
      {
        title: "Quality Assurance",
        description:
          "Implement automated testing suites and manual QA programs for reliable releases.",
      },
      {
        title: "Security Hardening",
        description:
          "Conduct audits, vulnerability assessments, and remediation to protect critical systems.",
      },
      {
        title: "Technical Documentation",
        description:
          "Produce clear developer guides and runbooks to align teams and accelerate onboarding.",
      },
      {
        title: "Managed Services",
        description:
          "Provide tiered support plans, monitoring, and incident response for business continuity.",
      },
      {
        title: "Training & Enablement",
        description:
          "Upskill internal teams with workshops, knowledge bases, and tailored enablement resources.",
      },
    ],
  },
  {
    slug: "ecommerce-and-business-tools",
    icon: "shopping_cart",
    title: "E-commerce & Business Tools",
    description:
      "Delivering end-to-end commerce solutions with personalized shopping experiences and streamlined back-office workflows.",
    longDescription:
      "We design omnichannel commerce journeys and implement operational systems that empower your teams to sell more efficiently.",
    subServices: [
      {
        title: "Storefront Design & Build",
        description:
          "Launch immersive storefronts on Shopify, WooCommerce, or custom stacks.",
      },
      {
        title: "Subscription & Membership Platforms",
        description:
          "Build recurring revenue engines with seamless billing and retention flows.",
      },
      {
        title: "Marketplace Integrations",
        description:
          "Connect to Amazon, Etsy, and other marketplaces to broaden distribution.",
      },
      {
        title: "Product Information Management",
        description:
          "Centralize product catalogs with automated enrichment and syndication.",
      },
      {
        title: "Order & Inventory Automation",
        description:
          "Sync orders, inventory, and fulfillment across channels for real-time visibility.",
      },
      {
        title: "Payments & Checkout Optimization",
        description:
          "Reduce friction at checkout with optimized flows and global payment options.",
      },
      {
        title: "Customer Loyalty Programs",
        description:
          "Design point-based and tiered loyalty programs that drive repeat purchases.",
      },
      {
        title: "Business Operations Dashboards",
        description:
          "Monitor sales, customer behavior, and operational KPIs with unified dashboards.",
      },
    ],
  },
  {
    slug: "cloud-and-devops",
    icon: "cloud_sync",
    title: "Cloud & DevOps",
    description:
      "Architecting cloud-native infrastructure with automated deployments, observability, and rock-solid reliability.",
    longDescription:
      "Our DevOps teams automate delivery pipelines and implement resilient cloud architectures tailored to your velocity and uptime needs.",
    subServices: [
      {
        title: "Infrastructure as Code",
        description:
          "Provision repeatable cloud environments using Terraform, Pulumi, or CloudFormation.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automate testing and deployments with pipelines that reduce risk and accelerate releases.",
      },
      {
        title: "Observability & Monitoring",
        description:
          "Implement logging, tracing, and alerting strategies for proactive incident response.",
      },
      {
        title: "Cloud Cost Optimization",
        description:
          "Optimize resource usage and spending with reserved capacity planning and automation.",
      },
    ],
  },
  {
    slug: "consulting-and-strategy",
    icon: "emoji_objects",
    title: "Consulting & Strategy",
    description:
      "Partnering to shape your digital roadmap, prioritize investments, and realize transformational outcomes with confidence.",
    longDescription:
      "We collaborate with stakeholders to translate vision into tangible roadmaps, ensuring initiatives deliver business value.",
    subServices: [
      {
        title: "Digital Transformation Roadmaps",
        description:
          "Align leadership around phased initiatives that modernize customer and employee experiences.",
      },
      {
        title: "Product Strategy",
        description:
          "Define product-market fit, feature prioritization, and go-to-market plans grounded in research.",
      },
      {
        title: "Innovation Workshops",
        description:
          "Facilitate stakeholder workshops to ideate, prototype, and evaluate new digital opportunities.",
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
