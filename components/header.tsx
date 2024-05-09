import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast px-6 min-h-11  text-white flex items-center">
        <a href="/" className="h-11 flex items-center px-6 -ml-6">
           <span className="sr-only">Back to homepage</span>
        </a>
      </header>
      <div className="sticky top-0 bg-backgroundContrast px-6 min-h-11  text-white flex items-center">
        Apple TV+
      </div>
    </>
  );
};

export default Header;
