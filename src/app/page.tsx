import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HomeHero } from "@/components/ui/Home/Hero";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-16 sm:px-8 md:px-10">
        {/* Hero Section */}
        <HomeHero />

        {/* Services Section */}
        <section className="mb-24">
          <SectionHeader
            title="Our Core Services"
            subtitle="We offer a complete suite of services to help your business thrive in the digital landscape."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon="code"
              title="Web Design & Development"
              description="Crafting beautiful, high-performing websites tailored to your brand."
            />
            <ServiceCard
              icon="campaign"
              title="Digital Marketing"
              description="Driving targeted traffic and leads through strategic online campaigns."
            />
            <ServiceCard
              icon="palette"
              title="Branding & Identity"
              description="Building memorable brand identities that resonate with your audience."
            />
          </div>
        </section>

        {/* Why Us Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 items-center gap-12 rounded-xl border border-primary/30 bg-white/5 p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Why Partner With Us?
              </h2>
              <p className="text-base font-normal leading-normal text-gray-400">
                We combine creativity with technology to deliver results that
                matter. Our transparent process and expert team are dedicated to
                your success from start to finish.
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <FeatureCard
                  icon="bar_chart"
                  title="Data-Driven Results"
                  description="We leverage analytics to make informed decisions and optimize for success."
                />
                <FeatureCard
                  icon="groups"
                  title="Expert Team"
                  description="Our team consists of industry veterans passionate about digital excellence."
                />
                <FeatureCard
                  icon="sync_alt"
                  title="Transparent Process"
                  description="Stay informed with clear communication and regular updates throughout your project."
                />
              </div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg lg:h-full">
              <Image
                className="h-full w-full object-cover"
                alt="A team of professionals collaborating around a laptop in a modern office."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCsjUyr9xJFycNECfDJ-ZlXFCpzU7NXxe9aq1BGBo-wNBW9wDQLfHJzGVqw5TMWlfL0cLuSBxs4vs0wUE4LRMZbFIAcGj6CKnbACTTPrsqIoWP1EcNzbSgvyNqTjnIWYGbcAmQfaQS0HewHo6K3aZ4IClsD8vkFG-PGt8NvAjxu443n-_-gKlqigO8b4ORsLR3nIKJAdc_ovWEXF4RDUgS6jyNMmr79gyGt29gdw3r74bjSfuzbjdjpIuwPEhhs34UUKwNg7dzA6wQ"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Call-to-Action Banner */}
        <section>
          <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-primary bg-primary/10 px-6 py-10 text-center shadow-2xl shadow-primary/20 md:flex-row md:px-12 md:py-12 md:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to Grow Your Business?
              </h2>
              <p className="max-w-xl text-gray-300">
                Let&apos;s work together to create something amazing. Contact us
                today for a free, no-obligation proposal.
              </p>
            </div>
            <Button size="lg" className="shrink-0">
              Get Your Free Proposal
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
