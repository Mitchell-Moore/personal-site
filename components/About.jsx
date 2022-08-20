import React from 'react';
import { FiGithub } from 'react-icons/fi';

const About = () => {
  return (
    <div className="mx-auto px-10 pt-[250px] max-w-[750px]">
      <div className="text-[#ccd6f6] text-5xl font-bold mb-2">
        Hi &#128075;, I’m Mitch!
      </div>

      <div className="text-[#8892b0] text-2xl font-semibold mb-2">
        I’m a software engineer currently at a health care startup. I’m
        passionate about startups, building products that have impact, and ping
        pong.
      </div>
      <div className="text-[#8892b0] text-2xl flex flex-row ">
        <FiGithub className="hover:text-[#64ffda]" />
      </div>
    </div>
  );
};

export default About;
