import React from "react";

const AboutTitle = () => {
  return (
    <div className='flex-[1] justify-around bg-white flex flex-col py-10 text-[3rem] font-bold min-h-full'>
      <span>A</span>
      <span>B</span>
      <span>O</span>
      <span>U</span>
      <span>T</span>
      <span>U</span>
      <span>S</span>
    </div>
  );
};

const ContactQRCodes = () => {
  return (
    <div className='flex-[2] bg-white flex flex-col items-center gap-y-5 py-10'>
      <span className='text-[3rem] font-bold'>Contact</span>
      <img
        src='/images/about/c1ig.png'
        className='h-40 w-40 object-contain hover:scale-110 cursor-pointer transition-transform duration-300'
      />
      <img
        src='/images/about/c2in.png'
        className='h-40 w-40 object-contain hover:scale-110 cursor-pointer transition-transform duration-300'
      />
      <img
        src='/images/about/c3yt.png'
        className='h-40 w-40 object-contain hover:scale-110 cursor-pointer transition-transform duration-300'
      />
      <img
        src='/images/about/c4m.png'
        className='h-40 w-40 object-contain hover:scale-110 cursor-pointer transition-transform duration-300'
      />
    </div>
  );
};

export default function About() {
  return (
    <div className='flex h-full'>
      <AboutTitle />
      <div className='flex-[5] px-10 font-semibold text-lg text-white py-10 text-left flex items-start justify-center'>
        5 WEB Quantum is the page that enables the path for differential
        learning and exploration of Quantum Technologies and Classical
        Technologies. In the Blogs section, you will find insights of knowledge
        on cutting-edge technologies gleaned from a meticulous study of existing
        literature and seasoned with our understanding of these complex concepts
        that will guide you through different technologies in various fields
        such that, in the end, you can understand the contrasts between them.
        <br />
        <br />
        The Design, Research, and Thesis Papers on the following page are
        written by myself, There are three main categories, Quantum, Energy and
        Machines, the Quantum and Energy categories hold the papers on quantum
        theories and technologies and sustainable energy-producing projects and
        the category of the machine accounts the desgines and of objects like
        machines and other mechanical projects. The supportive statements and
        designs taken from various articles, papers, and journal sources are
        always mentioned in the document.
        <br />
        <br />
        As knowledge is gained from blogs and shaped into words from
        perspectives leads me to the next step, which is the physical form of
        the work in the perspective piece. Objects are the prototypes and 3D
        Models of the projects, these are combinations of various complex
        existing technologies as a single solution for modern-day problems.
        <br />
        <br />
        As we go on experimenting with our thoughts and working models we all
        learn from flaws and upgrade ourselves! likely the better versions of
        the thoughts and products are delivered to you along with top tech
        stories throughout the world in the upgrading slider therfour, constant
        level-up with information all around.
        <br />
        <br />
        Myself Vemuri Sri Sasank inviting you to interact and share your
        suggestions, and contribute your unique ideas to the platform. This
        website is a bridge between the theoretical and the practical, a
        platform for knowledge sharing and collaboration, a window into our
        world of innovation and passion. Explore, learn, and be a part of our
        journey as we shape the future of technology.
      </div>
      <ContactQRCodes />

    </div>
  );
}
