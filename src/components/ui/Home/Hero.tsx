import { Button } from "../Button";
import { ButtonShootingStarBorder } from "../ShinyButton";
import { BenefitsBanner } from "./BenefitsBannerHero";

export const HomeHero = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-8 lg:gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <div className="w-fit mx-auto">
            <ButtonShootingStarBorder text="Looking for solutions?" />
          </div>
          <h1 className="gradient-text text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            We Build Digital Experiences That Convert
          </h1>
          <h2 className="text-base font-normal leading-normal text-gray-300 sm:text-lg">
            Crafting solutions that move brands forward
          </h2>
        </div>
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
