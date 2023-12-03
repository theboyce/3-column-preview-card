import React from 'react';

const Sedan = () => {
  return (
    <div className="h-[100%] flex-1 bg-bright-orange rounded-tr-md lg:rounded-tr-none rounded-tl-md lg:rounded-bl-md ">
      <div className="p-9 flex flex-col justify-between h-[100%] gap-8">
        <div className="flex flex-col gap-6">
          <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#000" opacity=".201" cx="20" cy="20" r="20" />
              <path
                d="M52.936 24.11c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm-21.957 0c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm6.948-4.848v1.429c0 .716.61 1.293 1.348 1.259a1.295 1.295 0 001.225-1.295v-1.393h8.256l13.483 1.313c.956.093 1.676.881 1.676 1.814 0 2.89-2.126 5.303-4.926 5.819.397-3.557-2.458-6.62-6.053-6.62-3.646 0-6.504 3.14-6.039 6.723h-9.879c.466-3.588-2.397-6.722-6.039-6.722-3.595 0-6.45 3.062-6.052 6.62-2.14-.398-3.916-1.912-4.61-3.931h1.142c.731 0 1.32-.598 1.285-1.322-.033-.678-.629-1.2-1.322-1.2H20v-.251c0-1.274 1.066-2.243 2.306-2.243h15.62zM42.59 11c2.645 0 4.99 1.556 5.972 3.963l.726 1.779H40.17L38.413 11h4.178zm-6.865 0l1.758 5.741H26.505l3.357-3.654A6.502 6.502 0 0134.644 11h1.082z"
                fill="#FFD473"
                fill-rule="nonzero"
              />
            </g>
          </svg>

          <h2 className="font-big-shoulders text-[32px] text-very-light-gray">
            SEDANS
          </h2>
          <p className="font-lexend text-[15px] text-trans-white">
            Choose a sedan for its affordabiity and excellent fuel economy.
            Ideal for cruisiing in the city or on your next road trip.
          </p>
        </div>
        <button className="w-[70%] py-3 px-6 bg-very-light-gray rounded-full font-lexend text-[15px] text-bright-orange active:border-very-light-gray active:border active:text-very-light-gray active:bg-bright-orange">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Sedan;
