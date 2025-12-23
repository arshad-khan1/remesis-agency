import { SectionHeader } from '../SectionHeader';
import { TeamMember } from '../TeamMember';
import { AnimatedGrid } from '../AnimatedSection';

const teamMembers = [
  {
    name: 'Avinava',
    role: 'Founder & Director',
    imageUrl:
      '/images/Avinava.png',
    alt: 'Headshot of Avinava, Founder & Director',
    description: 'Responsible for vision, strategy, client relationships, and steering Ramesys as it grows into a scalable technology company.'
  },
  {
    name: 'Prasun',
    role: 'Operations & Coordination',
    imageUrl:
      '/images/Prasun.png',
    alt: 'Headshot of Prasun, Operations & Coordination',
    description: 'Oversees execution flow, internal coordination, and ensures projects move smoothly from planning to delivery.'
  },
  // {
  //   name: 'Chirag',
  //   role: 'Technical Lead',
  //   imageUrl:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuBNDKSWf-WwFciRr0QLesbwkyScIHOulCRePo-XkQMvvVIa7eAv7NbsVFUUma2ykw8ogcLaiqA5XEqdPnqhaO_xNL-3ZqdPyiPTurF0xJyjtQOm7N7zU0YzH19KawXVSl9u2wbIl1xHUMLZPSk5hcl85bL8CUfj1cfx_ZceqAAoqyPvGGKD1Z75_gABIEpFDKDhzJ-DPFGxqF8yek9YJHljJyPzqsqPZrExDQoD4K_qug6iLV2OLmJAIF7M0Wqtt_ik4QPfNcycQM7r',
  //   alt: 'Headshot of Chirag, Technical Lead',
  //   description: 'Handles core technical decisions, system design, and oversees the overall technology stack and architecture across projects.'
  // },
  // {
  //   name: 'Arshad',
  //   role: 'Lead Developer',
  //   imageUrl:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuBNDKSWf-WwFciRr0QLesbwkyScIHOulCRePo-XkQMvvVIa7eAv7NbsVFUUma2ykw8ogcLaiqA5XEqdPnqhaO_xNL-3ZqdPyiPTurF0xJyjtQOm7N7zU0YzH19KawXVSl9u2wbIl1xHUMLZPSk5hcl85bL8CUfj1cfx_ZceqAAoqyPvGGKD1Z75_gABIEpFDKDhzJ-DPFGxqF8yek9YJHljJyPzqsqPZrExDQoD4K_qug6iLV2OLmJAIF7M0Wqtt_ik4QPfNcycQM7r',
  //   alt: 'Headshot of Arshad, Lead Developer',
  //   description: 'The engineering backbone of the company—responsible for writing, structuring, and optimizing the code that powers our websites, applications, and software systems.'
  // },
];

export function AboutTeam() {
  return (
    <section className="space-y-12">
      <SectionHeader
        badgeText='Team'
        title="Meet the Team"
        subtitle="Ramesys is led by a small, focused team that combines business direction, technical leadership, and hands-on development."
      />
      <AnimatedGrid className="flex flex-wrap justify-center gap-10" stagger={0.15}>
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
