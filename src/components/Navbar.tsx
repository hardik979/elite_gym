import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-neutral-200 flex justify-between items-center shadow-lg p-1">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="/gymlogo.png"
            alt="Elite Gym Logo"
            className="h-12 md:h-16"
          />
          {/* Gym Name */}
          <h1 className="font-cinzel text-xl md:text-2xl text-black">
            Elite Gym
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
