const Services = () => {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#111418] justify-between overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
        {/* Header Section */}
        <div className="flex items-center bg-[#111418] p-4 pb-2 justify-end">
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-white" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8">
          {/* Title and Description */}
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">Services</h1>
            <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-normal mb-8">
            We offer a suite of services tailored to the needs of creators and innovators:
            </p>
          </div>
  
          {/* Timeline Section */}
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-[40px_1fr] gap-x-4">
              {/* Transparency */}
              <div className="flex flex-col items-center gap-1 pt-5">
                <div className="size-2 rounded-full bg-white"></div>
                <div className="w-[1.5px] bg-[#3b4754] h-4 grow"></div>
              </div>
              <div className="flex flex-1 flex-col pt-3 pb-5">
                <p className="text-white text-lg sm:text-xl font-medium leading-normal">Contract Storage</p>
                <p className="text-white text-sm sm:text-base font-normal leading-normal mt-2">
                Securely store and manage your contracts on the blockchain.
                </p>
              </div>
  
              {/* Automation */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#3b4754] h-4"></div>
                <div className="size-2 rounded-full bg-white"></div>
                <div className="w-[1.5px] bg-[#3b4754] h-4 grow"></div>
              </div>
              <div className="flex flex-1 flex-col pt-3 pb-5">
                <p className="text-white text-lg sm:text-xl font-medium leading-normal">Digital Rights Management</p>
                <p className="text-white text-sm sm:text-base font-normal leading-normal mt-2">
                Protect your creative works with immutable proof of ownership.
                </p>
              </div>
  
              {/* Security */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#3b4754] h-4"></div>
                <div className="size-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-1 flex-col pt-3 pb-5">
                <p className="text-white text-lg sm:text-xl font-medium leading-normal">Royalty Distribution</p>
                <p className="text-white text-sm sm:text-base font-normal leading-normal mt-2">
                Automate royalty payments to ensure fair compensation for your work.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#3b4754] h-4"></div>
                <div className="size-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-1 flex-col pt-3 pb-5">
                <p className="text-white text-lg sm:text-xl font-medium leading-normal">Collaboration Tools</p>
                <p className="text-white text-sm sm:text-base font-normal leading-normal mt-2">
                Connect with other creators and stakeholders in a secure ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Section */}
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-8">
          <div className="flex justify-center py-6">
            <button className="flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#000] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] border-2 border-[#fff]">
              <span className="truncate">Request a Service</span>
            </button>
          </div>
          <div className="h-5 bg-[#111418]"></div>
        </div>
      </div>
    );
  };
  
  export default Services;