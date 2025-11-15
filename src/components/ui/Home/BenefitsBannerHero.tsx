export const BenefitsBanner = () => {
  return (
    <div
      className="w-full rounded-full bg-linear-to-r from-purple-900/20 via-purple-800/30 to-violet-900/20 px-6 py-4 shadow-lg"
      style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
    >
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
        <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient1)"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check-icon lucide-check text-purple-700"
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M20 6 9 17l-5-5" />
            </svg>
          <span className="text-md font-semibold text-white gradient-text">
            Grow Like a PRO
          </span>
        </div>
        <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient2)"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check-icon lucide-check text-purple-700"
            >
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M20 6 9 17l-5-5" />
            </svg>
          <span className="text-md font-semibold text-white gradient-text">
            Save up to: $20,000/mo
          </span>
        </div>
        <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient3)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-icon lucide-check text-purple-700"
            >
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M20 6 9 17l-5-5" />
            </svg>
          <span className="text-md font-semibold text-white gradient-text">
            Cancel Anytime
          </span>
        </div>
      </div>
    </div>
  );
};
