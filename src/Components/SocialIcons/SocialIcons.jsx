import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="https://reddit.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          <path d="M17 12a5 5 0 0 1-10 0" />
          <line x1="7" y1="9" x2="8" y2="9" />
          <line x1="16" y1="9" x2="17" y2="9" />
        </svg>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors"
      >
        <Twitter size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;