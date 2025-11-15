import { SectionHeader } from "../SectionHeader";
import { ServiceCard } from "../ServiceCard";

export default function CoreServices() {
  return (
    <section>
      <SectionHeader
        title="Our Core Services"
        subtitle="We offer a complete suite of services to help your business thrive in the digital landscape."
        badgeText="Services"
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
  );
}
