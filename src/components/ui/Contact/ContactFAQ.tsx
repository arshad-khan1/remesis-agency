import { ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/motion-primitives/accordion";
import { SectionHeader } from "../SectionHeader";

const faqs = [
  {
    value: "services",
    question: "What services do you offer?",
    answer:
      "We provide Growth Marketing, Copywriting, Ads Management, Webflow Development, SEO, and Ads Creatives.",
  },
  {
    value: "subscription",
    question: "How does your subscription model work?",
    answer:
      "Choose a plan that fits your needs, submit requests as you go, and receive ongoing updates with a predictable monthly cost.",
  },
  {
    value: "custom-projects",
    question: "Can I opt for a custom project instead of a subscription?",
    answer:
      "Absolutely. We tailor standalone engagements for launches, campaigns, or specialized initiatives outside of subscription plans.",
  },
  {
    value: "support",
    question: "Do you offer training and ongoing support?",
    answer:
      "Yes, we equip your team with handoff sessions, process documentation, and continued support whenever you need it.",
  },
  {
    value: "results",
    question: "How long does it take to see results from your services?",
    answer:
      "Timelines vary by scope, but most clients begin seeing measurable traction within the first 4–8 weeks of collaboration.",
  },
  {
    value: "switching",
    question: "Can I switch between subscription and project-based services?",
    answer:
      "You can move between models at any time. We keep scope transparent so you can flex resources based on your roadmap.",
  },
];

export function ContactFAQ() {
  return (
    <section>
      <SectionHeader badgeText="FAQ" title="Got questions?" centered />
      <Accordion
        className="flex w-full flex-col gap-4 divide-y divide-zinc-200 dark:divide-zinc-700"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.value}
            value={faq.value}
            className="py-4 px-4 group overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101]"
          >
            <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center justify-between text-lg gradient-text">
                <div>{faq.question}</div>
                <ChevronUp className="h-8 w-8 text-[#5F19E4] transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50 cursor-pointer" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-zinc-400 text-md">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
