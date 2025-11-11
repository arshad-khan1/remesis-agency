import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamMember } from "@/components/ui/TeamMember";

export default function About() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-5 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="p-4">
            <div
              className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-lg border border-primary/30 bg-cover bg-center bg-no-repeat p-4 md:gap-8"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(25, 16, 34, 0.8) 0%,
                  rgba(25, 16, 34, 1) 100%
                ),
                url('https://lh3.googleusercontent.com/aida-public/AB6AXuB94E5nfF-Zqfrt6UhNvEgtcM7X42qPuGDb3_bFMzv9vlx7QyO-hXUqunvRCHC6Ss1DQvM__Qh2f-5KfpzgO_x-1llmn3qXi9nRwEEYB00cjaHd5u0efKIxtGR-p8burjjErzF7AVGHvKvoAiQEPiqNiBjQr7TLs8BAdlPhZcDisZUIBHa6td6Xxm5kAtUS99cmU_LW3nrx-Mec3bihRusrhaL8k0-P7uCvlOznPcv-FBDfrXPqM9kqK_9ENTLGHVhzg2W-b9jXobjF')`
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white md:text-5xl">
                  About Us
                </h1>
                <h2 className="max-w-2xl text-sm font-normal leading-normal text-white/80 md:text-base">
                  We are the architects of the digital future. A creative
                  agency dedicated to building innovative and impactful
                  experiences that connect brands with their audiences.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="mb-16 px-4 py-16">
          <SectionHeader
            title="Guiding Principles"
            subtitle="We're driven by a shared purpose to push boundaries and deliver excellence. Our mission is to empower brands through creative strategy, while our vision is to redefine the landscape of digital interaction."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card variant="feature" className="flex flex-col gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-[32px]">
                  rocket_launch
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold leading-tight text-white">
                  Our Mission
                </h2>
                <p className="text-sm font-normal leading-normal text-white/60">
                  To craft unique digital solutions that drive growth and
                  create lasting value for our clients.
                </p>
              </div>
            </Card>
            <Card variant="feature" className="flex flex-col gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-[32px]">
                  visibility
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold leading-tight text-white">
                  Our Vision
                </h2>
                <p className="text-sm font-normal leading-normal text-white/60">
                  To be a global leader in digital innovation, recognized
                  for our creativity and transformative impact.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16 py-16">
          <SectionHeader
            title="Our Core Values"
            className="px-4 pb-10"
          />
          <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "lightbulb",
                title: "Innovation",
                description: "We constantly push the boundaries of technology and creativity to deliver cutting-edge solutions."
              },
              {
                icon: "groups",
                title: "Collaboration",
                description: "We believe the best results come from working together with our clients and within our team."
              },
              {
                icon: "verified",
                title: "Integrity",
                description: "We operate with transparency and honesty, building trust through every interaction."
              },
              {
                icon: "thumb_up",
                title: "Excellence",
                description: "We are committed to the highest standards of quality in everything we do."
              },
              {
                icon: "local_fire_department",
                title: "Passion",
                description: "We are passionate about our craft and dedicated to our clients' success."
              },
              {
                icon: "diversity_3",
                title: "Inclusivity",
                description: "We foster a diverse and inclusive environment where every voice is heard and valued."
              }
            ].map((value, index) => (
              <Card key={index} variant="feature" className="group flex flex-col gap-3">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="text-sm text-white/60">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Showcase */}
        <section className="mb-16 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white md:text-4xl">
              Meet the Team
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-white/70">
              The brilliant minds behind our success. We're a team of
              strategists, designers, and developers united by a passion for
              creating amazing work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="John Carter"
              role="CEO & Founder"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD8qXgL-SK3mZRS6qvCdfjKRR6mMr59Uh_Z6x_ozgPtda36Pp47YME_bLLAMuRVhzA_fV_bgMiUUbYRYtAL9jx9XK_EjdvZJ7fo10OU2gFEyEoTcePg194UoyHqSRfRWQA18U5rjCFXJ8V53lDj6xRV7kvXEimL8IGvheGoKRabGE2z_fHha0BviaOJ7JqYYfFIUdFG25eB_mGEKSTazWjR0qy4Ik2rGmCTQieG1l2-qZvcQS3EcGkXwrizpn8Q6zkU47SUGW-qUya6"
              alt="Headshot of John Carter, CEO & Founder"
            />
            <TeamMember
              name="Sophie Moore"
              role="Creative Director"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBaBNL3YHYcudKlvzPI3eon1cqQLRVfaUKvJfPtyMIypfmUC1ijYw7Rno9fRva3nLFhQpl3SJDHPaXh2b3V0j2hhVwSUHagZmHMZtcowHzd5Z_tVvdoI-AaH8GG17kePcGYjmbu3pxzhMhGQEXDxMIMKI3xVxEHRrqcNFVb6BoypGi2XoDe2L-mGnpk9XFVSDTwRv6x-W9Yibp9wGjCxSEt4eIJIlMaOti9PGPMtTwcnBQ-X4LBYtt8vDOAzUuarcIc4ulXA1pv2fXB"
              alt="Headshot of Sophie Moore, Creative Director"
            />
            <TeamMember
              name="Ben Adams"
              role="Lead Developer"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBNDKSWf-WwFciRr0QLesbwkyScIHOulCRePo-XkQMvvVIa7eAv7NbsVFUUma2ykw8ogcLaiqA5XEqdPnqhaO_xNL-3ZqdPyiPTurF0xJyjtQOm7N7zU0YzH19KawXVSl9u2wbIl1xHUMLZPSk5hcl85bL8CUfj1cfx_ZceqAAoqyPvGGKD1Z75_gABIEpFDKDhzJ-DPFGxqF8yek9YJHljJyPzqsqPZrExDQoD4K_qug6iLV2OLmJAIF7M0Wqtt_ik4QPfNcycQM7r"
              alt="Headshot of Ben Adams, Lead Developer"
            />
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="p-4">
          <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-primary/30 bg-[#211c27] p-10 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white">
              Ready to build the future?
            </h2>
            <p className="max-w-lg text-white/70">
              Let's collaborate on your next project. We're excited to learn
              about your vision and help bring it to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Work With Us</Button>
              <Button variant="secondary" size="lg">View Our Projects</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
