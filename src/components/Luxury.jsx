import React from 'react';

const Luxury = () => {
  return (
    <div className="h-[100%] flex-1 bg-very-dark-cyan lg:rounded-tr-md rounded-bl-md lg:rounded-bl-none rounded-br-md ">
      <div className="p-9 flex flex-col justify-between h-[100%] gap-8">
        <div className="flex flex-col gap-6">
          <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#000" opacity=".201" cx="20" cy="20" r="20" />
              <path
                d="M30.98 22.835c1.941 0 3.516 1.604 3.516 3.583 0 1.978-1.575 3.582-3.517 3.582s-3.516-1.604-3.516-3.582c0-1.979 1.574-3.583 3.516-3.583zm21.956 0c1.942 0 3.517 1.604 3.517 3.583 0 1.978-1.575 3.582-3.517 3.582s-3.516-1.604-3.516-3.582c0-1.979 1.574-3.583 3.516-3.583zm-9.143-10.45a1.27 1.27 0 011.819 0l3.715 3.784c4.444-.115 9.7 1.142 13.964 3.753.387.237.624.664.624 1.124 0 3.006-2.126 5.514-4.926 6.05.397-3.698-2.458-6.882-6.053-6.882-3.646 0-6.504 3.264-6.039 6.99h-9.669c.76-1.544.993-2.026 1.337-2.711l.082-.162c.421-.835 1.056-2.07 2.883-5.65 1.68-.023 3.47-.408 5.247-1.403l-2.984-3.04a1.328 1.328 0 010-1.854zm-7.68 1.064c.683-.2 1.395.202 1.592.898l.749 2.652a3.46 3.46 0 01-.247 2.51l-1.733 3.395-.216.424c-1.07-1.89-3.06-3.114-5.279-3.114-3.595 0-6.45 3.184-6.052 6.885-1.832-.347-3.414-1.537-4.278-3.276a1.331 1.331 0 01.117-1.376l.955-1.303-1.325-1.295c-.751-.735-.376-2.024.64-2.231l6.614-1.346.13-.026c.092-.019.145-.03.157-.031.314-.146 1.07-.591 1.07-1.506 0-.734.592-1.327 1.316-1.31.712.016 1.268.662 1.256 1.388a4.11 4.11 0 01-.348 1.611 22.69 22.69 0 014.7 1.146l-.7-2.473a1.314 1.314 0 01.882-1.622z"
                fill="#19B89D"
                fill-rule="nonzero"
              />
            </g>
          </svg>

          <h2 className="font-big-shoulders text-[32px] text-very-light-gray">
            LUXURY
          </h2>
          <p className="font-lexend text-[15px] text-trans-white">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
        </div>
        <button className="w-[70%] py-3 px-6 bg-very-light-gray rounded-full font-lexend text-[15px] text-very-dark-cyan active:border-very-light-gray active:border active:text-very-light-gray active:bg-very-dark-cyan">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Luxury;
