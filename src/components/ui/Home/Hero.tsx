'use client';

import { Button } from "../Button";
import { SectionHeader } from "../SectionHeader";
import { BenefitsBanner } from "./BenefitsBannerHero";
import { FadeIn } from "../FadeIn";
import { motion } from "motion/react";

export const HomeHero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-8 lg:gap-10">
        <SectionHeader badgeText="Looking for solutions?" title="We Build Digital Experiences That Convert" subtitle="Crafting solutions that move brands forward" />
        <FadeIn delay={0.6} duration={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="purple" size="lg">
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>
        </FadeIn>
        <FadeIn delay={0.8} duration={0.6} direction="none">
          <div>
            <BenefitsBanner />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
