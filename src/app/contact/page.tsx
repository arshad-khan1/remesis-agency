import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Contact() {
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
                  Get In Touch
                </h1>
                <h2 className="max-w-2xl text-sm font-normal leading-normal text-white/80 md:text-base">
                  Ready to start your next project? We'd love to hear from you.
                  Let's discuss how we can help bring your vision to life.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="mb-16 px-4 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card variant="feature" className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UX/UI Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="brand-strategy">Brand Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Office Address</h3>
                      <p className="text-white/70">
                        123 Business Street<br />
                        Suite 100<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-2xl">phone</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Phone</h3>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-2xl">email</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Email</h3>
                      <p className="text-white/70">hello@agency.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Business Hours</h3>
                      <p className="text-white/70">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <Card variant="feature" className="p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">How long does a typical project take?</h4>
                    <p className="text-sm text-white/70">
                      Project timelines vary based on scope and complexity, typically ranging from 4-12 weeks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Do you work with small businesses?</h4>
                    <p className="text-sm text-white/70">
                      Absolutely! We work with businesses of all sizes, from startups to enterprise companies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">What's your process like?</h4>
                    <p className="text-sm text-white/70">
                      We follow a structured approach: Discovery, Strategy, Design, Development, and Launch.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="p-4">
          <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-primary/30 bg-[#211c27] p-10 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white">
              Ready to start your project?
            </h2>
            <p className="max-w-lg text-white/70">
              Don't wait any longer. Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Schedule a Call</Button>
              <Button variant="secondary" size="lg">View Our Portfolio</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
