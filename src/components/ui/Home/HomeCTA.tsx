import { CallToAction } from "../CallToAction";

export function HomeCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Ready to unlock the next level?"
        description="Talk with us today to skyrocket your business to the next level!"
        primaryAction={{ label: "Book a Call", variant: "purple", size: "lg" }}
      />
    </section>
  );
}
