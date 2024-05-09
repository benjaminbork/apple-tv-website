import React from "react";
import Container from "./container";
import Button from "./button";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white z-20 relative">
        <Container className="flex items-center min-h-[--header-row-height] ">
          <a href="/" className="h-11 flex items-center px-6 -ml-6 text-xl">
             <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white z-20">
        <Container className="flex items-center min-h-[--header-row-height] justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
