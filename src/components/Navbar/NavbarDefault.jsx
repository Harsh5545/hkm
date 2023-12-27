import React, { useState } from "react";

function NavbarDefault() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    
  };

  return (
    <nav className={`flex flex-col md:flex-row bg-black justify-between items-center px-10 py-5`}>
      <div>
        <h2 className="text-xl text-white font-semibold">Logo</h2>
      </div>

      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button className="text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '☰' : 'X'}
        </button>
      </div>

      <ul className={`flex flex-col md:flex-row items-center gap-2 text-[#bdbdc0] font-medium font-jakarta`}>
        <li>
          <a href="" className="p-3 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Features
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Pricing
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Contact
          </a>
        </li>
      </ul>

      <div className="hidden md:block">
        <button className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25">
          Log in
        </button>
      </div>
    </nav>
  );
}

export default NavbarDefault;
