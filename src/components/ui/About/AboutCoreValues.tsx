import { SectionHeader } from '../SectionHeader';
import { AboutCard } from './AboutCard';

const coreValues = [
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description:
      'We constantly push the boundaries of technology and creativity to deliver cutting-edge solutions.',
  },
  {
    icon: 'groups',
    title: 'Collaboration',
    description:
      'We believe the best results come from working together with our clients and within our team.',
  },
  {
    icon: 'verified',
    title: 'Integrity',
    description: 'We operate with transparency and honesty, building trust through every interaction.',
  },
  {
    icon: 'thumb_up',
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in everything we do.',
  },
  {
    icon: 'local_fire_department',
    title: 'Passion',
    description: "We are passionate about our craft and dedicated to our clients' success.",
  },
  {
    icon: 'diversity_3',
    title: 'Inclusivity',
    description:
      'We foster a diverse and inclusive environment where every voice is heard and valued.',
  },
];

export function AboutCoreValues() {
  return (
    <section className="space-y-12">
      <SectionHeader badgeText='Values' title="Our Core Values" className="pb-6" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => (
          <AboutCard key={value.title} {...value} />
        ))}
      </div>
    </section>
  );
}
