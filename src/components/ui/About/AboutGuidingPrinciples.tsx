import { SectionHeader } from '../SectionHeader';
import { AboutCard } from './AboutCard';
import { AnimatedGrid } from '../AnimatedSection';

const guidingPrinciples = [
  {
    icon: 'rocket_launch',
    title: 'Our Mission',
    description:
      'To craft unique digital solutions that drive growth and create lasting value for our clients.',
  },
  {
    icon: 'visibility',
    title: 'Our Vision',
    description:
      'To be a global leader in digital innovation, recognized for our creativity and transformative impact.',
  },
];

export function AboutGuidingPrinciples() {
  return (
    <section className="space-y-12">
      <SectionHeader
        title="Guiding Principles"
        subtitle="We're driven by a shared purpose to push boundaries and deliver excellence. Our mission is to empower brands through creative strategy, while our vision is to redefine the landscape of digital interaction."
      />
      <AnimatedGrid className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.2}>
        {guidingPrinciples.map((principle) => (
          <AboutCard key={principle.title} {...principle} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
