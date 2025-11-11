import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Solutions() {
  const caseStudies = [
    {
      client: "TechCorp",
      title: "E-commerce Platform Overhaul",
      description: "Complete redesign and backend migration resulted in a 300% increase in user engagement and a 50% boost in sales.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvDUxYXxYvHhRaYy4Hcps-dAfAYpZhphPpZK7QUazpYmto7bxmS-3XCnmO9TGoY-hGpkz66r_WpvABBce5W3hoRHDqJ1e3WqyCV6wLwrXyjhz6DZW7gbE4hrFuy5tTxINJXVQR0qUzcYbvETYJal75n56Q6Kjxvf-Zm9-vgx48bCEhY_UJz0jR3CbNWrprl2_x_9xlxV5l0hXOm2jWtP2kwkq1kNB7SFjcBybUZGd_FOZy0F9jFBEPpV6xd_jG7fgWpkNnbSHADgfN"
    },
    {
      client: "Innovate Inc.",
      title: "Mobile App Launch Campaign",
      description: "Our targeted digital marketing strategy led to 1 million downloads within the first three months of launch.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA07hGEafGLcHE2DbQ4OuaTXzxIK9--d2iujqE7g3Ihm65GaRI9UNAaQVkPXdhN5jl6jXm9pt_ewSd9Utk4Rwq-3aPCkNTT2Ux-h45V5751PVOl283xpWxVu7oRKmm3VBhnRLQRGag1qt34fe0Y6Em0E_eSJ8_F8K0DV79KI5fgPkp-uHRtAzaiDSAa_4sNaRlEe-zBLNniFrzcsWak70py9sNZ0gctdVC6jnyGFq1d1Aqlaa6hi3DDf0R0VHfnBsaB7mSm26K_kKHY"
    },
    {
      client: "FutureHealth",
      title: "Brand Identity Refresh",
      description: "We developed a new brand that increased market recognition and contributed to a 40% growth in customer trust.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFy6KAUgCDGYrgvumE0I9GXNaBAfyFOhu7_CJF5zEK3d0-hbK6io8b7LQLpKSmTFrMKG1MZwwz_V-URQnAVawXO7ApGGaGsVwzEfuWw0n4KEcXGf-WAod-DJQ0nwsE2cWomxrfbSZI75V-dGrXw3zXJaTju6OHUg32Nz4GsVlx_irgCapFM9iQL-4qBr-bOb9TZma92ikMn5PVjjXqqpAVmcBKtYKxbUHYns_PFN9q1rozrdyhPw7L0N2bGZ8hJUCLhTDVSmtTusi2"
    }
  ];

  return (
    <Layout>
      <div className="flex flex-1 justify-center px-4 py-5 sm:px-8 md:px-20 lg:px-40">
        <div className="flex max-w-[960px] flex-1 flex-col">
          {/* Hero Section */}
          <main className="flex flex-col gap-16 py-16 md:gap-24 md:py-24">
            <div className="px-4">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white sm:text-5xl md:text-6xl">
                    Innovative Solutions for Digital Growth
                  </h1>
                  <h2 className="mx-auto max-w-2xl text-sm font-normal leading-normal text-white/80 sm:text-base md:text-lg">
                    We craft cutting-edge digital experiences that elevate
                    your brand and drive results. Discover our strategic
                    approach to solving your most complex challenges.
                  </h2>
                </div>
                <Button size="lg">Explore Our Services</Button>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-6">
              <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
                Our Core Services
              </h2>
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
                <ServiceCard
                  icon="code_blocks"
                  title="Web Development"
                  description="Building robust and scalable web solutions tailored to your business needs, from concept to launch."
                />
                <ServiceCard
                  icon="design_services"
                  title="UX/UI Design"
                  description="Creating intuitive and beautiful user interfaces that provide meaningful and relevant experiences to users."
                />
                <ServiceCard
                  icon="trending_up"
                  title="Digital Marketing"
                  description="Driving growth and engagement through data-driven marketing campaigns across all digital channels."
                />
                <ServiceCard
                  icon="verified"
                  title="Brand Strategy"
                  description="Developing a powerful brand identity that resonates with your audience and sets you apart from the competition."
                />
              </div>
            </div>

            {/* Case Studies Section */}
            <div className="flex flex-col gap-6">
              <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-white">
                Our Track Record of Success
              </h2>
              <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-4 rounded-lg border border-primary/50 bg-white/5 p-6"
                  >
                    <div
                      className="aspect-video h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${study.imageUrl}')`
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-primary">
                        {study.client}
                      </p>
                      <h3 className="text-xl font-bold text-white">
                        {study.title}
                      </h3>
                      <p className="text-sm font-normal leading-normal text-white/70">
                        {study.description}
                      </p>
                      <a
                        className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                        href="#"
                      >
                        Learn More
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 py-10">
              <div className="flex flex-col items-center gap-6 rounded-lg border border-primary/50 bg-primary/20 p-8 text-center md:p-12">
                <h2 className="text-3xl font-black leading-tight tracking-[-0.033em] text-white md:text-4xl">
                  Ready to build your next big thing?
                </h2>
                <p className="max-w-xl text-white/80">
                  Let's collaborate to create something amazing. We're here to
                  turn your vision into a reality that drives results and
                  captivates your audience.
                </p>
                <Button size="lg">Get in Touch</Button>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 px-4 py-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="size-5 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-sm text-white/60">
                  © 2024 AgencyLogo. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  className="text-white/60 transition-colors hover:text-white"
                  href="#"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="text-white/60 transition-colors hover:text-white"
                  href="#"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
