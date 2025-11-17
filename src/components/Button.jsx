"use client";

import { useApp } from "@/lib/AppContext";
import React from "react";

const Button = ({ onClick, className, isBookCallButton, children }) => {
  const { setShowPopup } = useApp();
  const handleClick = () => {
    if (isBookCallButton) {
      setShowPopup(true);
    } else {
      onClick();
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`bg-primary text-white cursor-pointer px-5 py-2 rounded-full hover:bg-primary/90 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
