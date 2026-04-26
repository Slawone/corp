'use client';

import { scrolls } from "@/utils";

export const Footer = () => {
  return (
    <button 
      className="button button-secondary"
      onClick={() => scrolls.scrollToTop()}
    >
      Наверх
    </button>
  );
};
