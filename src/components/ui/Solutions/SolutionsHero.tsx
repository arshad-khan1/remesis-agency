// import { Button } from "../Button";
import { SectionHeader } from "../SectionHeader";

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat px-6 py-20 text-center sm:px-12 md:px-20">
      <div className="mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center gap-6">
        <SectionHeader
          badgeText="Solutions"
          title="Innovative Solutions for Digital Growth"
          subtitle="We craft cutting-edge digital experiences that elevate your brand and drive results. Discover our strategic approach to solving your most complex challenges."
        />
        {/* <Button variant="purple" size="lg">Explore Our Services</Button> */}
      </div>
    </section>
  );
}
