import React from 'react';

const Header = () => {
  return (
    <header className='py-4'>
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border-zinc-600 p-3 rounded-full">
        {/* Left part */}
        <div>
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
            Vitthal<span className="text-slate-400 font-bold"> Sanadhya</span>
          </span>
        </div>

        {/* Mid part */}
        <div className=" hidden sm:flex flex-row space-x-8">
          <p className="text-white cursor-pointer">About</p>
          <p className="text-white cursor-pointer">Skills</p>
          <p className="text-white cursor-pointer">Contact</p>
        </div>

        {/* Right part */}
        <div className="flex space-x-4">
          <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            LinkedIn
          </button>
          <button className="border cursor-pointer text-white border-gray-500 px-4 py-2 rounded-full hover:bg-gray-600">
            Github
          </button>
          <button className="border cursor-pointer text-white border-pink-500 px-4 py-2 rounded-full hover:bg-pink-600">
            Instagram
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
