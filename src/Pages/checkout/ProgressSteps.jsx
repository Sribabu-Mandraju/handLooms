const ProgressSteps = ({ step }) => {
  return (
    <div className="mb-12 relative">
      {/* Progress bar background */}
      <div className="absolute top-[25%] left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full"></div>

      {/* Active progress bar */}
      <div
        className="absolute top-[25%] left-0 h-1 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-500 rounded-full"
        style={{ width: `${((step - 1) / 2) * 100}%` }}
      ></div>

      <div className="relative z-10 mx-[-1%] flex justify-between">
        {/* Step 1: Cart */}
        <StepIcon
          step={1}
          currentStep={step}
          label="CART"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          }
        />

        {/* Step 2: Address */}
        <StepIcon
          step={2}
          currentStep={step}
          label="ADDRESS"
          icon={
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </>
          }
        />

        {/* Step 3: Delivery */}
        <StepIcon
          step={3}
          currentStep={step}
          label="DELIVERY"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          }
        />
      </div>
    </div>
  );
};

const StepIcon = ({ step, currentStep, label, icon }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 transform ${
        currentStep >= step
          ? "bg-blue-600 text-white ring-4 ring-blue-100 scale-110"
          : "bg-white text-gray-400 border-2 border-gray-200 scale-100"
      } mb-3`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
    </div>
    <span
      className={`text-sm md:text-base font-bold transition-colors duration-500 ${
        currentStep >= step ? "text-blue-600" : "text-gray-400"
      }`}
    >
      {label}
    </span>
    {currentStep === step && (
      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
    )}
  </div>
);

export default ProgressSteps;
