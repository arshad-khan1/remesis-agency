import { SectionHeader } from '../SectionHeader';
import { TeamMember } from '../TeamMember';
import { AnimatedGrid } from '../AnimatedSection';

const teamMembers = [
  {
    name: 'John Carter',
    role: 'CEO & Founder',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8qXgL-SK3mZRS6qvCdfjKRR6mMr59Uh_Z6x_ozgPtda36Pp47YME_bLLAMuRVhzA_fV_bgMiUUbYRYtAL9jx9XK_EjdvZJ7fo10OU2gFEyEoTcePg194UoyHqSRfRWQA18U5rjCFXJ8V53lDj6xRV7kvXEimL8IGvheGoKRabGE2z_fHha0BviaOJ7JqYYfFIUdFG25eB_mGEKSTazWjR0qy4Ik2rGmCTQieG1l2-qZvcQS3EcGkXwrizpn8Q6zkU47SUGW-qUya6',
    alt: 'Headshot of John Carter, CEO & Founder',
  },
  {
    name: 'Sophie Moore',
    role: 'Creative Director',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaBNL3YHYcudKlvzPI3eon1cqQLRVfaUKvJfPtyMIypfmUC1ijYw7Rno9fRva3nLFhQpl3SJDHPaXh2b3V0j2hhVwSUHagZmHMZtcowHzd5Z_tVvdoI-AaH8GG17kePcGYjmbu3pxzhMhGQEXDxMIMKI3xVxEHRrqcNFVb6BoypGi2XoDe2L-mGnpk9XFVSDTwRv6x-W9Yibp9wGjCxSEt4eIJIlMaOti9PGPMtTwcnBQ-X4LBYtt8vDOAzUuarcIc4ulXA1pv2fXB',
    alt: 'Headshot of Sophie Moore, Creative Director',
  },
  {
    name: 'Ben Adams',
    role: 'Lead Developer',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNDKSWf-WwFciRr0QLesbwkyScIHOulCRePo-XkQMvvVIa7eAv7NbsVFUUma2ykw8ogcLaiqA5XEqdPnqhaO_xNL-3ZqdPyiPTurF0xJyjtQOm7N7zU0YzH19KawXVSl9u2wbIl1xHUMLZPSk5hcl85bL8CUfj1cfx_ZceqAAoqyPvGGKD1Z75_gABIEpFDKDhzJ-DPFGxqF8yek9YJHljJyPzqsqPZrExDQoD4K_qug6iLV2OLmJAIF7M0Wqtt_ik4QPfNcycQM7r',
    alt: 'Headshot of Ben Adams, Lead Developer',
  },
];

export function AboutTeam() {
  return (
    <section className="space-y-12">
      <SectionHeader
        badgeText='Team'
        title="Meet the Team"
        subtitle="The brilliant minds behind our success. We're a team of strategists, designers, and developers united by a passion for creating amazing work."
      />
      <AnimatedGrid className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
