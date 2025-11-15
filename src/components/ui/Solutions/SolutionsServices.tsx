import { services } from "@/data/services";
import { SectionHeader } from "../SectionHeader";
import { ServiceCard } from "../ServiceCard";

export function SolutionsServices() {
  return (
    <section className="space-y-10">
      <SectionHeader
        badgeText="Services"
        title="Our Services"
        subtitle="From strategy to execution, we offer end-to-end capabilities that accelerate your digital roadmap."
        className="pb-4"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            icon={service.icon}
            title={service.title}
            description={service.description}
            subServiceCount={service.subServices.length}
            href={`/solutions/${service.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
