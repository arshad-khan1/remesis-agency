import { SectionHeader } from '../SectionHeader';
import { ClientTestimonialCard } from '../ClientTestimonialCard';

const testimonials = [
  {
    name: 'Quinn Bell',
    role: 'Product Founder',
    rating: 5,
    imageSrc: 'https://images.pexels.com/photos/25482494/pexels-photo-25482494.jpeg',
    comment: (
      <>
        <strong className="text-white">BOOSTFACTOR</strong> has been great to work with. Their ability to develop and
        transform my work has exceeded my expectations. Their communication with me has been prompt and clear. I would{' '}
        <strong className="text-white">highly recommend</strong> them.
      </>
    ),
  },
];

export function WhatTheySay() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader badgeText="What they say" title="Client Testimonials" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <ClientTestimonialCard
            key={testimonial.name}
            {...testimonial}
            className="col-span-full mx-auto"
          />
        ))}
      </div>
    </section>
  );
}