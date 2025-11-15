import { Button } from "../Button";
import { SectionHeader } from "../SectionHeader";
import { BenefitsBanner } from "./BenefitsBannerHero";

export const HomeHero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-8 lg:gap-10">
        <SectionHeader badgeText="Looking for solutions?" title="We Build Digital Experiences That Convert" subtitle="Crafting solutions that move brands forward" />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* <Button size="lg">Let&apos;s Talk</Button> */}
          <Button variant="purple" size="lg">
            Let&apos;s Talk
          </Button>
        </div>
        <div>
          <BenefitsBanner />
        </div>
      </div>
    </section>
  );
};
