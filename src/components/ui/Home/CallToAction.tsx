import { Button } from "../Button";

export function CallToAction() {
  return (
    <section>
      <div className="h-[400px] relative mx-auto flex overflow-hidden rounded-[16px] border border-white/10 bg-[#05010F] px-6 py-14 shadow-[0_0_60px_rgba(126,34,206,0.25)] sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0%,rgba(5,1,15,0)_60%)] opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[26px_26px] opacity-20" />
        <div className="pointer-events-none absolute -right-[28%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(126,34,206,0.8)_0%,rgba(126,34,206,0.2)_40%,rgba(5,1,15,0)_68%)] opacity-80 md:block" />
        {/* <div className="pointer-events-none absolute -right-[12%] top-1/2 hidden h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-purple-400/50 opacity-70 md:block" /> */}

        <div className="relative z-10 grid w-full gap-10 md:grid-cols-[minmax(0,1fr),auto] md:items-center">
          <div className="h-full flex flex-col justify-between text-center md:max-w-xl md:text-left">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block gradient-text">Ready to unlock the next level?</span>
            </h2>
            <p className="text-lg text-white/70">
              Talk with us today to skyrocket your business to the next level!
            </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="purple" size="lg">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
