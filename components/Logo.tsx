import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "h-20" }) => {
  return (
    <div className={`flex items-center justify-center ${className} select-none`}>
      <img
        // Replace this with your **direct image URL**
        src="/lol.jpg"
        alt="Triple Z Fitness Logo"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;