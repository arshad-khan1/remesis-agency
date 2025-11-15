import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ClientTestimonialCardProps {
  name: string;
  comment: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  rating?: number;
  role?: string;
  className?: string;
}

const TOTAL_STARS = 5;

export const ClientTestimonialCard: React.FC<ClientTestimonialCardProps> = ({
  name,
  role,
  comment,
  imageSrc,
  imageAlt = `${name} portrait`,
  rating = TOTAL_STARS,
  className,
}) => {
  const safeRating = Math.min(Math.max(Math.round(rating), 0), TOTAL_STARS);

  return (
    <article
      className={cn(
        'relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101] p-10 text-gray-200 shadow-[0_20px_60px_-30px_rgba(126,58,237,0.75)] sm:p-12',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(126,58,237,0.45)_0%,rgba(31,8,64,0.6)_35%,rgba(7,1,15,0)_75%)] opacity-80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-6 text-[160px] font-semibold leading-none text-white/4"
      >
        “
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-4 rotate-180 text-[160px] font-semibold leading-none text-white/4"
      >
        “
      </span>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur">
          <Image
            alt={imageAlt}
            src={imageSrc}
            width={56}
            height={56}
            className="size-14 rounded-full object-cover"
          />
        </div>

        <div className="mb-5 flex items-center gap-1">
          {Array.from({ length: TOTAL_STARS }).map((_, index) => {
            const isActive = index < safeRating;
            return (
              <svg
                key={index}
                aria-hidden="true"
                className={cn('size-4', isActive ? 'text-[#8f4bff]' : 'text-white/20')}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27 15.18 18l-1.45-6.18L18 7.63l-6.27-.54L10 1.5 8.27 7.09 2 7.63l4.27 4.19L4.82 18 10 15.27Z" />
              </svg>
            );
          })}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {name}
          </h3>
          {role && <p className="text-sm uppercase tracking-[0.3em] text-white/60">{role}</p>}
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          {comment}
        </p>
      </div>
    </article>
  );
};