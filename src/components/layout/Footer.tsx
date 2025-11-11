import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center border-t border-solid border-white/10 bg-[#141118]">
      <div className="w-full max-w-7xl px-4 py-12 sm:px-8 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="flex items-center gap-3">
              <div className="size-5">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6_330_footer)">
                    <path
                      clipRule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_330_footer">
                      <rect fill="white" height="48" width="48" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight text-white">
                Agency
              </h2>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Agency. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-6.1 1.2-12.1 1.2-12.1 1.2s-3.2 0-5.6-.7c-2.4-.7-4.2-2.3-4.2-2.3s-1.8 4.2.5 6.1c2.3 1.9 5.2 2.6 5.2 2.6s-3.2 1.2-6.1-1.2c-2.9-2.4-2.1-7.8-2.1-7.8s1 .4 2.9.4c1.9 0 3.2-.4 3.2-.4s-2.1-1.2-2.9-3.2c-.8-2-1.2-4.5 1.2-6.1C7.8 2.1 9.1 1.4 9.1 1.4s1.9.4 3.2 2.1c1.3 1.7 1.2 3.2 1.2 3.2s2.9-.4 4.9-1.2c2-1.2 3.6-2.9 3.6-2.9z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect height="12" width="4" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
