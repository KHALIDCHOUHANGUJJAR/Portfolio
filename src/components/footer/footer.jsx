import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-4 text-center">
      <p className="text-lg font-bold">
        All Rights Reserved © {new Date().getFullYear()} - Made with ❤️ by Khalid Chouhan
      </p>
    </footer>
  );
};

export default Footer;
