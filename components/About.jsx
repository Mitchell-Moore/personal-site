import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const About = () => {
  return (
    <div className="mx-auto px-10 pt-[250px] max-w-[750px] relative">
      <div className="text-[#ccd6f6] text-5xl font-bold mb-2">
        Hi &#128075;, I’m Mitch!
      </div>

      <div className="text-[#8892b0] text-2xl font-semibold mb-2">
        I’m a software engineer currently at a health care startup. I’m
        passionate about startups, building products that have impact, and ping
        pong.
      </div>
      <div className="flex flex-row justify-around mt-4">
        <a
          className="text-[#8892b0] text-2xl flex flex-row transition delay-50 ease-in-out hover:-translate-y-1"
          href="https://github.com/Mitchell-Moore"
        >
          <FiGithub className="hover:text-[#64ffda] text-4xl" />
        </a>
        <a
          className="text-[#8892b0] text-2xl flex flex-row transition delay-50 ease-in-out hover:-translate-y-1"
          href="https://www.linkedin.com/in/mitchell-l-moore/"
        >
          <FiLinkedin className="hover:text-[#64ffda] text-4xl" />
        </a>
        <a
          className="text-[#8892b0] text-2xl flex flex-row transition delay-50 ease-in-out hover:-translate-y-1"
          href="mailto: mitchell2077@gmail.com"
        >
          <MdOutlineEmail className="hover:text-[#64ffda] text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default About;
