import React from "react";
import Container from "./container";
import Button from "./button";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast min-h-11 text-white">
        <Container className="flex items-center min-h-11 ">
          <a href="/" className="h-11 flex items-center px-6 -ml-6">
             <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white ">
        <Container className="flex items-center min-h-11 justify-between">
          <p>Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
