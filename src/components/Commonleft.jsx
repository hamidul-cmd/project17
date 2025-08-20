import React from "react";

function Commonleft({ capsule, title, pera, button }) {
  return (
    <>
      <div>
        <div className="text-sm font-semibold leading-5.3 py-1 px-3.5 rounded-full text-white bg-orange-500 w-fit mb-4">
          {capsule}
        </div>
        <h2 className="text-34 font-semibold leading-10 text-black-700 mb-6 dark:text-white 3xl:text-54 3xl:leading-16">
          {title}
        </h2>
        <p className="text-base leading-6.6 text-[#5F6980] mb-10 dark:text-black-400 3xl:text-lg 3xl:leading-7.5">
          {pera}
        </p>
        <a
          href="#"
          className="dark:text-white w-fit flex items-center gap-2 text-sm font-semibold leading-5.3 3xl:text-base 3xl:leading-6.6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="12"
              fill="url(#paint0_linear_801_15081)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5159 8.57366C9.9891 8.23845 9.2998 8.61684 9.2998 9.2412V15.2204C9.2998 15.8448 9.9891 16.2232 10.5159 15.888L15.2138 12.8984C15.7024 12.5874 15.7024 11.8742 15.2138 11.5633L10.5159 8.57366Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_801_15081"
                x1="14.0107"
                y1="33.9893"
                x2="-9.98928"
                y2="9.98928"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FB432C" />
                <stop offset="1" stop-color="#FF591E" />
              </linearGradient>
            </defs>
          </svg>
          {button}
        </a>
      </div>
    </>
  );
}

export default Commonleft;
