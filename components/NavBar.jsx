import React from 'react';

function NavBar() {
  return (
    <div className="relative">
      <div className="absolute top-10 right-10">
        <a
          className="text-[#64ffda] border-[#64ffda] border-solid border-2 rounded-md px-4 py-2"
          href="/Mitchell_Moore_Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default NavBar;
