import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecosystems = () => {
  const timelineItems = [
    {
      period: "Creators",
      content: "Launch your projects safely with us and patent your work.",
      highlighted: true
    },
    {
      period: "Developers",
      content: "Make use of our API in building your best versions of blockchain apps",
      highlighted: false
    },
    {
      period: "Professionals",
      content: "Keep a good record of your most chershed documents, be professional with info",
      highlighted: true
    },
    {
      period: "Farmers",
      content: "Introduction of collaboration hubs for creators and innovators.",
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 pt-20 md:pt-40 lg:pt-60">
      {/* Header Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-6 md:mb-8">
          Our Ecosystem
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-10 md:mb-14 text-center md:text-left">
          Our vision for the future is to create a decentralized ecosystem where creators and innovators thrive. 
          <span className="hidden md:inline"><br /></span>
          Here's what's coming next:
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gray-600"></div>

        {/* Timeline Items */}
        <ul className="list-none text-lg md:text-xl lg:text-2xl text-white space-y-8 md:space-y-12">
          {timelineItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4 md:gap-6 relative pl-12 md:pl-16">
              {/* Icon Circle */}
              <div className="absolute left-0 w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <Calendar size={20} className="text-black" />
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className={`font-bold whitespace-nowrap ${
                  item.highlighted 
                    ? "bg-gradient-to-r from-[#012A93] via-[#ECBFBF] to-[#7628B5] to-[#D9D04F] bg-clip-text text-transparent"
                    : ""
                }`}>
                  {item.period}:
                </span>
                <span className="leading-tight">{item.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="w-full max-w-3xl mt-10 md:mt-14 text-center lg:text-center">
      <Link to="/started" >   <button className='start text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl'>
      Get Started
         
       </button>
       </Link>
      </div>
    </div>
  );
};

export default Ecosystems;