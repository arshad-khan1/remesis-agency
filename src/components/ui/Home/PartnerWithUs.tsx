import Image from "next/image";
import { FeatureCard } from "../FeatureCard";
import { SectionHeader } from "../SectionHeader";

export function PartnerWithUs() {
  return (
    <section>
      <SectionHeader badgeText="Benefits" title="Partner With Us" />
        <div className="grid grid-cols-1 items-center gap-12 rounded-xl border border-primary/50 p-8 lg:grid-cols-2 lg:gap-16 lg:p-12 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101]">
          <div className="flex flex-col gap-4">
            <h2 className="gradient-text text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              What are the benefits?
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
  );
}
